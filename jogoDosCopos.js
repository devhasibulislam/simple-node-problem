/**
 * Title: Flip the coin
 * Description: Flip the coin as Jogo Dos Copos
 * Author: Hasibul Islam
 * Date: 07/09/2022
 */

const data = require("fs").readFileSync(`${__dirname}/data/coin.txt`, {
  encoding: "utf-8",
  flag: "r",
});

const lines = data.split("\n");
const startPosition = lines[1]; // 7.1
const moveList = lines.slice(2); // []
const whoHasCoin = startPosition; // 7.1

for (let i = 0; i < +lines[0]; i++) {
  passMove(+moveList[i]);
}

function swap(first, second) {
  if (whoHasCoin === first) {
    whoHasCoin = second;
  } else if (whoHasCoin === second) {
    whoHasCoin = first;
  }
}

function passMove(move_type) {
  switch (move_type) {
    case 1:
      swap("A", "B");
      break;
    case 2:
      swap("B", "C");
      break;
    default:
      swap("C", "A");
      break;
  }
}

console.log(whoHasCoin);
