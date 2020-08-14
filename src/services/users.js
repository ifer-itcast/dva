import request from "../utils/request";

export const getUsers = () => request("/api/users");