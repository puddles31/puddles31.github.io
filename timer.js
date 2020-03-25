var hours = 0;
var minutes = 0;
var seconds = 0;
var hoursT = "";
var minutesT = "";
var secondsT = "";
var time = 0;
var x = 0;
var on = false;

function startTimer() {
  if (on === false) {
    var input = prompt("How long is the timer? (HH:MM:SS)");
    var endTimes = input.split(":");

    hours = endTimes[0];
    console.log("Initial hours = " + hours);

    minutes = endTimes[1];
    console.log("Initial minutes = " + minutes);

    seconds = endTimes[2];
    console.log("Initial seconds = " + seconds);

    time = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);
    console.log("Initial time (ms) = " + time);
    document.getElementById("timerTime").innerHTML = hours + ":" + minutes + ":" + seconds;
    alert("Your timer has been set for " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds. Press OK to start the timer.");
    on = true;
    document.getElementById("startButton").innerHTML = "Stop";
    x = setInterval(timerTick, 1000);
  } else {
    clearInterval(x);
    document.title = "Timer";
    on = false;
    hours = 00;
    minutes = 00;
    seconds = 00;
    document.getElementById("startButton").innerHTML = "Start";
    document.getElementById("timerTime").innerHTML = "00:00:00";
  }
}

function timerTick() {
  time = time - 1000;

  days = Math.floor(time / (1000 * 60 * 60 * 24));
  hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((time % (1000 * 60)) / 1000);

  hoursT = "";
  if (hours < 10) {
    hoursT = "0" + hours.toString();
  } else {
    hoursT = hours.toString();
  }

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

  document.getElementById("timerTime").innerHTML = hoursT + ":" + minutesT + ":" + secondsT;
  document.title = hoursT + ":" + minutesT + ":" + secondsT;
  if (time <= 0) {
    clearInterval(x);
    document.title = "Timer";
    document.getElementById("startButton").innerHTML = "Start";
    on = false;
  }
}
