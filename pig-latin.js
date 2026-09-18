import chalk from "chalk";

const args = process.argv.slice(2);
const vowels = ["a", "e", "i", "o", "u"];

if (args.length > 0) {
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
      `\nYou didn't enter anything. Please write me someting - and I'll transtate it on ${chalk.yellow("Pig Latin")} for you!\n`,
    ),
  );
}
