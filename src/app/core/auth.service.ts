import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { first } from 'rxjs/operators';

interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user: User;

    constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
        this.afAuth.authState.subscribe((user: User) => {
            this.user = user;
        });
    }

    googleSignin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        this.afAuth.auth.signInWithRedirect(provider);
    }

    signOut() {
        this.afAuth.auth.signOut();
    }
}