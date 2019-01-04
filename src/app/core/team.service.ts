import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    constructor(private afs: AngularFirestore) {

    }

    getTeams(lastTeam?: any) {
        if(lastTeam != undefined) {
            return this.afs.collection('teams', ref => ref.orderBy('team_number').startAfter(lastTeam).limit(20)).valueChanges();
        } else {
            return this.afs.collection('teams', ref => ref.orderBy('team_number').limit(20)).valueChanges();
        }
    }
}
