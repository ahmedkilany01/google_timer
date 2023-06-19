let start,
  end,
  timerInterval,
  elapsedTime = 0;

function startTimer() {
  var hours = parseInt(document.getElementById("hours").value) || 0;
  var minutes = parseInt(document.getElementById("minutes").value) || 0;
  var seconds = parseInt(document.getElementById("seconds").value) || 0;

  var totalSeconds = hours * 3600 + minutes * 60 + seconds;

  start = Date.now();
  end = startTime + totalSeconds * 1000;

  timerInterval = setInterval(updateTimer, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById("timer").textContent = "00:00:00";
}

function updateTimer() {
  var currentTime = Date.now();
  elapsedTime = endTime - currentTime;

  if (elapsedTime <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "00:00:00";
    return;
  }

  var hours = Math.floor(elapsedTime / 3600000);
  var minutes = Math.floor((elapsedTime % 3600000) / 60000);
  var seconds = Math.floor((elapsedTime % 60000) / 1000);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  document.getElementById("timer").textContent =
    hours + ":" + minutes + ":" + seconds;
}

function limitInput(input, max) {
  if (input.value > max) {
    input.value = max;
  }
}
