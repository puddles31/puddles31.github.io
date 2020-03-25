clockTick();
setInterval(clockTick, 1000);

function clockTick() {
	var date = new Date();

	var hours = date.getHours();
	var hoursT = "";
	if (hours < 10) {
		hoursT = "0" + hours.toString();
	} else {
		hoursT = hours.toString();
	}

	var minutes = date.getMinutes();
	var minutesT = "";
	if (minutes < 10) {
		minutesT = "0" + minutes.toString();
	} else {
		minutesT = minutes.toString();
	}

	var seconds = date.getSeconds();
	var secondsT = "";
	if (seconds < 10) {
		secondsT = "0" + seconds.toString();
	} else {
		secondsT = seconds.toString();
	}

	var time = hoursT + ":" + minutesT + ":" + secondsT;
	document.getElementById("clockTime").innerHTML = time;
}
