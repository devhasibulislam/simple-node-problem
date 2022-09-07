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

console.log(addition);
