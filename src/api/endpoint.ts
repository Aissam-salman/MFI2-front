import axios from "axios";

const ENDPOINT_PROD = "https:///ec2-13-38-227-186.eu-west-3.compute.amazonaws.com/api/v1"
// const ENDPOINT = "http://localhost:8080/api/v1";
export const API = axios.create({
    baseURL: ENDPOINT_PROD,
    headers: {
        "Content-Type": "application/json",
    }
})



