import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
    selector: 'app-myteam',
    templateUrl: './myteam.component.html',
    styleUrls: ['./myteam.component.css']
})
export class MyteamComponent implements OnInit {

    // mentor fields
    requests: Array<object>;
    students: Array<object>;

    constructor(public auth: AuthService) {
        this.requests = Array(50).fill({ name: 'Student name' });
        this.students = Array(50).fill({ name: 'Student name' });
    }

    ngOnInit() {

    }

}
