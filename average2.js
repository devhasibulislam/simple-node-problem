/**
 * Title: Find average
 * Description: Find average with large variables
 * Author: Hasibul Islam
 * Date: 07/09/2022
 */

const data = require("fs").readFileSync(`${__dirname}/data/average.txt`, {
  encoding: "utf-8",
  flag: "r",
});

const number1 = +data.split("\n")[0];
const number2 = +data.split("\n")[1];
const number3 = +data.split("\n")[2];
const average = (
  (number1 + number2 + number3) /
  data.split("\n").length
).toFixed(2);

console.log(average);
