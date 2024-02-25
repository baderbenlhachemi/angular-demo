import { Injectable } from '@angular/core';
import {SalesPerson} from "../model/sales-person";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SalesPersonServiceService {

  salesPersonList: SalesPerson[] = [];

  constructor() {
    this.salesPersonList=[
      new SalesPerson("Bobby", "Ross", "bobbyross@mock.com", 50000),
      new SalesPerson("Tom", "Hopkins", "tomhoplins@mock.com", 40000),
      new SalesPerson("Sue", "Smith", "suesmith@mock.com", 90000),
      new SalesPerson("Mark", "Johnson", "markjohnson@mock.com", 100000)
    ]
  }

  public getSalesPersonList() : Observable<SalesPerson[]> {
    return of(this.salesPersonList);
  }

}
