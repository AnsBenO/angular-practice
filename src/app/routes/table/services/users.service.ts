import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { UserInterface } from "../types/user.interface";
import { SortingInterface } from "../types/sorting.interface";

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

    getUsers(sorting: SortingInterface): Observable<UserInterface[]> {
        const sortedUsers = [...this.users];
        sortedUsers.sort((u1, u2) => {
            const columnA = u1[sorting.column as keyof UserInterface];
            const columnB = u2[sorting.column as keyof UserInterface];

            if (sorting.order === "asc") {
                return columnA > columnB ? -1 : columnA < columnB ? 1 : 0;
            } else {
                return columnA < columnB ? -1 : columnA > columnB ? 1 : 0;
            }
        });

        return of(sortedUsers);
    }
}
