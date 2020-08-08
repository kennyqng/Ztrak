import axios from 'axios';

export const signup = user => axios.post("/api/auth/signup", user);
export const login = user => axios.post("/api/auth/login", user);
export const logout = () => axios.get("/api/auth/logout");
export const sleepWake = (data,id) => axios.put("/api/sleep/newentry/"+id, data);
export const wakeUp = (data,id) => axios.put("/api/sleep/wakeup/"+id, data);
// export const hrsSlept = (data,id) => axios.put("/api/sleep/hrsSlept/"+id, data);
export const getCurrentUser = () => axios.get("/api/auth/user_data");
