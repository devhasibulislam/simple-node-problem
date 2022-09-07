/**
 * Title: Find average
 * Description: Find average of three numbers
 * Author: Hasibul Islam
 * Date: 07/09/2022
 */

const data = require("fs").readFileSync(`${__dirname}/data/average.txt`, {
  encoding: "utf-8",
  flag: "r",
});
const average =
  (Number(data.split("\n")[0]) +
    Number(data.split("\n")[1]) +
    Number(data.split("\n")[2])) /
  Number(data.split("\n").length);

console.log(average.toFixed(3));
