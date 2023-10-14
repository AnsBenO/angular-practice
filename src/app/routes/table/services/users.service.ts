import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { UserInterface } from "../types/user.interface";

@Injectable({
    providedIn: "root",
})
export class UsersService {
    constructor() {}

    private users: UserInterface[] = [
        {
            id: "1",
            name: "Alice",
            age: 28,
        },
        {
            id: "2",
            name: "Bob",
            age: 32,
        },
        {
            id: "3",
            name: "Charlie",
            age: 24,
        },
        {
            id: "4",
            name: "David",
            age: 35,
        },
        {
            id: "5",
            name: "Eve",
            age: 29,
        },
    ];

    getUsers(): Observable<UserInterface[]> {
        return of(this.users);
    }
}
