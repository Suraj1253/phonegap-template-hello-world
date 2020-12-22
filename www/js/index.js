
document.addEventListener('deviceready', onMyDeviceReady, false);

function onMyDeviceReady() {
    
    document.getElementById('message').innerHTML= 'Welcome to Cross Platform App development';

}

document.addEventListener('pause', onPause, false);

function onPause(){
         alert('OnPause function is called');
}

document.addEventListener('resume', onResume, false);

function onResume(){
         alert('OnResume function is called');
}

document.addEventListener('Backbutton', onPressingBackbutton, false);

function onPressingBackbutton(e) {
         e.preventDefault();
         alert('onPressingBackButton function is called');
}

document.addEventListener('menubutton', onMenubuttonPressed, false);

function onmenubuttonPressed(e) {
         alert('onmenubuttonPressed function is called');
}

document.addEventListener('searchbutton', onsearchbutton, false);

function onsearchbutton(e) {
         console.log('This is search button event');
}


