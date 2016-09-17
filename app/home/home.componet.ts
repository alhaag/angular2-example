import { Component, OnInit } from '@angular/core';

//declare var componentHandler: any;
@Component({
    //moduleId: module.id,
    selector: 'page-index',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css']
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    /*ngAfterViewInit(){
        componentHandler.upgradeAllRegistered();
    }*/

}