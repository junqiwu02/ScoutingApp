import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    teams: Array<any>;

    constructor() {
        this.teams = Array(50)
            .fill(1)
            .map(_ => {
                return {
                    number: 4930
                };
            });
    }

    ngOnInit() {

    }

}
