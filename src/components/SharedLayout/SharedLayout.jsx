import { NavLink, Outlet } from "react-router-dom";
import css from './SharedLayout.module.css'
import { Suspense } from "react";



const SharedLayout = () => {
	return (<div>
		<header className={css.header}>
			<nav id="sidebar">
				<NavLink 
				className={css.link}
				style={({ isActive }) => ({color: isActive ? "white" : "", backgroundColor: isActive ? "coral" : ""})} 
				to='/'>
					Home
				</NavLink>
				<NavLink className={css.link}
				style={({ isActive }) => ({color: isActive ? "white" : "", backgroundColor: isActive ? "coral" : ""})} 
				to='/movies'>Movies</NavLink>
			</nav>
		</header>
		<Suspense fallback={<div>Loading page...</div>}>
			<Outlet/>
		</Suspense>

	</div>

	)
};

export default SharedLayout;