import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    teams: Array<any>;
    searchedTeam: number;

    constructor() {
        this.searchedTeam = -1;

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

    searchTeam(teamNum: number) {
        window.scrollTo(0, 0);
        this.searchedTeam = teamNum;
    }
}
