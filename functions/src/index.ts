import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
    console.log("This is test!");
    response.send("Hello from Firebase!");
});

export const test = functions.https.onRequest((request, response) => {
    // Grab the text parameter.
    const original = request.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    admin.database().ref('/messages').push({ original: original }).then((snapshot) => {
        // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
        response.redirect(303, snapshot.ref.toString());
    });
});

// OUTSIDE API REQUESTS DO NOT WORK ON THE FREE PLAN FOR FIREBASE
export const blueAllianceTest = functions.https.onRequest((reqest, response) => {
    const nfetch = require('node-fetch');

    const apiKey = 'pRAgaaAkAGpp0ChiPbcy0CIml4JjDefQvb98QtgybJz54ArMEMCLPioOGNx9ZJVB';
    const teamNum = 4930;
    const matchYear = 2018;

    interface Team {
        city: string;
        country: string;
        key: string;
        name: string;
        nickname: string;
        state_prov: string;
        team_number: number;
    }

    nfetch(`https://www.thebluealliance.com/api/v3/team/frc${teamNum}/simple?X-TBA-Auth-Key=${apiKey}`)
        .then((res: any) => res.json())
        .then((json: Team) => {
            response.send(json.nickname);
        });
});