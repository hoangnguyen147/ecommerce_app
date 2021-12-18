import httpRequest from "../services/httpRequest";

export const userLogin = async (data) => {
  return httpRequest.post('/auth/login', data, {
    showSpinner: true
  })
}