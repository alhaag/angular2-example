import { Component, OnInit } from '@angular/core';
//declare var componentHandler: any;
@Component({
    //moduleId: module.id,
    selector: 'page-index',
    templateUrl: 'app/index/index.component.html',
    styleUrls: ['app/index/index.component.css']
})
export class IndexComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    /*ngAfterViewInit(){
        componentHandler.upgradeAllRegistered();
    }*/

}