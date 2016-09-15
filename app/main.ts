// Dynamic bootstrapping with the Just-in-time (JiT) compiler (compile on browser)
// -------------------------------------
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);

// Static bootstrapping with the Ahead-Of-time (AoT) compiler (compile on server)
// -------------------------------------
// $ ./node_modules/.bin/ngc -p .
// The browser platform without a compiler
//import { platformBrowser } from '@angular/platform-browser';

// The app module factory produced by the static offline compiler
//import { AppModuleNgFactory } from './app.module.ngfactory';

// Launch with the app module factory.
//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);