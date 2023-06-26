import axios from "axios";

// const API_KEY = "920cb20e777a7a7d295f72378e3fc1f7";
const baseUrl = 'https://api.themoviedb.org/3/';

export const getTopMovies = async () => {
	const topMovies = 'trending/all/day?language=en-US';
	const respons = await axios.get(baseUrl+topMovies, {
		headers: {
			Accept: "application/json",
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjBjYjIwZTc3N2E3YTdkMjk1ZjcyMzc4ZTNmYzFmNyIsInN1YiI6IjY0OTU0OTVlZDIzNmU2MDExZTA5ZTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R2L5Wy4UdWUAvySxIZAdz2Q2Nl5VLWs3qlmhZ66-AXo'
		}});
	return respons;
}

export const searchMovies = async (name) => {
	const searchUrl = `search/movie?query=${name}&include_adult=false&language=en-US&page=1`
	const respons = await axios.get(baseUrl+searchUrl, {
		headers: {
			Accept: "application/json",
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjBjYjIwZTc3N2E3YTdkMjk1ZjcyMzc4ZTNmYzFmNyIsInN1YiI6IjY0OTU0OTVlZDIzNmU2MDExZTA5ZTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R2L5Wy4UdWUAvySxIZAdz2Q2Nl5VLWs3qlmhZ66-AXo'
		}});
	return respons.data;
}

export const getMovieDetails = async (id) => {
	const movieUrl = `movie/${id}?language=en-US`
	const respons = await axios.get(baseUrl+movieUrl, {
		headers: {
			Accept: "application/json",
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjBjYjIwZTc3N2E3YTdkMjk1ZjcyMzc4ZTNmYzFmNyIsInN1YiI6IjY0OTU0OTVlZDIzNmU2MDExZTA5ZTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R2L5Wy4UdWUAvySxIZAdz2Q2Nl5VLWs3qlmhZ66-AXo'
		}});
	return respons.data;
}


export const getCast = async (id) => {
	const castUrl = `movie/${id}/credits?language=en-US`
	const respons = await axios.get(baseUrl+castUrl, {
		headers: {
			Accept: "application/json",
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjBjYjIwZTc3N2E3YTdkMjk1ZjcyMzc4ZTNmYzFmNyIsInN1YiI6IjY0OTU0OTVlZDIzNmU2MDExZTA5ZTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R2L5Wy4UdWUAvySxIZAdz2Q2Nl5VLWs3qlmhZ66-AXo'
		}});
	return respons.data;
}

export const getReviews = async (id) => {
	const reviewsUrl = `movie/${id}/reviews?language=en-US&page=1`
	const respons = await axios.get(baseUrl+reviewsUrl, {
		headers: {
			Accept: "application/json",
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjBjYjIwZTc3N2E3YTdkMjk1ZjcyMzc4ZTNmYzFmNyIsInN1YiI6IjY0OTU0OTVlZDIzNmU2MDExZTA5ZTUyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R2L5Wy4UdWUAvySxIZAdz2Q2Nl5VLWs3qlmhZ66-AXo'
		}});
	return respons.data;
}