#! /usr/bin/env node
import { sum } from "./addition.js";
import { sub } from "./subtract.js";
import { mul } from "./multiplication.js";
import { div } from "./division.js";
import inquirer from "inquirer";
const answer1 = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your frist number:"
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your second number:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "Select an operator:"
    }
]);
const { num1, num2, operator } = answer1;
if (num1 || num2 || operator) {
    if (answer1.operator === "+") {
        let result = sum(answer1.num1, answer1.num2);
    }
    else if (answer1.operator === "-") {
        let result = sub(answer1.num1, answer1.num2);
    }
    if (answer1.operator === "*") {
        let result = mul(answer1.num1, answer1.num2);
    }
    if (operator === "/") {
        let result = div(answer1.num1, answer1.num2);
    }
}
else {
    console.log("please enter valid number");
}
;
