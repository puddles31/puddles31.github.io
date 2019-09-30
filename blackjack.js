var cardSuit = 0;
var cardType = 0;
var cardValue = 0;
var playerScore = 0;
var dealerScore = 0;
var newCard = 0;
var hiddenCard = 0;
var playerText = "You have a ";
var dealerText = "The dealer has a ";
var lineNumber = 3;

function hideButton() {
  var a = document.getElementById("startButton");
  a.style.display = "none";
  var b = document.getElementById("rulesButton");
  b.style.display = "none";
  var c = document.getElementById("homeButton");
  c.style.display = "none";
}

function showButton() {
  var a = document.getElementById("startButton");
  a.style.display = "inline";
  var b = document.getElementById("rulesButton");
  b.style.display = "inline";
  var c = document.getElementById("homeButton");
  c.style.display = "inline";
}

function resetGame() {
  //Reset all variables
  playerScore = 0;
  dealerScore = 0;
  hiddenCard = 0;
  playerText = "You have a ";
  dealerText = "The dealer has a ";
  lineNumber = 3;
  //Reset all lines
  document.getElementById("playerCards").innerHTML = "";
  document.getElementById("dealerCards").innerHTML = "";
  document.getElementById("line3").innerHTML = "";
  document.getElementById("line4").innerHTML = "";
  document.getElementById("line5").innerHTML = "";
  document.getElementById("line6").innerHTML = "";
  document.getElementById("line7").innerHTML = "";
  document.getElementById("line8").innerHTML = "";
  document.getElementById("line9").innerHTML = "";
  document.getElementById("line10").innerHTML = "";
  //Show buttons
  showButton();
}

function createCard() {
  //Reset all card variables
  cardValue = 0;
  cardSuit = 0;
  cardType = 0;
  newCard = 0;
  //Randomise suit, use if statements to change number to symbol
  cardSuit = Math.floor(Math.random() * 4) + 1;
  if (cardSuit == 1) {
    cardSuit = "<span class='red'>&hearts;</span>";
  }
  else if (cardSuit == 2) {
    cardSuit = "<span class='red'>&diams;</span>";
  }
  else if (cardSuit == 3) {
    cardSuit = "&spades;";
  }
  else if (cardSuit == 4) {
    cardSuit = "&clubs;";
  }
  //Randomise type, use if statements to change 11/12/13/1 to J/Q/K/A. Get card value
  cardType = Math.floor(Math.random() * 13) + 1;
  cardValue = cardType;
  if (cardType == 11) {
    cardType = "J";
    cardValue = 10;
  }
  else if (cardType == 12) {
    cardType = "Q";
    cardValue = 10;
  }
  else if (cardType == 13) {
    cardType = "K";
    cardValue = 10;
  }
  else if (cardType == 1) {
    cardType = "A";
    cardValue = 11;
  }
  //Combine suit and type to make a card
  newCard = cardSuit + cardType;
}

function startGame() {
  //Hide buttons
  hideButton();
  //Create 2 cards for player, display them and their score
  createCard();
  playerScore = cardValue;
  playerText = playerText + newCard + " and a ";
  createCard();
  playerScore = playerScore + cardValue;
  playerText = playerText + newCard + ". Your score is " + playerScore + ".";
  document.getElementById("playerCards").innerHTML = playerText;
  //Create 2 cards for the dealer, display one of the cards (hidden card and score displayed for testing)
  createCard();
  dealerScore = cardValue;
  dealerText = dealerText + newCard + " and one other card. Their current score is " + dealerScore + ".";
  createCard();
  dealerScore = dealerScore + cardValue;
  hiddenCard = newCard;
  document.getElementById("dealerCards").innerHTML = dealerText;
  //Testing for natural Blackjacks
  if (playerScore == 21 && dealerScore == 21) {
    document.getElementById("line3").innerHTML = "Both you and the dealer have blackjacks. Tie!<br><button id='resetButton' onclick='resetGame()'>Reset</button>";
  }
  else if (dealerScore == 21) {
    document.getElementById("line3").innerHTML = "The dealer has a blackjack. You lose!<br><button id='resetButton' onclick='resetGame()'>Reset</button>";
  }
  else if (playerScore == 21) {
    document.getElementById("line3").innerHTML = "You have a blackjack. You win!<br><button id='resetButton' onclick='resetGame()'>Reset</button>";
  }
  //Stand or hit buttons
  else {
    document.getElementById("line3").innerHTML = "<button id='standButton' onclick='stand()'>Stand</button><button id='hitButton' onclick='hit()'>Hit</button>"
  }
}

//Stand: dealer draws cards until more than or equal to 17. Determine if dealer or player wins
function stand() {
  document.getElementById("line" + lineNumber).innerHTML = "The dealer flips their other card over. It's a " + hiddenCard +". The dealer's score is " + dealerScore + ".";
  while (dealerScore < 17) {
    lineNumber++;
    createCard();
    dealerScore = dealerScore + cardValue;
    document.getElementById("line" + lineNumber).innerHTML = "The dealer has drawn a " + newCard + ". Their score is now " + dealerScore + ".";
  }
  lineNumber++;
  if (dealerScore == 21) {
    document.getElementById("line" + lineNumber).innerHTML = "The dealer has a score of 21. You lose!<br><button id='resetButton' onclick='resetGame()'>Reset</button>";
  }
  else if (dealerScore > 21) {
    document.getElementById("line" + lineNumber).innerHTML = "The dealer's score is over 21. You win!<br><button id='resetButton' onclick='resetGame()'>Reset</button>";
  }
  else if (playerScore > dealerScore) {
    document.getElementById("line" + lineNumber).innerHTML = "Your score is closer to 21 than the dealer's score. You win!<br><button id='resetButton' onclick='resetGame()'>Reset</button>";
  }
  else if (playerScore == dealerScore) {
    document.getElementById("line" + lineNumber).innerHTML = "You and the dealer have the same score. Tie!<br><button id='resetButton' onclick='resetGame()'>Reset</button>";
  }
  else {
    document.getElementById("line" + lineNumber).innerHTML = "The dealer's score is closer to 21 than your score. You lose!<br><button id='resetButton' onclick='resetGame()'>Reset</button>";
  }
}

//Hit: player draws a card. If score is over or equal to 21 the game ends. Otherwise player chooses stand/hit again
function hit() {
  createCard();
  playerScore = playerScore + cardValue;
  document.getElementById("line" + lineNumber).innerHTML = "You have drawn a " + newCard + ". Your score is now " + playerScore + ".";
  lineNumber++;
  if (playerScore == 21) {
    document.getElementById("line" + lineNumber).innerHTML = "You have a score of 21. You win!<br><button id='resetButton' onclick='resetGame()'>Reset</button>";
  }
  else if (playerScore > 21) {
    document.getElementById("line" + lineNumber).innerHTML = "Your score is over 21. You lose!<br><button id='resetButton' onclick='resetGame()'>Reset</button>";
  }
  else {
    document.getElementById("line" + lineNumber).innerHTML = "<button id='standButton' onclick='stand()'>Stand</button><button id='hitButton' onclick='hit()'>Hit</button>"
  }
}
