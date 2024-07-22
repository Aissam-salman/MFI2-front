import {Role} from "@/dto/RegisterRequest.ts";

export type AuthRequest = {
    email: string;
    password: string;
    role: Role;
}