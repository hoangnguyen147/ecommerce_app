import callApi from "./baseApi";

export const getListCategory = async () => {
  return callApi({
    url: '/category',
    method: 'get'
  })
}