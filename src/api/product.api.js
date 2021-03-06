import httpRequest from "../services/httpRequest";
import callApi from "./baseApi";

export const getListProduct = async () => {
  return callApi({
    url: '/product/get-all-product',
    method: 'get'
  })
};

export const getListProductNotLoading = async () => {
  return callApi({
    url: '/product/get-all-product',
    method: 'get',
    showLoading: false
  })
}