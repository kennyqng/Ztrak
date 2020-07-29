import axios from 'axios';

export const signup = user => axios.post("/auth/signup", user);
export const login = user => axios.post("/auth/login", user);
export const logout = () => axios.get("/auth/logout")