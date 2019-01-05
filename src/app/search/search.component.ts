import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TeamService } from '../core/team.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    teams: Array<any>;
    searchedTeam: object;

    teamExists = true;

    constructor(private ts: TeamService) {
        this.searchedTeam = null;

        this.ts.getTeams().subscribe(data => {
            this.teams = data
        });
    }

    ngOnInit() {

    }

    showTeam(team: object) {
        window.scrollTo(0, 0);
        this.searchedTeam = team;
    }

    searchTeam(team: string) {
        let teamNum = parseInt(team);
        this.ts.searchByTeamNum(teamNum).subscribe((data: Array<object>) => {
            if(data.length == 0) {
                this.teamExists = false;
            } else {
                this.searchedTeam = data[0];
            }
        });
    }

    onScroll() {
        let lastTeam = this.teams[this.teams.length - 1].team_number;
        console.log(lastTeam);
        this.ts.getTeams(lastTeam).subscribe((data: Array<object>) => {
            this.teams.push(...data);
        });
    }
}
