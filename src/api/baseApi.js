import axios from "axios";
import cookie from "js-cookie";
import { offLoading, setLoading } from "../redux/actions/general";
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
		store.dispatch(setLoading(true));
		axios({
			method,
			url: `${BASE_API}${url}`,
			data,
			headers: { ...option?.headers, Authorization: `Bearer ${token}` },
			// ...option,
		})
			.then((res) => {
				store.dispatch(offLoading());
				resolve(res.data);
			})
			.catch((err) => {
				store.dispatch(offLoading());
				reject(err);
			});
	});
}

