import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  constructor(private http: Http) {
  }

  searchCustomers(someSearchValue: string): Observable<any[]> {
    return this.http.get('api/customers')
      .map((response) => {
        let retList = response.json().data.map(element => {
          return {
            id: element.id,
            firstName: element.firstName
          };
        });

        return retList;
      }
    );
  }

  getDetails(id: string): Observable<any> {
    return this.http.get(`api/customers/${id}`).map(response => response.json().data);
  }

}
