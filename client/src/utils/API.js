import axios from 'axios';

export const login = data => axios.post("/api/auth/login", data);
export const signup = data => axios.post("/api/auth/signup", data)