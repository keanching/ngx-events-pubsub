import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let customers = [
      { id: '1', firstName: 'Kean', lastName: 'Ching', company: 'KC Corp', age: 25 },
      { id: '2', firstName: 'John', lastName: 'Doe', company: 'Google', age: 29 },
      { id: '3', firstName: 'Amy', lastName: 'Smith', company: 'Apple', age: 45 },
      { id: '4', firstName: 'Gary', lastName: 'Johnson', company: 'Amazon', age: 36 },
      { id: '5', firstName: 'Lee', lastName: 'Allen', company: 'Facebook', age: 18 }
    ];

    return { customers };
  }
}
