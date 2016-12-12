import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CustomerService } from '../customer.service';
import { EventService, MyEvent } from '../event.service';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  detailsSub: Subscription;
  searchSub: Subscription;
  fullDetail: any;

  constructor(private eventService: EventService, private customerService: CustomerService) {
  }

  ngOnInit() {
    this.detailsSub = this.eventService.getObservable(MyEvent.ON_DETAILS_CLICKED).subscribe(
      detailSummary => {
        console.group('BottomComponent: Received ON_DETAILS_CLICKED event');
        console.log('Detail summary', detailSummary);
        console.groupEnd();
        this.getDetails(detailSummary.id);
      }
    );

    this.searchSub = this.eventService.getObservable(MyEvent.ON_SUBMIT_SEARCH).subscribe(
      searchCriteria => {
        console.log('BottomComponent: Received ON_SUBMIT_SEARCH event');
        this.fullDetail = undefined;
      }
    );

    console.log('BottomComponent: Subscribed to ' + MyEvent[MyEvent.ON_DETAILS_CLICKED]);
    console.log('BottomComponent: Subscribed to ' + MyEvent[MyEvent.ON_SUBMIT_SEARCH]);
  }

  getDetails(id: string) {
    this.isLoading = true;
    this.fullDetail = undefined;

    console.log('BottomComponent: Getting full details...');
    this.customerService.getDetails(id).subscribe(
      details => {
        console.group('BottomComponent: Got full details from server');
        console.log('Full details: ', details);
        console.groupEnd();
        this.fullDetail = details;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('BottomComponent: Retrieving full customer details completed');
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy() {
    this.detailsSub.unsubscribe();
    this.searchSub.unsubscribe();
    console.log('BottomComponent destroyed');
  }
}
