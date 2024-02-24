import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';

@NgModule({ // this is a decorator that marks a class as an Angular module and provides metadata about the module.
  declarations: [ // we declare all the components that are part of this module here.
    AppComponent,
    SalesPersonListComponent
  ],
  imports: [ // we import all the external modules that are required by the components in this module here.
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // we declare all the services that are part of this module here.
  bootstrap: [AppComponent] // this is the root component that Angular creates and inserts into the index.html file.
})
export class AppModule { }
