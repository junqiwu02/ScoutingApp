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


    new Chart($('#matchChart'), {
        type: 'line',
        data: {
            labels: ['Quals 6', 'Quals', 'Quals 7', 'Quals 8', 'Quals 9', 'Quals 10', 'Quals 11', 'Quals 12'],
            datasets: [{
                data: [4, 1, 10, 1, 10, 11, 13, 14],
                label: "Switch Placements",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [20, 35, 33, 15, 6, 8, 9, 14],
                label: "Scale Placements",
                borderColor: "#8e5ea2",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Greater Pittsburg Regional'
            }
        }
    });

    new Chart($('#modalMatchChart'), {
        type: 'line',
        data: {
            labels: ['Quals 6', 'Quals', 'Quals 7', 'Quals 8', 'Quals 9', 'Quals 10', 'Quals 11', 'Quals 12'],
            datasets: [{
                data: [4, 1, 10, 1, 10, 11, 13, 14],
                label: "Switch Placements",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [20, 35, 33, 15, 6, 8, 9, 14],
                label: "Scale Placements",
                borderColor: "#8e5ea2",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Greater Pittsburg Regional'
            }
        }
    });
});
