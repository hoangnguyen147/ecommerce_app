import callApi from "./baseApi";

export const getUserOrders = async () => {
  return callApi({
    url: '/order',
    method: 'get'
  })
}