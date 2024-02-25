import {Component, OnInit} from '@angular/core';
import {SalesPerson} from "./sales-person";
import {SalesPersonServiceService} from "../service/sales-person-service.service";

@Component({
  selector: 'app-sales-person-list', // to include this component in the app.component.html file, we need to use the selector name as the HTML tag.
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent implements OnInit{

    // create an array of objects
    salesPersonList: SalesPerson[] = [];

    // create an instance of the SalesPersonServiceService class and inject it into the constructor
    constructor(private salesPersonService: SalesPersonServiceService) {
    }

    // a lifecycle hook in Angular that is called after the constructor is called and after the component's inputs have been initialized. It is used to perform any additional initialization that is required for the component. ngOnInit is commonly used to call services or to set up subscriptions.
    ngOnInit() {
        this.salesPersonService.getSalesPersonList().subscribe( // call the getSalesPersonList() method of the SalesPersonServiceService class and subscribe to the Observable that is returned.
            data => this.salesPersonList = data // the data returned from the Observable is assigned to the salesPersonList array.
        );
    }

}
