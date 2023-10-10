import { Component } from "@angular/core";
import { ButtonComponent } from "../button/button.component";
@Component({
    selector: "app-counter",
    templateUrl: "./counter.component.html",
    styleUrls: ["./counter.component.css"],
})
export class CounterComponent {
    counter: number = 0;
    step: number = 1;

    public increment(): void {
        this.counter += this.step;
    }
    public decrement(): void {
        if (this.counter - this.step >= 0) this.counter -= this.step;
    }
    public reset(): void {
        this.counter = 0;
    }

    public setStep(newStep: number) {
        this.step = newStep;
    }
}
