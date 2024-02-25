# Angular Overview

Angular is a powerful framework for building modern single-page applications (SPAs). SPAs interact with the user by dynamically rewriting the current web page (index.html) with new data from the web server, providing a more seamless and responsive user experience compared to traditional page-based navigation.

You write Angular applications by composing HTML templates with Angularized markup, writing component classes to manage those templates, adding application logic in services, and boxing components and services in modules.

Then you launch the app by bootstrapping the root module. Angular takes over, presenting your application content in a browser and responding to user interactions according to the instructions you've provided.

## Key Features:

- **Component-Based Framework:**
  Angular follows a component-based architecture, where the application is divided into reusable and independent components. Each component encapsulates a specific feature or functionality.

- **Clean Separation of Template Coding and Application Logic:**
  Angular promotes a clean separation between the template (user interface) and the application logic. This separation enhances maintainability and readability of code.

- **Built-in Support for Data-Binding and Dependency Injection:**
  Angular offers powerful features like two-way data binding and dependency injection, making it easier to manage the flow of data and dependencies within the application.

- **Supports Responsive Web Design and Modern Frameworks:**
  Angular provides out-of-the-box support for responsive web design and integrates seamlessly with popular frameworks like Bootstrap and Angular Material.

## Benefits of Using Angular:

- **Clean Structure:**
  Angular helps organize your application into a well-defined structure, making it easier to understand and maintain.

- **Reusable Code:**
  The component-based architecture of Angular encourages the creation of reusable code components, reducing redundancy and improving development efficiency.

- **Testability:**
  Angular's architecture, with its clean separation of concerns, facilitates unit testing, making it easier to ensure the reliability of your application.

## Angular Architecture

