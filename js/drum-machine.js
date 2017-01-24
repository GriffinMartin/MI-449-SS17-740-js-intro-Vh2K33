// audio file variables
var boom = new Audio('sounds/boom.wav');
var clap = new Audio('sounds/clap.wav');
var kick = new Audio('sounds/kick.wav');
var snare = new Audio('sounds/snare.wav');
var tink = new Audio('sounds/tink.wav');

// button variables
var boomButton = document.getElementById('boom');
var clapButton = document.getElementById('clap');
var kickButton = document.getElementById('kick');
var snareButton = document.getElementById('snare');
var tinkButton = document.getElementById('tink');

// define function with event listeners 
function playSound(sound, soundButton) {
  soundButton.addEventListener('click', function () {
    sound.play();
  })
  soundButton.addEventListener('mouseover', function () {
    sound.play();
  })
}

// initialize function
playSound(boom,boomButton);
playSound(clap,clapButton);
playSound(kick,kickButton);
playSound(snare,snareButton);
playSound(tink,tinkButton);