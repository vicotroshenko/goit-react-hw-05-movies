import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "servis/API";


const Reviews = () => {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState([])
	

	useEffect(() => {
		(async () => {
			try {
				const reviewsList =  await getReviews(movieId);
				setReviews(reviewsList.results);
			} catch (error) {
				console.log(error.message);
			}
		})();
	}, [movieId])
	if(reviews.length > 0){
		return (
			<ul>
				{reviews.map(({author, content, id}) => (
					<li key={id}>
						<h3>Author: {author}</h3>
					<p>{content}</p>
			</li>
				))}
			</ul>
		)
	}
	if(reviews.length === 0){
		return (<p>Reviews not found</p>)
	}

};

export default Reviews;