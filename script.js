
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
