import axios from "axios";
import { setLoading } from "../redux/actions/general";
import store from "../redux/store";

const BASE_API = "http://api.doanky5.huyhoangdev.engineer/api";

export default async function callApi({
	url,
	method,
	data,
	option,
}) {
	const token = store.getState().user.token;
	return new Promise((resolve, reject) => {
		store.dispatch(setLoading(true));
		axios({
			method,
			url: `${BASE_API}${url}`,
			data,
			headers: { ...option?.headers, Authorization: `Bearer ${token}`, },
			// ...option,
		})
			.then((res) => {
				store.dispatch(setLoading(false));
				console.log("promise", res)
				resolve(res.data);
			})
			.catch((err) => {
				store.dispatch(setLoading(false));
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

