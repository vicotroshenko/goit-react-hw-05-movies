import AddInformation from "components/AddInformation/AddInformation";
import MovieCard from "components/MovieCard/MovieCard";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "servis/API";
import { RiArrowGoBackLine } from 'react-icons/ri';

const MovieDetails=()=> {
	const { movieId } = useParams();
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(false);

	const location = useLocation();
	const backLinkHref = useRef(location.state?.from ?? "/movies");


	useEffect(() => {
		(async () => {
			try {
				const movie = await getMovieDetails(movieId);
				setMovie(movie);
				setLoading(true);
			} catch (error) {
				console.log(error.message);
			}
		})();
	}, [movieId]);


	if(loading){
		return (
		<main>
			<NavLink style={{
				display: "inline-block",
				padding: 5, 
				marginLeft: 10,
				border: "1px solid black", 
				borderRadius: 8,
				textDecoration: "none",
				color: "black",
				}} to={backLinkHref.current}><RiArrowGoBackLine/>Go back</NavLink>
			<MovieCard moviesData={movie}></MovieCard>
			<AddInformation />
		</main>
		)
	}
};

export default MovieDetails;