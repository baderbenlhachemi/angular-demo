import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) // This is the entry point of the application and it is responsible for bootstrapping the AppModule in the browser.
  .catch(err => console.error(err));
