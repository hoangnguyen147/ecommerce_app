import axios from "axios";
import store from "../redux/store";

const BASE_API = "";

export default async function callApi({
	url,
	method,
	data,
	option,
}) {
	const token = "";
	return new Promise((resolve, reject) => {
		// store.dispatch(setLoading(true));
		axios({
			method,
			url: `${BASE_API}${url}`,
			data,
			headers: { ...option?.headers, Authorization: `Bearer ${token}`, },
			// ...option,
		})
			.then((res) => {
				// store.dispatch(offLoading());
				console.log("promise", res)
				resolve(res.data);
			})
			.catch((err) => {
				// store.dispatch(offLoading());
				reject(err);
			});
	});
}

export const testApi = async () => {
    return callApi({
        url: "/WeatherForecast",
        method: "get"
    })
}

