import { Component, OnDestroy, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";
import { UserInterface } from "../types/user.interface";
import { Subject, takeUntil } from "rxjs";
import { SortingInterface } from "../types/sorting.interface";

@Component({
    selector: "app-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit, OnDestroy {
    users!: UserInterface[];
    usersColumns!: Array<keyof UserInterface>;
    destroy$ = new Subject<void>();
    sorting: SortingInterface = {
        column: "id",
        order: "desc",
    };

    constructor(private userService: UsersService) {}
    ngOnInit(): void {
        this.fetchData();
    }

    fetchData(): void {
        this.userService
            .getUsers(this.sorting)
            .pipe(takeUntil(this.destroy$))
            .subscribe(users => {
                this.users = users;
                this.usersColumns = Object.keys(users[0]) as Array<
                    keyof UserInterface
                >;
            });
    }
    switchSorting(col: string) {
        this.sorting.column = col;
        this.sorting.order = this.isDescSorting(col) ? "asc" : "desc";
        this.fetchData();
    }
    isAscSorting(col: string): boolean {
        return this.sorting.column === col && this.sorting.order === "asc";
    }
    isDescSorting(col: string): boolean {
        return this.sorting.column === col && this.sorting.order === "desc";
    }
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
