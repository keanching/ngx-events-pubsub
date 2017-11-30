import { Component, OnInit } from '@angular/core';

import { EventService, MyEvent } from '../event.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  constructor(private eventService: EventService) {
  }

  ngOnInit() {
  }

  searchCustomers(searchString: string) {
    this.eventService.publish(MyEvent.ON_SUBMIT_SEARCH, searchString);
  }

}
