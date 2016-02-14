import axios from 'axios';

const API_KEY = '6cf2f140c3ce4600d33e7b21d85dd9da';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	// redux-promise installed as middleware
	// once there is a request, it stops and waits and sends it over to the reducer once
	// the response is given as a payload.
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}