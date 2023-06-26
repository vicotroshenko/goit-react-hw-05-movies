import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ movies }) => {
	const location = useLocation();
	const path = location.pathname === '/' ? '/movies/' : '';
	return (<ul>
		{movies.map(({id, name, title}) => (<li key={id}>
			<Link id={id} to={`${path}${id}`} state={{ from: location }}>{name || title}</Link>
		</li>))}
	</ul>
	)
};

export default MoviesList;

MoviesList.propTypes ={
	movies: PropTypes.array.isRequired,
}