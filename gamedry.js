
// Create a Rock, Paper, Scissors Game//


var game = "Let's play a game!"
var userName = prompt("What is your name?");
// Used a method that allows for the computer to choose
var computerInput = Math.ceil(Math.random() * 3);
// var userAnswer = prompt("Rock", "Paper", "Scissors")

// Created a string that responds to the user input
prompt("What's up, "+ name + "?" + " " + game)

// Created responsive interaction between computer and user.
var userAnswer = prompt("Rock, Paper, Scissors");

// User repsonse converted to lowercase
 userAnswer = userAnswer.toLowerCase();

// created a variable with a choice response for the computer
var computerResponse = ['paper', 'rock', 'scissors'];

// used a method .indexOf that was listed on our class slides 
// however we never spoke about it in detail.

var usernameIndex = computerResponse.indexOf(userName);

// utilized another method that we learned in class
var randomNum = Math.floor(Math.random() * 3);
var computerChoice = computerResponse[randomNum];

// Display the choices of both the user and the computer
console.log(`Your choice is ${userAnswer}, the computer's choice is ${computerChoice}.`);

// This was tricky however based on what we've learned about arrays in class
// There had to be an easiser more efficient way to iterate through the possibilties
// besides using if else statements and switch cases with seem to not refelect
// DRY CODE

// This variable creates 3 arrays within an array with 1 statement
var getHand= new Array(3)
// A for loop that everyone is familiar with
for (i=0; i <3; i++) {
    getHand [i]=new Array(3)

// these are the possibilities of the outcome of the game.I just listed 
// in sequential order.

// getHand[0][0]="Rock"
// getHand[0][1]="Rock"
// getHand[0][2]="Rock"
// getHand[1][0]="Paper"
// getHand[1][1]="Paper"
// getHand[1][2]="Paper"
// getHand[2][0]="Scissors"
// getHand[2][1]="Scissors"
// getHand[2][2]="Scissors"

// }

// I remember a colleaque in class speaking about maps
var resultOptions = {
[0]: "Tie",
[1]: "You win",
[3]: "You lose"
};

// function outcome(getHand) {
// 	return ( "getHand" : "resultOptions")
// }
}