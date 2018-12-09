function googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).catch(function (error) {
        console.error('Error', error.message);
    });
}

firebase.auth().onAuthStateChanged(function (signedInUser) {
    if (signedInUser) {
        window.location = '../myteam/';
    }
});