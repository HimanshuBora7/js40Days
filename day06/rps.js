/*

--Rock-Paper-Scissor-Game
* THe rock 🪦,  paper📰 or scissor✂️ game
*THis game will be played between the computer 🤖 and human, Once human will select rock🪦,paper📰 , or scissors✂️ and in the next turn the computer🤖 will select Rock, Paper or scissor.

THe winner will be selected based on these rules:
- Rock can break scissors => rock wins
- paper can wrap rock => paper wins
- scissors can cut paper => scissosrs wins 

-- ask the input from user and randomly select a computer selection to continue the game 



*/

// Assumptions
// 1. we have to prompt the user to get their input
// 2. the computer's selection will be random.
// 3. we have to compare the users and computers choice
// 4. we need to announce the winner
// 5. After the winner announcement, we may want to ask the user if we want to play again or we quit

function rockPaperScissorGame() {
  console.log("gettting started with He rock 🪦,  paper📰 or scissor ✂️ game");

  // Taking user input using global method of prompt which is available in every browser

  const userChoicePrompt = prompt(
    "Please enter your choice rock 🪦, paper📰, scissor✂️ ,Quit "
  );
  let userChoice = userChoicePrompt.toLowerCase();

  let computerChoice;

  const randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissor";
      break;
  }

  console.log("your choice is", userChoice);
  console.log("computers choice is", computerChoice);

  let isWin; // from the perspective of user
  let isTie;

  if (userChoice == computerChoice) {
    isTie = true;
  } else if (userChoice == "rock" && computerChoice == "paper") {
    isWin = false;
  } else if (userChoice == "rock" && computerChoice == "scissor") {
    isWin = true;
  } else if (userChoice == "paper" && computerChoice == "rock") {
    isWin = true;
  } else if (userChoice == "paper" && computerChoice == "scissor") {
    isWin = false;
  } else if (userChoice == "scissor" && computerChoice == "rock") {
    isWin = false;
  } else if (userChoice == "scissor" && computerChoice == "paper") {
    isWin = true;
  }
  if (isWin) {
    console.log("U won, congratulations ");
  } else if (isTie) {
    console.log("tied");
  } else {
    console.log("u lost ");
  }

  const playAgainPrompt = prompt("DO u want to play again ?");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

  //if the user enters yes then call the function again
  if (playAgain == "yes") {
    rockPaperScissorGame();
  } else {
    console.log("u quitted the game ");
  }
}
//start the gamee
rockPaperScissorGame();

// js provides few global level methods to interact with user and the application
// window.alert~ to give alert message
// window.prompt~ to recieve input from the user

// random  number genration in js
// Math.random () ~ generates a big random number in decimal format
// next step is to multiply the generated decimal number by higher threshold number to get integer value out of generated decimal number
// next step is to roundoff the value using math.floor() method
// as we are using floor method to round off so the generated value will never touch the higher threshold value it will always be 1 less than that so we add one to include that value in randomnes
// so the formula generated is
// Math.floor(Math.random()*Higher_Threshold_Value) +1 ;
