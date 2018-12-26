function signOut() {
    firebase.auth().signOut().then(function () {
        window.location = '../signin';
    }, function (error) {
        console.error(error);
    });
}

firebase.auth().onAuthStateChanged(function (signedInUser) {
    if (signedInUser) {
        document.getElementById('username').innerText = signedInUser.email;
    } else {
        window.location = '../signin/';
    }
});

$(document).ready(function () {
    let db = firebase.firestore();
    // Disable deprecated features
    db.settings({
        timestampsInSnapshots: true
    });


    db.collection('teams').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().autonScoreOnSwitch}`);
            switch (doc.data().autonScoreOnSwitch) {
                case -1:
                    $('#autonScoreOnSwitch')[0].className = 'fas fa-times-circle text-danger';
                    break;
                case 0:
                    $('#autonScoreOnSwitch')[0].className = 'fas fa-minus-circle text-warning';
                    break;
                case 1:
                    $('#autonScoreOnSwitch')[0].className = 'fas fa-check-circle text-success';
                    break;
            }
        });
        $('.loading').removeClass('loading');
        $('#loadingScreen').remove();
    });


});
