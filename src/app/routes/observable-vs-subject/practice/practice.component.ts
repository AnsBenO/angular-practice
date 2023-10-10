import { Component } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Component({
    selector: "app-practice",
    templateUrl: "./practice.component.html",
    styleUrls: ["./practice.component.css"],
})
export class PracticeComponent {
    observableData!: any;
    observableData2!: any;
    subjectData!: any;
    subjectData2!: any;

    getObservableData() {
        //?cold: They emit data only when there is a subscriber
        //?unicast by default: each subscriber owns an independent execution of the observable
        let myObservable = new Observable<number>(observable =>
            observable.next(Math.round(Math.random() * 10))
        );
        myObservable.subscribe((data: number) => (this.observableData = data));
        myObservable.subscribe((data: number) => (this.observableData2 = data));
    }
    getSubjectData() {
        //?both an Observer and an Observable: It can emit values and subscribe to values
        //?hot: They emit data even if there is no subscriber
        //?multicast: the execution is shared among multiple subscribers
        let mySubject = new Subject<number>();
        mySubject.subscribe((data: number) => (this.subjectData = data));
        mySubject.subscribe((data: number) => (this.subjectData2 = data));

        mySubject.next(Math.round(Math.random() * 10));
    }
}
