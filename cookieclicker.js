var cookies = 0;
var clickers = 0;
var grandmas = 0;
var rate = 0;
window.setInterval(clickerAdd, 10000);

//Basic cookie click and reset functions.
function cookieClicked() {
 cookies = cookies + 1;

 if(cookies == 0) {
	 document.getElementById("cookiesp").innerHTML = "You don't have any cookies!";
 }
 else if(cookies == 1) {
	 document.getElementById("cookiesp").innerHTML = "You have 1 cookie!";
 }
 else {
	 document.getElementById("cookiesp").innerHTML = "You have " + cookies + " cookies!";
 }
}

function resetCookies() {
  cookies = 0;
  clickers = 0;
  grandmas = 0;
  rate = 0;
  document.getElementById("cookiesp").innerHTML = "You have 0 cookies!";
  document.getElementById("ratep").innerHTML = "";
  document.getElementById("clickersp").innerHTML = "";
  document.getElementById("grandmasp").innerHTML = "";
}

//Buy upgrades functions.
function buyClicker1() {
	if(cookies >= 15) {
		cookies = cookies - 15;
    clickers = clickers + 1;
    rate = (rate * 10 + 0.1 * 10) / 10;
	  document.getElementById("cookiesp").innerHTML = "You have " + cookies + " cookies!";
    document.getElementById("ratep").innerHTML = "You bake " + rate + " cookies per second!";
    document.getElementById("clickersp").innerHTML = "You have " + clickers + " clickers!";
	}
}

function buyClicker10() {
	if(cookies >= 150) {
		cookies = cookies - 150;
    clickers = clickers + 10;
    rate = (rate * 10 + 1 * 10) / 10;
	  document.getElementById("cookiesp").innerHTML = "You have " + cookies + " cookies!";
    document.getElementById("ratep").innerHTML = "You bake " + rate + " cookies per second!";
    document.getElementById("clickersp").innerHTML = "You have " + clickers + " clickers!";
	}
}

//ADD GRANDMA THINGS HERE!

//Automatic cookies functions.
function clickerAdd() {
  cookies = cookies + clickers;
  document.getElementById("cookiesp").innerHTML = "You have " + cookies + " cookies!";
}

//Finish adding more upgrades. Then, style the website to make it look nicer.
