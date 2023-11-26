export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export interface FetchUserResponse {
    users: User[],
    total: number,
    skip: number,
    limit: number
}