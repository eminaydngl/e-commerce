import axios from "axios";

const instance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com"
});

export default instance;