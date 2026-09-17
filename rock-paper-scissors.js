import chalk from "chalk";

const options = ["rock", "paper", "scissors"];

const args = process.argv.slice(2);
const playersMove = args[0];

const compMove = options[Math.floor(Math.random() * options.length)];

const messageEmpty = `\nYou didn't enter anything. Please write your choice: ${chalk.blue("rock")}, ${chalk.blue("paper")} or ${chalk.blue("scissors")}.\n`;

if (args.length > 0) {
    const playersMoveLower = playersMove.toLowerCase();
    const include = options.includes(playersMoveLower);
    
    const userWinRock = playersMoveLower === "rock" && compMove === "scissors";
    const userWinScissors =
    playersMoveLower === "scissors" && compMove === "paper";
    const userWinPaper = playersMoveLower === "paper" && compMove === "rock";
    
    const messageWon = `\nYou chose ${chalk.blue(playersMoveLower)}. Computer chose ${chalk.blue(compMove)}. You win!\n`;
    const messageLose = `\nYou chose ${chalk.blue(playersMoveLower)}. Computer chose ${chalk.blue(compMove)}. You lose... But try again!\n`;
    const messageDraw = `\nYou chose ${chalk.blue(playersMoveLower)} and computer chose ${chalk.blue(compMove)} too! It's draw. Next time you'll win!\n`;
    const messageNotInclude = `\nAre you sure you've written ${chalk.blue('"rock"')}, ${chalk.blue('"paper"')} or ${chalk.blue('"scissors"')}? Try again!\n`;
    
    if (include) {
        if (userWinRock || userWinScissors || userWinPaper) {
            console.log(chalk.greenBright(messageWon));
        } else if (playersMoveLower === compMove) {
            console.log(chalk.yellow(messageDraw));
        } else console.log(chalk.red(messageLose));
    } else console.error(chalk.red(messageNotInclude));
} else console.error(chalk.red(messageEmpty));



//-------------------------------AI------------------------------
/*

// const [playersMove] = args; 

const beats = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

const move = playersMove.toLowerCase();

if (move === compMove) {
  console.log(chalk.yellow("Draw"));
} else if (beats[move] === compMove) {
  console.log(chalk.greenBright("You have won"));
} else {
  console.log(chalk.red("You have lost"));
}
  */
