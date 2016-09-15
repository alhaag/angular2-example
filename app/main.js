"use strict";
// Dynamic bootstrapping with the Just-in-time (JiT) compiler (compile on browser)
// -------------------------------------
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
// Static bootstrapping with the Ahead-Of-time (AoT) compiler (compile on server)
// -------------------------------------
// $ ./node_modules/.bin/ngc -p .
// The browser platform without a compiler
//import { platformBrowser } from '@angular/platform-browser';
// The app module factory produced by the static offline compiler
//import { AppModuleNgFactory } from './app.module.ngfactory';
// Launch with the app module factory.
//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory); 
//# sourceMappingURL=main.js.map