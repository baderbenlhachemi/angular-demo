import { Component } from '@angular/core';

@Component({ // this is a decorator that marks a class as an Angular component and provides metadata about the component.
  selector: 'app-root', // this is the name of the HTML tag that represents this component.
  templateUrl: './app.component.html', // this is the URL of the template file for this component.
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo';
}
