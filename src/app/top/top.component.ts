import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';
import { EventService, MyEvent } from '../event.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  constructor(private eventService: EventService, private customerService: CustomerService) {
  }

  ngOnInit() {
  }

  searchCustomers(searchString: string) {
    this.eventService.publish(MyEvent.ON_SUBMIT_SEARCH, searchString);
  }

}
