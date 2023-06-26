import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "servis/API";
import css from './Cast.module.css';

const Cast = () => {
	const { movieId } = useParams();
	const [cast, setCast] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const castList =  await getCast(movieId);
				setCast(castList.cast);
			} catch (error) {
				console.log(error.message);
			}
		})();
	}, [movieId])

 	if(cast.length > 0) {
		return (
		<div>
			<ul>
					{cast.map(({cast_id, character, original_name, profile_path})=> (
					<li key={cast_id}>
						<div className={css["image-box"]}>
							{profile_path ? <img className={css.img} src={`https://image.tmdb.org/t/p/w300/${profile_path}`} alt={original_name} />
							: <p><b>Not Found</b></p>}
						</div>
						<p>{original_name}</p>
						<p>{character}</p>
					</li>
					))}
				</ul>
			</div>
		)
 	}
	if(cast.length === 0 || null || undefined) {
		return (<p>Cast not found</p>)
	}
}

export default Cast;