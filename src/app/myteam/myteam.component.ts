import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
    selector: 'app-myteam',
    templateUrl: './myteam.component.html',
    styleUrls: ['./myteam.component.css']
})
export class MyteamComponent implements OnInit {

    constructor(public auth: AuthService) { }

    ngOnInit() {

    }

}
