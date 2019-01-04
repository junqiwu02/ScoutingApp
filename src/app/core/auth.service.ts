import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;

    teamKey?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user: User;

    userRef: Observable<User>;

    constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
        this.afAuth.authState.subscribe(user => {
            // update the firestore user data if the user is logged in, otherwise clear the local user data
            if(user != null) {
                this.updateUserData(user);
            } else {
                this.user = null;
            }
        });

        // get the reference to the firstore user data as an observable
        this.userRef = this.afAuth.authState.pipe(switchMap(user => {
            if(user != null) {
                return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
            } else {
                return EMPTY;
            }
        }));

        // update the local user data every time the firestore data updates
        this.userRef.subscribe(data => this.user = data);
    }

    googleSignin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        this.afAuth.auth.signInWithRedirect(provider);
    }

    signOut() {
        this.afAuth.auth.signOut();
    }

    updateUserData(user: User) {
        const userDoc: AngularFirestoreDocument<User> = this.afs.doc<User>(`users/${user.uid}`);

        const data: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        };

        if('teamKey' in user) {
            data.teamKey = user.teamKey;
        }

        userDoc.update(data)
            .then(() => {/* user already exists and update successful */})
            .catch(err => {
                // user probably doesn't exist yet so use set() instead
                userDoc.set(data);
            });
    }
}