import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CustomerService } from '../customer.service';
import { EventService, MyEvent } from '../event.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  @Output()
  searchClick = new EventEmitter<string>();

  constructor(private eventService: EventService, private customerService: CustomerService) {
  }

  ngOnInit() {
  }

  searchCustomers(searchString: string) {
    this.searchClick.emit(searchString);
    this.eventService.publish(MyEvent.ON_SUBMIT_SEARCH, searchString);
  }

}
