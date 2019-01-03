// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice;
userChoice="";
var computerChoice;
computerChoice="";
var winner;
winner="";
var randomNumber;

$("#shoot").click(function(){
    userChoice=$("#input").val();
    $("#userChoice").text(userChoice);
    randomNumber=Math.random();
    if( randomNumber<.3333333333333333333333333){
        computerChoice="rock";
    }
    else if( randomNumber<.666666666666666666666667){
        computerChoice="scissors";
    }
    else{
        computerChoice="paper";
    }

$("#computerChoice").text(computerChoice)

if (userChoice ==="rock" && computerChoice ==="rock"){
    winner= "Its a tie";
}
if (userChoice=== "rock" && computerChoice ==="paper"){
    winner= "User Wins";
}
if (userChoice==="rock" && computerChoice === "scissors"){
    winner= "computer wins";
}
if (userChoice==="paper" && computerChoice ==="paper"){
    winner= "Its a tie";
}
if (userChoice==="paper" && computerChoice==="rock"){
    winner= "User wins";
}
if (userChoice==="paper" && computerChoice==="scissors"){
    winner= "computer wins";
}
if (userChoice==="scissors" && computerChoice==="scissors"){
    winner= "Its a tie";
}
if (userChoice==="scissors" && computerChoice==="rock"){
    winner="computer wins";
}
if (userChoice==="scissors" && computerChoice==="paper"){
    winner=" user wins";
}
$("#result").text(winner);
});



// DOCUMENT READY FUNCTION BELOW

