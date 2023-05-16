import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

//connect the API endpoint to the backend middleware
API.interceptors.request.use((req) => {
  if (localStorage.getItem("auth")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("auth")).token
    }`;
  }

  return req;
});

//API endpoint to posts
export const getPosts = () => API.get("/posts");
export const getPostsBySearch = (searchQuery) =>
  API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}`);
export const addPosts = (data) => API.post("/posts", data);
export const updatePost = (id, data) => API.patch(`/posts/${id}`, data);
export const deletePost = (id) => API.delete(`/posts/${id}`);

//API endpoint to user authentication
export const signin = (userData) => API.post("/users/signin", userData);
export const signup = (userData) => API.post("/users/signup", userData);
