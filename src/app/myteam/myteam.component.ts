import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { auth } from 'firebase';

@Component({
    selector: 'app-myteam',
    templateUrl: './myteam.component.html',
    styleUrls: ['./myteam.component.css']
})
export class MyteamComponent implements OnInit {

    // mentor fields
    requests: Array<object>;
    students: Array<object>;

    teamKeyIsValid = true;

    constructor(public auth: AuthService) {
        this.requests = Array(50).fill({ name: 'Student name' });
        this.students = Array(50).fill({ name: 'Student name' });
    }

    ngOnInit() {

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
