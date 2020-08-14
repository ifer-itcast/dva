import request from "../utils/request";

export function getUser() {
    return request("/api/user");
}
export function getProduct() {
    return request("/api/product");
}
