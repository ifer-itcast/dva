import request from "../utils/request";

export const getProducts = () => request("/api/products");
export const deleteProduct = id => request(`/api/deleteProduct?id=${id}`);