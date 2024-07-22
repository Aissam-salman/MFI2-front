import {RegisterRequest} from "@/dto/RegisterRequest.ts";
import {AuthRequest} from "@/dto/AuthRequest.ts";
import {API} from "@/api/endpoint.ts";

class UserDataService {
    register(req: RegisterRequest) {
        return API.post("/auth/signup", req);
    }

    login(req: AuthRequest) {
        return API.post("/auth/login", req);
    }

    all() {
        return API.get("/users");
    }

}

export default new UserDataService();