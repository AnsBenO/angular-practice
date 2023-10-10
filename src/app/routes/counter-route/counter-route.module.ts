import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CounterComponent } from "./counter/counter.component";
import { ButtonComponent } from "./button/button.component";

@NgModule({
    declarations: [CounterComponent, ButtonComponent],
    imports: [CommonModule],
})
export class CounterRouteModule {}
