/**
 * Diretiva responsável por fazer o upgrade de elementos que possuam a diretiva "mdl"
 * para viabilizar o correto funcionamento de funções javascript do MDL(Material Design Lite)
 *
 * @see https://denisvuyka.github.io/2016/06/06/angular2-material.html
 * @see http://stackoverflow.com/questions/37875801/using-angular2-with-material-design-lite
 */

import {Directive, AfterViewChecked} from '@angular/core';

declare var componentHandler: any;

@Directive({
    selector: '[mdl]'
})
export class MDL implements AfterViewChecked {
    ngAfterViewChecked() {
        if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }
    }
}