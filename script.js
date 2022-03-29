/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global Variables
var pattern = []; // initialize variable array
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0x0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikes = 0; // amount of mistakes a user made
var timeCounter = 1; // the seconds in time that the user has not guessed so far
var timeInterval;

function startTimer() {
  if (!timeInterval) {
    timeInterval = setInterval(timeFunction, 1000);
  }
}

function stopTimer() {
  clearInterval(timeInterval);
  timeInterval = null;
}

function timeFunction() {
  document.getElementById("timer").innerHTML = timeCounter++;
  if (timeCounter === 9) {
    stopGame();
    document.getElementById("timer").innerHTML = "Try again";
  }
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max) + 1);
}

function startGame() {
  // initialize game variables
  strikes = 0;
  timeCounter = 1;
  progress = 0;
  clueHoldTime = 1000;
  pattern = [];

  for (let i = 0; i < 5; i++) {
    pattern.push(generateRandomNumber(5));
  }

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  gamePlaying = true;
  playClueSequence();
  startTimer();
}

function stopGame() {
  gamePlaying = false;
  stopTimer();
  document.getElementById("timer").innerHTML =
    "You have 8 seconds to guess each pattern before you lose. Good luck.";
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  const button = document.getElementById("button" + btn);
  button.classList.add("lit");
}

function clearButton(btn) {
  const button = document.getElementById("button" + btn);
  button.classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playSound(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  stopTimer();
  timeCounter = 1;
  guessCounter = 0;
  strikes = 0;

  let delay = nextClueWaitTime; // set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    clueHoldTime -= 40; //how long to hold each clue's light/sound
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  stopTimer();
}

function guess(btn) {
  stopTimer();
  document.getElementById("timer").innerHTML = "Timer Paused";

  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    document.getElementById("timer").innerHTML =
      "You have 8 seconds to guess each pattern before you lose. Good luck.";
    return;
  }

  // add game logic here
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
        timeCounter = 1;
        startTimer();
      }
    } else {
      guessCounter++;
    }
  } else if (pattern[guessCounter] != btn && strikes < 2) {
    strikes++;
  } else {
    loseGame();
  }
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

// Sound Synthesis Functions

function playSound(btn, len) {
  switch (btn) {
    case 1:
      document.getElementById("ergh").play();
      setTimeout(function () {
        stopTone();
      }, len);
      break;

    case 2:
      document.getElementById("uuf").play();
      tonePlaying = true;
      setTimeout(function () {
        stopTone();
      }, len);
      break;

    case 3:
      document.getElementById("oof").play();
      tonePlaying = true;
      setTimeout(function () {
        stopTone();
      }, len);
      break;

    case 4:
      document.getElementById("hoohoo").play();
      tonePlaying = true;
      setTimeout(function () {
        stopTone();
      }, len);
      break;

    case 5:
      document.getElementById("aaa").play();
      tonePlaying = true;
      setTimeout(function () {
        stopTone();
      }, len);
      break;
  }
}

function startSound(btn) {
  switch (btn) {
    case 1:
      document.getElementById("ergh").play();
      break;

    case 2:
      document.getElementById("uuf").play();
      break;

    case 3:
      document.getElementById("oof").play();
      break;

    case 4:
      document.getElementById("hoohoo").play();
      break;

    case 5:
      document.getElementById("aaa").play();
      break;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Old Sound Synthesis Functions

const freqMap = {
  1: 274,
  2: 444,
  3: 198,
  4: 466.2,
  5: 502,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
