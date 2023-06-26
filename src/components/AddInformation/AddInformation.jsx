import { Link, Outlet } from "react-router-dom";
import css from './AddInformation.module.css'
import { Suspense } from "react";

const AddInformation = () => {
	return (
		<div>
			<h2>Additional information</h2>
			<ul className={css.list}>
				<li>
					<Link to="cast">Cast</Link>
				</li>
				<li>
					<Link to="reviews">Reviews</Link>
				</li>
			</ul>
			<Suspense fallback={<div>Loading subpage...</div>}>
				<Outlet/>
			</Suspense>

		</div>
	)
}
export default AddInformation;