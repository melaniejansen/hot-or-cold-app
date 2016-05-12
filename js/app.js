
$(document).ready(function(){

  var randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  var guesses = [];
  var guessedNumber;
  var message;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//start a new game when clicking the "New" button. 

  	$('.new').click(function() {
		answer = Math.floor((Math.random() * 100) + 1);
		$('#guessList').empty();
		$('#feedback').html('Make your guess!');
		$('#count').html('0');
		guesses = [];
	});

    $("#guessButton").click(function() {
      var guess = $("#userGuess").val();
      $("#userGuess").val('');
      guesses.push(guess);
      $("#guessList").append("<li>" + guess + "</li>");
      console.log('Guess = ' + guess);
      guessedNumber = Math.abs(guess - randomNumber);


// If a number greater than 100 is entered
      if (guessedNumber > 100 || guess < 1) {
        message = "Please enter a number \n between 1 - 100."
      }

//Reactions to User Input
      else if (guessedNumber > 80) {
        message = "You're ice cold!"
      }
      else if (guessedNumber > 50) {
        message = "Pretty cold!"
      }
      else if (guessedNumber > 30) {
        message = "Getting warm!"
      } 
      else if (guessedNumber > 20) {
        message = "Getting hot!"
      } 
      else if (guessedNumber > 10) {
        message = "Really hot!"
      } 
      else if (guessedNumber > 5) {
        message = "You're on Fire!"
      } 
      else if (guess == randomNumber) {
        message = "Congrats! You got it!"
      }

      $("#feedback").text(message);

      return false;
    });

});