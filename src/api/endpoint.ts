import axios from "axios";

const ENDPOINT_PROD = "https://35.180.34.13/api/v1"
// const ENDPOINT = "http://localhost:8080/api/v1";
export const API = axios.create({
    baseURL: ENDPOINT_PROD,
    headers: {
        "Content-Type": "application/json",
    }
})



