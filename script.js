var elem = document.getElementById("fire");

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

let state = 0;

var audio1 = new Audio("./sounds/모닥불소리.mp3");
var fire = document.getElementById("fire");

document.querySelector("#playBtn").addEventListener("click", function () {
  if(state===0) {
    audio1.loop = true; 
    audio1.volume = 1; // 음량 설정
    audio1.play();
    fire.play();

    document.getElementById('playBtn').innerText = 'Pause';
    state = 1;
  }
  else {
    audio1.pause();
    fire.pause();

    document.getElementById('playBtn').innerText = 'Play';
    state = 0;
  }
});

let setState = "close";

function openSettings() {


  if (setState==="close") {
    document.getElementById("settings").style.visibility = "visible";
    setState = "open";
  }
  else {
    document.getElementById("settings").style.visibility = "hidden";
    setState = "close";
  }
}

function soundSet() {
  var sound = document.getElementById("sound").value;
  sound = sound * 0.01;
  
  audio1.volume = sound;
}
