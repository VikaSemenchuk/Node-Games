import chalk from "chalk";

// const alphabet = Array.from({ length: 26 }, (_, i) => // AI
//   String.fromCharCode(97 + i),
// );

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const args = process.argv.slice(2);

if (args.length > 0) {
  const phrase = args[0].toLowerCase();
  const shift = Number(args[1]);
  const phraseArr = phrase.split("");

  if (!Number.isNaN(shift) && args.length === 2 && phrase.trim().length > 0) {
    const encryptedPhrase = phraseArr
      .map((letter) => {
        const letterIndex = alphabet.indexOf(letter);
        if (letterIndex === -1) {
          return letter; // AI, for , . ! " " ` '
        }
        const shiftedLetterIndex = (((letterIndex + shift) % 26) + 26) % 26; // AI
        const shiftedLetter = alphabet[shiftedLetterIndex];
        return shiftedLetter;
      })
      .join("");

    console.log(`\n${chalk.blue(phrase)} => ${chalk.green(encryptedPhrase)}\n`);
  } else {
    console.error(
      chalk.red(
        `\nPlease write someting in format: ${chalk.green(`"Some phrase"`)} ${chalk.green("number")}.\n`,
      ),
    );
  }
} else {
  console.error(
    chalk.red(
      `\nYou didn't enter anything. Please write me someting - and I'll encrypt it with ${chalk.yellow("basic Caesar Cipher encryption")} for you!\n`,
    ),
  );
}
