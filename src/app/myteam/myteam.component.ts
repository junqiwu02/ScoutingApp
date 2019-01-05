import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { TeamService } from '../core/team.service';

@Component({
    selector: 'app-myteam',
    templateUrl: './myteam.component.html',
    styleUrls: ['./myteam.component.css']
})
export class MyteamComponent implements OnInit {

    teamKeyIsValid = true;
    userTeam: object;

    constructor(public auth: AuthService, public ts: TeamService) {
        this.auth.userRef.subscribe(data => {
            this.updateUserTeam();
        });
    }

    ngOnInit() {

    }

    updateUserTeam() {
        this.ts.searchByTeamKey(this.auth.user.teamKey).subscribe(data => {
            this.userTeam = data;
        });
    }
    
    prevLength = 0;
    updateKeyInput(event: KeyboardEvent) {
        this.teamKeyIsValid = true;
        // only add the '-' when typing, not deleting
        if((<HTMLInputElement>event.target).value.length == 4 && this.prevLength == 3) {
            (<HTMLInputElement>event.target).value += '-';
        }
        this.prevLength = (<HTMLInputElement>event.target).value.length;
    }

    joinTeam(teamKey: string) {
        teamKey = teamKey.replace('-', '').toLowerCase();
        // if team key is 8 characters long and alphanumeric
        this.teamKeyIsValid = teamKey.length == 8 && /^[a-z0-9]+$/i.test(teamKey);

        if(this.teamKeyIsValid) {
            this.auth.user.teamKey = teamKey;
            this.auth.updateUserData(this.auth.user);
        }
    }

    leaveTeam() {
        this.auth.user.teamKey = null;
        this.auth.updateUserData(this.auth.user);
    }
}
