firebase.auth().getRedirectResult().then(function (result) {
    if (result.user) {
        window.location = '../myteam/';
    }
}).catch(function (error) {
    console.error(error.message);
});

function googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
}