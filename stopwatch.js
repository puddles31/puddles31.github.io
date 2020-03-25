var mode = 0; // 0 = Off, ready to start   1 = On, ready to stop   2 = Off, ready to reset
var time = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var minutesT = "";
var secondsT = "";
var millisecondsT = "";

function startStopwatch() {
  if (mode === 0) {
    mode = 1;
    document.getElementById("startButton").innerHTML = "Stop";
    x = setInterval(stopwatchTick, 10);
  } else if (mode === 1) {
    clearInterval(x);
    mode = 2;
    document.getElementById("startButton").innerHTML = "Reset";
  } else {
    document.title = "Stopwatch";
    document.getElementById("stopwatchTime").innerHTML = "00:00.00";
    time = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    mode = 0;
    document.getElementById("startButton").innerHTML = "Start";
  }
}

function stopwatchTick() {
  time = time + 10;

  minutes = Math.floor(time / (1000 * 60));
  seconds = Math.floor((time % (1000 * 60)) / 1000);
  milliseconds = Math.floor((time % 1000) / 10);

  minutesT = "";
  if (minutes < 10) {
    minutesT = "0" + minutes.toString();
  } else {
    minutesT = minutes.toString();
  }

  secondsT = "";
  if (seconds < 10) {
    secondsT = "0" + seconds.toString();
  } else {
    secondsT = seconds.toString();
  }

  millisecondsT = "";
  if (milliseconds < 10) {
    millisecondsT = "0" + milliseconds.toString();
  } else {
    millisecondsT = milliseconds.toString();
  }

  document.getElementById("stopwatchTime").innerHTML = minutesT + ":" + secondsT + "." + millisecondsT;
  document.title = minutesT + ":" + secondsT + "." + millisecondsT;
}
