import { useEffect, useState } from "react";
import { getTopMovies } from 'servis/API';
import MoviesList from "components/MoviesList/MoviesList";

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		(async ()=> {
			try {
				const moviesList = await getTopMovies();
				setMovies(moviesList.data.results);
			} catch (error) {
				console.log(error.message);
			}
		})()
	}, [])
	
	return (
		<main>
			<h1>Trending today</h1>
			<MoviesList movies={movies}/>
		</main>
	)
}

export default Home;