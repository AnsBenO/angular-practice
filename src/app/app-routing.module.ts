import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./routes/counter-route/counter/counter.component";
import { HomeComponent } from "./routes/home/home.component";
import { PracticeComponent } from "./routes/observable-vs-subject/practice/practice.component";
import { DiceComponent } from "./routes/dice-game/dice/dice.component";
const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "counter", component: CounterComponent },
    { path: "ObservableVsSubject", component: PracticeComponent },
    { path: "dice", component: DiceComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
