#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgGreenBright("\t\n   WELCOME TO GOVERNOR SINDH IT INITATIVE (APPLY NOW) \t\n"));
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: (chalk.bgGrey("\t\n ENTER YOUR NAME \t\n")),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "PLEASE ENTER A NON-EMPTY VALUE.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: (chalk.bgGrey("\t\n ENTER YOUR ENROLL COURSE")),
        choices: ["TYPESCRIPT", "JAVASCRIPT", "PYTHON", "NEXT.JS", "CSS", "HTML"]
    }
]);
const courseFee = {
    TYPESCRIPT: 6000,
    JAVASCRIPT: 6000,
    PYTHON: 6000,
    "NEXT.JS": 5000,
    CSS: 2000,
    HTML: 2000,
};
console.log((chalk.bgBlueBright(`coursefee: ${courseFee[answer.courses]}/-`)));
let payment_method = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: (chalk.bgGreenBright("\t\n ENTER YOUR PAYMENT METHOD")),
        choices: ["blank transfer", "easy paisa", "jazz cash"],
    },
    {
        name: "amount",
        type: "input",
        message: "\t\n transfer money\t\n",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "PLEASE ENTER A NON-EMPTY VALUE.";
        },
    }
]);
console.log(`select payment method ${payment_method.payment}`);
const selectedcourseFee = courseFee[answer.courses];
const paymentAmount = parseFloat(payment_method.amount);
if (selectedcourseFee === paymentAmount) {
    console.log(chalk.bgYellowBright("\tCongratulation!,you have purchased this course.\n"));
    console.log(chalk.bgMagentaBright(`student name: ${chalk.bold.underline(answer.students)}`));
    console.log(chalk.bgCyanBright(`student ID: ${chalk.bold.underline(randomNumber)}`));
    console.log(chalk.bgGreenBright(`course name: ${chalk.bold.underline(answer.courses)}`));
}
else {
    console.log(chalk.bgRedBright("\tinvalid amount due to courses\n"));
}
;
