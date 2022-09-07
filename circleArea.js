/**
 * Title: Area of circle
 * Description: Calculate area of a circle A = PI * R^2
 * Author: Hasibul Islam
 * Date: 07/09/2022
 */

const data = require("fs").readFileSync(__dirname + "/data/areas.txt", {
  encoding: "utf-8",
  flag: "r",
});
const PI = parseFloat(data.split(0));
const radius = parseFloat(data.split(1));
const area = PI * (radius * radius);

console.log(area);
