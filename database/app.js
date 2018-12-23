const db = firebase.firestore();
// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

function writeTeamInfo(json) {
    // Add a new document in collection "cities"
    db.collection("teams").doc(`${teamNum}`).set({
        nickname: json.nickname
    })
        .then(function () {
            document.getElementById('text').innerText = 'Success!';
        })
        .catch(function (error) {
            document.getElementById('text').innerText = 'Error: ' + error;
        });
}


const apiKey = 'pRAgaaAkAGpp0ChiPbcy0CIml4JjDefQvb98QtgybJz54ArMEMCLPioOGNx9ZJVB';
const teamNum = 4930;
const matchYear = 2018;

fetch(`https://www.thebluealliance.com/api/v3/team/frc${teamNum}/simple?X-TBA-Auth-Key=${apiKey}`)
    .then(res => res.json())
    .then(json => {
        console.log(json.nickname);
        writeTeamInfo(json);
    });
