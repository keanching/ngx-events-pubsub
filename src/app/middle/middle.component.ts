import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CustomerService } from '../customer.service';
import { EventService, MyEvent } from '../event.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  subscription: Subscription;
  searchResults: any[];

  constructor(private eventService: EventService, private customerService: CustomerService) {
  }

  ngOnInit() {
    this.subscription = this.eventService.getObservable(MyEvent.ON_SUBMIT_SEARCH).subscribe(
      searchCriteria => {
        console.group('MiddleComponent: Received ON_SUBMIT_SEARCH event');
        console.log('Search criteria: ' + searchCriteria);
        console.groupEnd();
        this.searchCustomers(searchCriteria);
      }
    );

    console.log('MiddleComponent: Subscribed to ' + MyEvent[MyEvent.ON_SUBMIT_SEARCH]);
  }

  searchCustomers(searchCriteria: string) {
    this.isLoading = true;
    this.searchResults = undefined;

    console.log('MiddleComponent: Searching...');
    this.customerService.searchCustomers(searchCriteria).subscribe(
      searchResults => {
        console.group('MiddleComponent: Got search results from server');
        console.log('Search results', searchResults);
        console.groupEnd();
        this.searchResults = searchResults;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('MiddleComponent: Searching of customers completed');
        this.isLoading = false;
      }
    );
  }

  onClick(detailSummary: any) {
    console.log('MiddleComponent: Clicked on details for customer ' + detailSummary.id);
    this.eventService.publish(MyEvent.ON_DETAILS_CLICKED, detailSummary);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('MiddleComponent destroyed');
  }
}
