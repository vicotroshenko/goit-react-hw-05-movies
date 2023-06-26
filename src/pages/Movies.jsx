import { useEffect, useState  } from 'react';
import { useSearchParams } from "react-router-dom";
import MoviesList from 'components/MoviesList/MoviesList';
import { searchMovies } from 'servis/API';


const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const name = searchParams.get("name") ?? "";

	const getSubmitMovies=(event)=>{
		event.preventDefault();
		setSearchParams({ name: event.target[0].value });
	};

	useEffect(() => {
		if(name===""){
			return;
		}
		(async ()=> {
			try {
				const searchedMovies = await searchMovies(name);
				setMovies(searchedMovies.results);
			} catch (error) {
				console.log(error.message);
			}
		})()
	}, [name]);
	return (
		<main>
			<form onSubmit={getSubmitMovies}>
					<input type="text" defaultValue={name}/>
					<button type='submit'>Search</button>
			</form>
			<MoviesList movies={movies}/>
		</main>
		
	)
}

export default Movies;