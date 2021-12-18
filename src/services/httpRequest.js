import { AxiosInstance } from 'axios';
import { axiosInstance } from './initRequest';

class HttpRequest {

  constructor() {
    this.api = axiosInstance;
  }

  async get(url, config) {
    return this.api.get(url, config);
  }

  async post(url, data, config) {
    return this.api.post(url, data, config);
  }

  async put(url, data, config) {
    return this.api.put(url, data, config);
  }

  async patch(url, data, config) {
    return this.api.patch(url, data, config);
  }

  async delete(url, config) {
    return this.api.delete(url, config);
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;
