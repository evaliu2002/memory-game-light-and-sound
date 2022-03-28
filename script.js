/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global Variables
var pattern = [5, 3, 2, 5, 4]; // initialize variable array
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0x0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikes = 0; // amount of mistakes a user made

function generateRandomPattern() {
  for (let i = 0; i < pattern.length - 1; i++) {
    pattern[i] = Math.floor(Math.random() * 6);
  }
  return pattern;
}

function startGame() {
  // initialize game variables
  strikes = 0;
  generateRandomPattern();
  // for (let i = 0; i < pattern.length - 1; i++) {
  //   if (pattern[i] == null) {
  //     stopGame();
  //   }
  // }
  progress = 0;
  clueHoldTime = 1000;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  gamePlaying = true;
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playSound(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; // set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) // set a timeout to play that clue
    clueHoldTime -= 50; //how long to hold each clue's light/sound
    delay += clueHoldTime
    delay += cluePauseTime;
  }
  
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
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
  alert("Game Over. You won!")
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

// Sound Synthesis Functions
const freqMap = {
  1: 274,
  2: 444,
  3: 198,
  4: 466.2,
  5: 502
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function playSound(btn, len) {
    switch(btn) {
    case 1:
      document.getElementById("ergh").play();
      setTimeout(function(){
        stopTone()
      },len)
    break;
      
    case 2:
      document.getElementById("uuf").play();
      tonePlaying = true
      setTimeout(function(){
        stopTone()
      },len)
    break;
      
    case 3:
      document.getElementById("oof").play();
      tonePlaying = true
      setTimeout(function(){
        stopTone()
      },len)
    break;
      
    case 4:
      document.getElementById("hoohoo").play();
      tonePlaying = true
      setTimeout(function(){
        stopTone()
      },len)
    break;
      
    case 5:
      document.getElementById("aaa").play();
      tonePlaying = true
      setTimeout(function(){
        stopTone()
      },len)
    break;  
  }
}

function startSound(btn) {
  switch(btn) {
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

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)