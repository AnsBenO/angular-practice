import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./routes/home/home.component";
import { CounterRouteModule } from "./routes/counter-route/counter-route.module";
import { ObservableVsSubjectModule } from "./routes/observable-vs-subject/observable-vs-subject.module";
import { DiceGameModule } from "./routes/dice-game/dice-game.module";
import { TableModule } from "./routes/table/table.module";

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CounterRouteModule,
        ObservableVsSubjectModule,
        DiceGameModule,
        TableModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
