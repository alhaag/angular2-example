import { Component } from '@angular/core';

import { MDL } from './shared/mdl-upgrade-element.directive';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [
        MDL
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
