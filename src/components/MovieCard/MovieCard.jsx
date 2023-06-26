import PropTypes from 'prop-types';
import css from "./MoviesCard.module.css"

const MovieCard = ({ moviesData }) => {
	const { genres, poster_path, overview, release_date, title, vote_average} = moviesData;
	const vote = Math.floor(vote_average*10);
	const date = release_date.split('').slice(0, 4).join('');
	
		return (
			<section>
				<div className={css["infoCard-container"]}>
					<div className={css["infoCard-img"]}>
						{poster_path ? <img className={css.img} src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}/>
						: <p><b>Not Found</b></p>}
					</div>
					<div>
						<h2 style={{display: "inline-block", marginRight: 5}}>{title}</h2>
						<span style={{fontSize: 20}}><b>({date})</b></span>
						<p>{`User score ${vote}%`}</p>
						<h3>Overview</h3>
						<p>{overview}</p>
						<h3>Genres</h3>
						{genres?.map(({id, name}) => <span style={{marginRight: 5}}key={id}>{name}</span>)}
					</div>
				</div>
			</section>
		)
	
};
export default MovieCard;

MovieCard.propTypes ={
	moviesData: PropTypes.shape({
		genres: PropTypes.array.isRequired, 
		poster_path: PropTypes.string.isRequired, 
		overview: PropTypes.string.isRequired, 
		release_date: PropTypes.string.isRequired, 
		title: PropTypes.string.isRequired, 
		vote_average: PropTypes.number.isRequired,
})
};