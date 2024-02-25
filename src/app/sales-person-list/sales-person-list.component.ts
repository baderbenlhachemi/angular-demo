import {Component, OnInit} from '@angular/core';
import {SalesPerson} from "../model/sales-person";
import {SalesPersonServiceService} from "../service/sales-person-service.service";

@Component({
  selector: 'app-sales-person-list', // to include this component in the app.component.html file, we need to use the selector name as the HTML tag.
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent implements OnInit{

    salesPersonList: SalesPerson[] = [];
    errorMessage: string = '';

    // create an instance of the SalesPersonServiceService class and inject it into the constructor
    constructor(private salesPersonService: SalesPersonServiceService) {
    }

    // a lifecycle hook in Angular that is called after the constructor is called and after the component's inputs have been initialized. It is used to perform any additional initialization that is required for the component. ngOnInit is commonly used to call services or to set up subscriptions.
    ngOnInit() {
        // call the getSalesPersonList() method of the SalesPersonServiceService class and subscribe to the Observable that is returned.
        this.salesPersonService.getSalesPersonList().subscribe({
            next: (data : SalesPerson[]) => { // the next() method is called when the Observable emits a value. In this case, the value emitted is the list of sales persons.
                this.salesPersonList = data
            },
            error: (err: string) => {
                this.errorMessage = err;
            }
        });
    }

}
