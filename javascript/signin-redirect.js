let user = null;

firebase.auth().onAuthStateChanged(function (signedInUser) {
    user = signedInUser;
});

function signinRedirect() {
    if (user) {
        window.location = '../myteam/';
    } else {
        window.location = '../signin/';
    }
}