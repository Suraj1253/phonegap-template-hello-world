document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    //get the default -accelerometere
    var options = {frequency: 3000}
    //navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    function onSuccess(acc) {
        document.getElementById('x-axis').value = acc.x;
        document.getElementById('y-axis').value = acc.y;
        document.getElementById('z-axis').value = acc.z;
    }

    function onError(params){

    }
}