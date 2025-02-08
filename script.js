// Global variables
var resultParagraph = document.getElementById("result");
var random;
var range = 100;
var nextRandom = Math.floor(Math.random() * range + 1);



// Function to generate a random number
function generateRandom() {
    random = nextRandom;
    nextRandom = Math.floor(Math.random() * range + 1);
    console.log(random);
    resultParagraph.innerHTML = random;
}

// Function for the higher button
function higher() {
   if (nextRandom > random) {
    window.alert("It is higher. You guessed correctly! Good job!");
   }
   else if (nextRandom < random) {
    window.alert("It is lower. You guessed incorrectly. Try again.");
   }
   else {
    window.alert("The same number as last time. What are the chances?");
   }
   generateRandom();
}

// Function for the lower button
function lower() {
    if (nextRandom > random) {
        window.alert("It is higher. You guessed incorrectly. Try again.");
       }
       else if (nextRandom < random) {
        window.alert("It is lower. You guessed correctly! Good job!");
       }
       else {
        window.alert("The same number as last time. What are the chances?");
       }
       generateRandom();
}

//Generate a number to start the game!
generateRandom();