import callApi from "./baseApi";

export const postAddComment = async (data) => {
  return callApi({
    url: '/comment/add-comment',
    method: 'post',
    data: data
  })
}

export const getComments = async (id) => {
  return callApi({
    url: `/comment/get-comment/${id}`,
    method: 'get',
  })
}