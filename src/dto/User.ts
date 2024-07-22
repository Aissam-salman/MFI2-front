import {Role} from "@/dto/RegisterRequest.ts";

export type User = {
    firstname: string;
    lastname: string;
    email: string;
    role: Role;
}