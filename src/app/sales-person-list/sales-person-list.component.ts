import { Component } from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
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

}
