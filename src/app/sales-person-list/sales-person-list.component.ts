import { Component } from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list', // to include this component in the app.component.html file, we need to use the selector name as the HTML tag.
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
      new SalesPerson("Bobby", "Ross", "bobbyross@mock.com", 50000),
      new SalesPerson("Tom", "Hopkins", "tomhoplins@mock.com", 40000),
      new SalesPerson("Sue", "Smith", "suesmith@mock.com", 90000),
      new SalesPerson("Mark", "Johnson", "markjohnson@mock.com", 100000),
  ]

    ngOnInit() {} // a lifecycle hook in Angular that is called after the constructor is called and after the component's inputs have been initialized. It is used to perform any additional initialization that is required for the component. ngOnInit is commonly used to call services or to set up subscriptions.

}
