import httpRequest from "../services/httpRequest";
import callApi from "./baseApi";

export const userLogin = async (data) => {
  return callApi({
    url: "/auth/login",
    method: "post",
    data: data
  })
}