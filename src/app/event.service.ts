import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export enum MyEvent {
    ON_SUBMIT_SEARCH,
    ON_DETAILS_CLICKED
}

@Injectable()
export class EventService {
  private submitSearchSubject = new Subject<any>();
  private submitSearchObs$ = this.submitSearchSubject.asObservable();

  private detailsSubject = new Subject<any>();
  private detailsObs$ = this.detailsSubject.asObservable();

  constructor() {
  }

  publish(eventType: MyEvent, data: any) {
    console.log('Publishing event = ' + MyEvent[eventType] + ', data: ', data);

    switch (eventType) {
      case MyEvent.ON_SUBMIT_SEARCH:
        this.submitSearchSubject.next(data);
        break;

      case MyEvent.ON_DETAILS_CLICKED:
        this.detailsSubject.next(data);
        break;

      default:
        break;
    }
  }

  getObservable(eventType: MyEvent): Observable<any> {
    switch (eventType) {
      case MyEvent.ON_SUBMIT_SEARCH:
        return this.submitSearchObs$;

      case MyEvent.ON_DETAILS_CLICKED:
        return this.detailsObs$;

      default:
        break;
    }

    return null;
  }
}
