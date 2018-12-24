const db = firebase.firestore();
// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

const tbaKey = 'pRAgaaAkAGpp0ChiPbcy0CIml4JjDefQvb98QtgybJz54ArMEMCLPioOGNx9ZJVB';
const expectedPages = 20;

// Write multiple teams with one batch
function writeTeamInfoBatch(json, pageNum) {
    if (json.length > 0) {
        // Get a new write batch
        let batch = db.batch();

        for (let i = 0; i < json.length; i++) {
            let teamRef = db.collection('teams').doc(`${json[i].team_number}`);
            
            batch.set(teamRef, json[i]);
        }

        // Commit the batch
        batch.commit()
            .then(() => console.log(`Batch success for page ${pageNum}`))
            .catch(err => console.log(`Batch error for page ${pageNum}: ${err}`));
    }
}


function updateTeams() {
    for (let page = 0; page < expectedPages; page++) {
        fetch(`https://www.thebluealliance.com/api/v3/teams/${page}?X-TBA-Auth-Key=${tbaKey}`)
            .then(res => res.json())
            .then(json => writeTeamInfoBatch(json, page));
    }
}