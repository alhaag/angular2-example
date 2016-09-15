import { Component } from '@angular/core';

import { Hero2Model }    from '../shared/hero2.model';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/heroes/hero-form/hero-form.component.html',
    styleUrls: ['app/heroes/hero-form/hero-form.component.css']
})
export class HeroFormComponent {

    active = true;
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    model = new Hero2Model(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;

    newHero() {
        this.model = new Hero2Model(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
