import callApi from "./baseApi";

export const getUserOrders = async () => {
  return callApi({
    url: '/order',
    method: 'get'
  })
}

export const postAddOrder = async (data) => {
  return callApi({
    url: '/order/add-order',
    method: 'post',
    data: data
  })
}