/**
 * Title: Hello World
 * Description: Print a "Hello World" statement within console
 * Author: Hasibul Islam
 * Date: 07/09/2022
 */

const data = require("fs").readFileSync(__dirname + "/data/helloWorld.txt", {
  encoding: "utf-8",
  flag: "r",
});

console.log(data);
