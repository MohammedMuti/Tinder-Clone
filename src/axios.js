import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-backend-7gbc.onrender.com",
});

export default instance;
