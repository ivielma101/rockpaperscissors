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

randomNumber=0;
$("#shoot").click(function(){
    userChoice=$("#input").val();
    $("#userChoice").text(userChoice);
    randomNumber=Math.random();
    if( randomNumber<.3333333333333333333333333){
        computerChoice="Rock";
    }
    else if( randomNumber<.666666666666666666666667){
        computerChoice="Scissors";
    }
    else{
        computerChoice:"Paper";
    }

});
    computerChoice=$("#input").val();
    $("#computerChoice").text(computerChoice)
var userInput=$("#userChoice").val();
var computerInput=$("#computerChoice").val();

var computerWinner= (computerChoice=== computerInput);
var userWinner

$("button").click(function(){
$("#userChoice").text($("#input").val());
});



// DOCUMENT READY FUNCTION BELOW

