const button = document.querySelector('.g-signin2');
const content = document.querySelector('.user-info');
const fullName = document.querySelector('.full-name');
const profile = document.getElementById('profile');
const email = document.querySelector('.email');

function onSignIn(googleUser) {
    // // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    // console.log('Full Name: ' + profile.getName());
    // console.log('Given Name: ' + profile.getGivenName());
    // console.log('Family Name: ' + profile.getFamilyName());
    // console.log("Image URL: " + profile.getImageUrl());
    // console.log("Email: " + profile.getEmail());

    // // The ID token you need to pass to your backend:
    // var id_token = googleUser.getAuthResponse().id_token;
    // console.log("ID Token: " + id_token);

    fullName.innerText = profile.getName();
    profile.src = profile.getImageUrl();
    email.innerText = profile.getEmail();

    button.classList.add('none');
    content.classList.remove('none');
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });

    content.classList.add('none');
    button.classList.remove('none');
}