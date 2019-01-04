import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TeamService } from '../core/team.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    teams: Array<any>;
    searchedTeam: number;

    constructor(private ts: TeamService) {
        this.searchedTeam = -1;

        this.ts.getTeams().subscribe(data => {
            this.teams = data
        });
    }

    ngOnInit() {

    }

    searchTeam(teamNum: number) {
        window.scrollTo(0, 0);
        this.searchedTeam = teamNum;
    }

    onScroll() {
        let lastTeam = this.teams[this.teams.length - 1].team_number;
        console.log(lastTeam);
        this.ts.getTeams(lastTeam).subscribe(data => {
            this.teams.push(...data);
        });
    }
}
