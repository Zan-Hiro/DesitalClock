'use strict'
const hourHand = document.querySelector('.hand.hour-hand');
const minHand = document.querySelector('.hand.min-hand');
const secondHand = document.querySelector('.hand.second-hand');

let today = new Date();



let timerHourss = setInterval(timeHours, 1000);
let timerMinutes = setInterval(timeMinutes, 1000);
let timerSeconds = setInterval(timeSeconds, 1000);

function timeHours() {
  let timer = new Date();
  let hours = timer.getHours();
  if(hours >= 10) {
    hourHand.innerText = hours;
  } else{
    hourHand.innerText =  "0" + hours;
  }
}

function timeMinutes() {
  let timer = new Date();
  let minutes = timer.getMinutes();
  minHand.innerText = minutes;
}

function timeSeconds() {
  let timer = new Date();
  let seconds = timer.getSeconds();
  if(seconds >= 10) {
    secondHand.innerText = seconds;
  } else{
    secondHand.innerText =  "0" + seconds;
  }
}