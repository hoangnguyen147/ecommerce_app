import callApi from "./baseApi";

export const userLogin = async (data) => {
  return callApi({
    url: "/auth/login",
    method: "post",
    data: data
  })
};

export const getMe = async () => {
  return callApi({
    url: "/user/get-me",
    method: "get",
  })
}