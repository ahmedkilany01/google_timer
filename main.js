let start, end, interval, elapsed;

const start_button = document.getElementById("start");
const stop_button = document.getElementById("stop");
const reset_button = document.getElementById("reset");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");

function startTimer() {
  let seconds = parseInt(document.getElementById("seconds").value || 0);
  let minutes = parseInt(document.getElementById("minutes").value || 0);
  let hours = parseInt(document.getElementById("hours").value || 0);

  let totalSeconds = seconds + minutes * 60 + hours * 60 * 60;

  start = Date.now();
  end = start + totalSeconds * 1000;
  interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  let current = Date.now();
  let elapsed = end - current;

  if (elapsed <= 0) {
    clearInterval(interval);
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";

    return;
  }

  let hours = Math.floor(elapsed / 3600000);
  let minutes = Math.floor((elapsed % 3600000) / 60000);
  let seconds = Math.floor((elapsed % 60000) / 1000);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  seconds.textContent = seconds;
  minutes.textContent = minutes;
  hours.textContent = hours;
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
  clearInterval(interval);
  elapsed = 0;
  seconds.value = "";
  minutes.value = "";
  hours.value = "";
}

reset_button.addEventListener("click", () => resetTimer());
