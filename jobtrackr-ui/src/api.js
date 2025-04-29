import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5153/api",
});

export default api;
