document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;
}
function play1(){
    var x = Math.floor((Math.random() * 3) + 1);
    if (x == 1) {
        var audio1a = document.getElementById("audio1a");
        audio1a.play();
    }
    if (x == 2) {
        var audio1b = document.getElementById("audio1b");
        audio1b.play();
    }
    if (x == 3) {
        var audio1c = document.getElementById("audio1c");
        audio1c.play();
    }
}
function play2(){
    var audio2 = document.getElementById("audio2");
    audio2.play();
}
function play3(){
    var audio3 = document.getElementById("audio3");
    audio3.play();
}
function play4(){
    var audio4 = document.getElementById("audio4");
    audio4.play();
}
var inAppBrowserRef;
 
function showRequest() {
 
    var target = "_blank";
 
    var options = "location=yes,hidden=yes";
 
    inAppBrowserRef = cordova.InAppBrowser.open('http://oliverleigh.co.uk/sur/new.php', target, options);
 
    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
 
    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
 
    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);
 
}
 
function loadStartCallBack() {
 
    $('#status-message').text("loading please wait ...");
 
}
 
function loadStopCallBack() {
 
    if (inAppBrowserRef != undefined) {
 
        inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;" });
 
        $('#status-message').text("");
 
        inAppBrowserRef.show();
    }
 
}
 
function loadErrorCallBack(params) {
 
    $('#status-message').text("");
 
    var scriptErrorMesssage =
       "alert('Sorry we cannot open that page. Message from the server is : "
       + params.message + "');"
 
    inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);
 
    inAppBrowserRef.close();
 
    inAppBrowserRef = undefined;
 
}
 
function executeScriptCallBack(params) {
 
    if (params[0] == null) {
 
        $('#status-message').text(
           "Sorry we couldn't open that page. Message from the server is : '"
           + params.message + "'");
    }
 
}
 
