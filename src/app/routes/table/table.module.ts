import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table/table.component";
import { UsersService } from "./services/users.service";

@NgModule({
    declarations: [TableComponent],
    imports: [CommonModule],
    exports: [TableComponent],
    providers: [UsersService],
})
export class TableModule {}
