import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FetchUserResponse, User } from "./user.model";

@Injectable({providedIn: 'root'})
export class UsersService {

    constructor(private httpClient: HttpClient) {}

    public getUsers() {
        return this.httpClient.get<FetchUserResponse>('https://dummyjson.com/users');
    }

    public patchUsers(alteredInfo: User) {
        return this.httpClient
        .patch<FetchUserResponse>(`https://dummyjson.com/users/${alteredInfo?.id}`, alteredInfo);
    }
}