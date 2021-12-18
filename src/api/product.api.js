import httpRequest from "../services/httpRequest";
import callApi from "./baseApi";

export const getListProduct = async (data) => {
  return callApi({
    url: '/product/get-all-product',
    method: 'get'
  })
}