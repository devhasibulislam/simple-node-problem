/**
 * Title: Extremely basic
 * Description: Addition of two numbers
 * Author: Hasibul Islam
 * Date: 07/09/2022
 */

const data = require("fs").readFileSync(__dirname + "/data/numbers.txt", {
  encoding: "utf-8",
  flag: "r",
});

const addition = Number(data.split("\n")[0]) + Number(data.split("\n")[1]);
const subtraction = Number(data.split("\n")[0]) - Number(data.split("\n")[1]);
const multiplication = Number(data.split("\n")[0]) * Number(data.split("\n")[1]);
const division = Number(data.split("\n")[0]) / Number(data.split("\n")[1]);
const reminder = Number(data.split("\n")[0]) % Number(data.split("\n")[1]);

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", +division.toFixed(4)); // convert to float number
console.log("Reminder:", reminder);
