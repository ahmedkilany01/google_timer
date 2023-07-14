let start = null;

const start_button = document.getElementById("start");
const stop_button = document.getElementById("stop");
const reset_button = document.getElementById("reset");

const seconds_input = document.getElementById("seconds");
const minutes_input = document.getElementById("minutes");
const hours_input = document.getElementById("hours");

function timer() {
  if (
    seconds_input.value == 0 &&
    minutes_input.value == 0 &&
    hours_input.value == 0
  ) {
    seconds_input.value = minutes_input.value = hours_input.value = "";
  } else if (seconds_input.value != 0) {
    seconds_input.value--;
  } else if (minutes_input.value != 0 && seconds_input.value == 0) {
    seconds_input.value = 59;
    minutes_input.value--;
  } else if (hours_input.value != 0 && minutes_input.value == 0) {
    minutes_input.value = 60;
    hours_input.value--;
  }
}

function startTimer() {
  function start_interval() {
    start = setInterval(() => {
      timer();
    }, 1000);
  }
  start_interval();
}

function stopTimer() {
  clearInterval(start);
}

function limitInput(input, max) {
  let value = input.value;
  let digits = input.getAttribute("maxlength");

  if (parseInt(value) < parseInt(input.getAttribute("value"))) {
    input.value = input.getAttribute("value");
  }

  if (value.length > digits) {
    input.value = value.slice(0, digits);
  }

  if (parseInt(value) < 0) {
    input.value = 0;
  }

  if (parseInt(value) > max) {
    input.value = max;
  }
}

function resetTimer() {
  seconds_input.value = "";
  minutes_input.value = "";
  hours_input.value = "";

  stopTimer();
}

start_button.addEventListener("click", () => startTimer());
stop_button.addEventListener("click", () => stopTimer());
reset_button.addEventListener("click", () => resetTimer());
