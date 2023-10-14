import { Component, OnDestroy, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";
import { UserInterface } from "../types/user.interface";
import { Observable, Subject, takeUntil } from "rxjs";

@Component({
    selector: "app-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit, OnDestroy {
    users!: UserInterface[];
    usersColumns!: Array<keyof UserInterface>;
    destroy$ = new Subject<void>();
    constructor(private userService: UsersService) {}
    ngOnInit(): void {
        this.userService
            .getUsers()
            .pipe(takeUntil(this.destroy$))
            .subscribe(users => {
                this.users = users;
                this.usersColumns = Object.keys(users[0]) as Array<
                    keyof UserInterface
                >;
            });
    }
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
