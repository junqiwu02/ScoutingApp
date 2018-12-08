function googleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithRedirect(provider);

  firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    let user = result.user;

    console.log(user);
  }).catch(function (error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
    console.log(errorCode);
  });
}