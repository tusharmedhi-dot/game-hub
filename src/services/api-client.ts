import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "12811374eced43dbb6731e6d86bfb390",
  },
});
export default apiClient;
