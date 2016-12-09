import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appCompSearchCriteria: string;

  onSearchClicked(data: string) {
    console.log('searchClick event: ' + data);
    this.appCompSearchCriteria = data;
  }
}
