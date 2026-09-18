import chalk from "chalk";

const vowels = ["a", "e", "i", "o", "u"];

const usersArgs = process.argv.slice(2);
const args = usersArgs.length === 1 ? usersArgs[0].split(" ") : usersArgs;

const allWordsValid = args.every((word) => /^[a-zA-Z]+$/.test(word)); //AI

if (args.length > 0) {
  if (allWordsValid) {
    const result = args
      .map((arg) => {
        const firstLetter = arg[0].toLowerCase();
        const isVowel = vowels.includes(firstLetter);
        const secondLetter = arg[1].toLowerCase();

        const isSecondVowel = vowels.includes(secondLetter);

        if (isVowel) {
          arg = chalk.yellow(arg) + chalk.green("way");
          return arg.toLowerCase();
        }
        if (!isVowel && isSecondVowel) {
          arg =
            chalk.yellow(arg.slice(1)) + chalk.red(arg[0]) + chalk.green("ay");
          return arg.toLowerCase();
        }
        if (!isVowel && !isSecondVowel) {
          arg =
            chalk.yellow(arg.slice(2)) +
            chalk.red(arg[0]) +
            chalk.red(arg[1]) +
            chalk.green("ay");
          return arg.toLowerCase();
        }
      })
      .join(" ");
    console.log(`\n${chalk.blue(args.join(" "))} => ${chalk.green(result)}\n`);
  } else {
    console.error(
      chalk.red(
        `\nPlease write someting in format ${chalk.green(`"Some phrase"`)} or ${chalk.green(`Some phrase`)} - only letters and spaces.\n`,
      ),
    );
  }
} else {
  console.error(
    chalk.red(
      `\nYou didn't enter anything. Please write me someting - and I'll transtate it on ${chalk.yellow("Pig Latin")} for you!\n`,
    ),
  );
}
