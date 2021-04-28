const button = document.querySelector('.g-signin2');
const content = document.querySelector('.user-info');
const fullName = document.querySelector('.full-name');
const picture = document.getElementById('profile');
const email = document.querySelector('.email');

function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    // let id_token = googleUser.getAuthResponse().id_token;

    fullName.innerText = profile.getName();
    picture.src = profile.getImageUrl();
    email.innerText = profile.getEmail();

    button.classList.add('none');
    content.classList.remove('none');
}

function signOut() {
    let auth2 = gapi.auth2.getAuthInstance();

    auth2.signOut().then(function () {
      alert('User signed out.');
    });

    content.classList.add('none');
    button.classList.remove('none');
}