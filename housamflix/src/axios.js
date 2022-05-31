import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoveidb/3"
});

export default instance;