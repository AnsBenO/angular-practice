import { Component } from "@angular/core";

@Component({
    selector: "app-dice",
    templateUrl: "./dice.component.html",
    styleUrls: ["./dice.component.css"],
})
export class DiceComponent {
    currentFace: number = 1;
    playDice() {
        const newValue = Math.floor(Math.random() * 6) + 1;
        this.currentFace = newValue;
    }
}
