import callApi from "./baseApi";

export const getListCategory = async (data) => {
  return callApi({
    url: '/category',
    method: 'get'
  })
}