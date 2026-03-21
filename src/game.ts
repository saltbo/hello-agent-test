import * as readline from "readline";

const target = Math.floor(Math.random() * 100) + 1;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(): void {
  rl.question("Guess a number (1-100): ", (answer) => {
    const guess = parseInt(answer, 10);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("Please enter a valid number between 1 and 100.");
      prompt();
      return;
    }

    if (guess < target) {
      console.log("Too low!");
      prompt();
    } else if (guess > target) {
      console.log("Too high!");
      prompt();
    } else {
      console.log("Correct! You guessed the number!");
      rl.close();
    }
  });
}

console.log("Welcome to the Number Guessing Game!");
console.log("I'm thinking of a number between 1 and 100.\n");
prompt();