![overview2](https://github.com/baderbenlhachemi/angular-demo/assets/88034249/623d9732-9f91-48b1-925b-a8781970ef50)

### 1. Component:

The primary entity in an Angular application, a component comprises a user interface (UI) view and a class that houses application logic and event handling.

It serves as the orchestrator of communication between the Model and the View.

In Angular, components are pivotal for managing the UI and application logic, handling user input, updating the model, and dynamically refreshing the view based on changes in the model.

### 2. View Template:

Represents the user interface (UI) for the component, created using Angular templates. It is responsible for presenting dynamic content to the user.

In Angular, views utilize templates, which combine HTML with Angular-specific syntax to feature static HTML with dynamic elements updated based on data and events.

### 3. Directive:

Adds custom behavior to HTML elements, used for tasks such as looping, conditionals, and other dynamic functionalities.

### 4. Service:

A utility class offering specific functionality, such as data retrieval and management from a server, performing calculations, or handling validation.

In the context of an Angular application, services play a key role in representing the application's data and business logic.

These services, often implemented as TypeScript classes, manage data and enforce business rules.

### 5. Module:

A collection of related components, directives, services, etc., helping organize and modularize an Angular application.

## Component-Based Architecture:

Angular follows the Component-Based Architecture design pattern. It is centered around the idea of building the application as a hierarchy of reusable components.

In the Component-Based Architecture:

- **Components:**
  Angular applications are organized into components. A component is a self-contained, reusable unit that encapsulates a specific feature or behavior. Each component has its own template, styles, and class that encapsulates the behavior and data.

- **Hierarchical Structure:**
  Components can be arranged hierarchically, forming a tree-like structure. The root component, often named AppComponent, serves as the main container for the entire application.

- **Data Binding:**
  Components can communicate with each other through input and output properties. Data binding allows for automatic synchronization between the model (data in the component) and the view (user interface).

- **Services:**
  Shared functionality and data can be encapsulated in services. Services are singleton objects that can be injected into components, providing a way to share data and functionality across different parts of the application.

- **Modules:**
 Angular applications are organized into modules. A module is a logical container that encapsulates a set of related components, services, directives, and pipes. By embracing a component-based structure, Angular promotes modularity, reusability, and maintainability of code. Each component can be developed, tested, and maintained independently, making it easier to manage large and complex applications.

## Project File Structure:

- **angular.json:**
  Angular workspace configuration and a list of execution targets.

- **node_modules:**
  Local repository of Node.js modules, managed by npm.

- **package.json:**
  Project's list of Node dependencies and scripts.

- **src:**
  Main source directory containing application code.

    - **app:**
      Components, templates, and application logic.

    - **assets:**
      Images and other static assets.

    - **environments:**
      Profiles for different environments (dev, test, prod, etc.).

    - **index.html:**
      Main launch page for the application. (contains the <app-root> tag.)
  
    - **main.ts:**
      Entry point for the application, bootstrapping the root module (app.module.ts).

    - **app.module.ts:**
      Main module of the application, defining the root component and other features (routing, services, etc).

    - **app.component.ts:**
      Root component of the application, defining the structure and behavior of the main view (contains 4 files: .ts, .html, .css, .spec.ts).

  - **polyfills.ts:**
  Adds support for different browser versions.

  - **test.ts:**
  Unit test cases for the application.

  - **tsconfig files:**
  TypeScript compiler configuration files.

## Angular App Launch:

1. **index.html:**
  - The entry point for an Angular application.
  - Loads the Angular framework.

2. **main.ts:**
  - Executed by index.html.
  - Kicks off the Angular application.
  - Bootstraps the `AppModule`.

3. **AppModule (app.module.ts):**
  - The main module of the Angular application.
  - Configures dependencies, declarations, and bootstrap components.

4. **AppComponent (4 files):**
  - Represents the root component of the Angular application.
  - Consists of TypeScript class, HTML template, CSS styles, and a testing file.
  - Utilizes the web component architecture, aligning with MVVM principles.

### Web Component (MVVM):

- Angular components follow the web component architecture, encapsulating both the view and the associated logic.
- Adheres to MVVM principles (Model-View-ViewModel), providing a structured way to manage and separate concerns in the application.

## Data Binding in Angular:

![databinding](https://github.com/baderbenlhachemi/angular-demo/assets/88034249/ad716809-0dad-4858-a0e5-2dc7cfb8f5c7)

Data binding in Angular enables synchronization between the model (data) and the view (UI), creating a dynamic and responsive user interface.

## Reactive Programming in Angular:

- **Asynchronous Nature:**
  - Angular embraces reactive programming to handle asynchronous operations efficiently.

- **RxJS Library:**
  - Utilizes the RxJS library for reactive programming.
  - Key concepts include Observable, Observer, and Subscription.

- **Observer Design Pattern:**
  - Angular employs the observer design pattern to facilitate communication between components.

## {{data}} = Observer | data: string = Observable:

- The syntax `{{data}}` represents the observer in Angular templates, dynamically updating the view based on changes in the underlying data.

- `data: string` represents an observable in TypeScript, implying that the variable `data` is an observable capable of emitting values asynchronously.

## `<app-root>` in Angular:

`<app-root>` is a custom tag used by Angular, acting as a selector for the root component. It serves as a placeholder in the HTML where the content of the component will be rendered, functioning like an "include" directive.

- The `<app-root>` tag is defined in an Angular component, annotated with the `@Component` decorator.
- The `templateUrl` property in the `@Component` decorator points to the HTML file containing the template for the component.
- When the Angular application runs, it replaces the `<app-root>` tag in the HTML with the content specified in the associated template file.

## Angular Files:

In an Angular application, several key files play vital roles in organizing and configuring the application.

### app.component.ts

This file defines the root component of the Angular application. It is typically located in the `src/app` directory. The component is annotated with the `@Component` decorator, which includes metadata like the selector, templateUrl, styleUrls, etc. The content of this file defines the structure and behavior of the root component, which is usually represented by the `<app-root>` tag in the HTML.

```typescript
// Example app.component.ts
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Component logic goes here

  // Example of a constructor with a service injection
  constructor(private exampleService: ExampleService) {}
}
```

### app.module.ts

This file defines the main module of the Angular application. It is typically located in the `src/app` directory. The module is annotated with the `@NgModule` decorator, which includes metadata about the module, such as declarations, imports, providers, etc. It imports other modules and declares components, directives, and pipes that are part of the application.

```typescript
// Example app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### app-routing.module.ts

This file is used for configuring the application's routing functionality. It is typically located in the `src/app` directory. It defines the routes of the application, associating components with specific URLs. The `RouterModule` is configured with these routes.

```typescript
// Example app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

You then need to import `AppRoutingModule` in your `AppModule` to enable the routing features in your application.

These three files (`app.component.ts`, `app.module.ts`, and `app-routing.module.ts`) work together to define the structure, behavior, and routing of your Angular application.

## Structural Directives: (*ngFor and *ngIf)

Angular provides structural directives like *ngFor and *ngIf, which are used in templates to handle the structure of the DOM dynamically. *ngFor is used for looping, while *ngIf is used for conditionals.

## Services in Angular:

Services in Angular are used to encapsulate functionality that is not specific to a particular component. They are used to share data and functionality across different parts of the application.

Services are typically implemented as TypeScript classes and are decorated with the `@Injectable` decorator. They can be injected into components, directives, and other services using Angular's dependency injection system.

Services are commonly used for tasks such as data retrieval and management from a server, performing calculations, or handling validation. They help keep the application's components lean and focused on the user interface, while the services handle the underlying logic and data management.

```typescript
// Example service in Angular
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  // Service logic goes here
}
```

## Routing in Angular:

Routing in Angular refers to the process of navigating between different views or pages in a single-page application (SPA). Angular's built-in router module provides a way to define routes and associate them with specific components.

The `RouterModule` is used to configure the routes of the application, and the `RouterOutlet` directive is used to define the location where the routed components will be displayed.

```typescript
// Example routing configuration in Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

In the example above, the `RouterModule` is configured with the defined routes, and the `AppRoutingModule` is then imported into the `AppModule` to enable the routing features in the application.

```html
<!-- Example usage of RouterLink in the template -->
<a routerLink="/about">About</a>

<!-- Example usage of RouterOutlet in the template -->
<router-outlet></router-outlet>
```

The `routerLink` directive is used to define links to different routes, and the `router-outlet` directive is used to define the location where the routed components will be displayed.

## HttpClientModule in Angular:

The `HttpClientModule` is a built-in Angular module that provides a simplified client HTTP API for Angular applications. It is used to make HTTP requests to a server and handle the responses.

To use the `HttpClientModule`, you need to import it into the root module of the application (e.g., `AppModule`) and add it to the `imports` array.

```typescript
// Example usage of HttpClientModule in Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the `HttpClientModule` is imported, you can inject the `HttpClient` service into components or services to make HTTP requests.

```typescript
// Example usage of HttpClient in a service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable { // returning an observable so we can subscribe to it in the component that uses this service method
    return this.http.get('https://api.example.com/data');
  }
}
```

In the example above, the `HttpClient` service is injected into the `DataService` to make an HTTP GET request to a server.

```typescript
// Example usage of HttpClient in a component
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });
  }
}
```

In the example above, the `DataService` is injected into the `AppComponent` to make use of the `getData` method to fetch data from the server.

## Angular CLI commands:

- **ng new <project-name>:**
  Creates a new Angular project.
- **ng serve:**
  Builds and serves the application, watching for file changes.
- **ng generate module <module-name>:**
  Generates a new module.
- **ng generate component <component-name>:**
  Generates a new component.
- **ng generate service <service-name>:**
  Generates a new service.
- **ng generate class <class-name>:**
  Generates a new class.

## Installing Bootstrap in Angular:

To install Bootstrap in an Angular project, you can use npm to install the Bootstrap package and its dependencies.

```bash
npm install --save bootstrap
```

After installing Bootstrap, add the path of the bootstrap.min.css file to the styles array in the angular.json file.

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

This will include the Bootstrap styles in your Angular application.

Bootstrap js can be added in the scripts array in the angular.json file.

```json
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

Another way to include Bootstrap in your Angular project, is to integrate it in your styles.css file.

```css
@import '~bootstrap/dist/css/bootstrap.min.css';
```

## Angular Material:

Angular Material is a UI component library for Angular applications that provides a set of high-quality UI components based on Google's Material Design specification. It includes components such as buttons, cards, menus, and more.

To use Angular Material in your Angular project, you can install the @angular/material package and its dependencies using npm.

```bash
npm install --save @angular/material @angular/cdk @angular/animations
```

After installing Angular Material, you can import the required modules and components in your Angular application and start using them to build your UI.
