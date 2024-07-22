export type RegisterRequest = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: Role;
    siret?: string
}

export enum Role {
    CLIENT, ADMIN, PRODUCER
}

export const getRoleString = (roleNumber: Role): string => {
    return Role[roleNumber];
};