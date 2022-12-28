import React from "react";

const SuperPuzzle = () => {
  const puzzle = [
    [1, 2, 3, 4],
    [5, 0, 6, 8],
    [9, 10, 7, 11],
    [13, 14, 15, 12],
  ];

  let moves = [];
  let zeroRow = 0;
  let zeroCol = 0;

  // find the position of the zero element
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      if (puzzle[i][j] === 0) {
        zeroRow = i;
        zeroCol = j;
        break;
      }
    }
  }

  while (zeroRow !== puzzle.length - 1 || zeroCol !== puzzle[0].length - 1) {
    if (zeroCol < puzzle[0].length - 1) {
      puzzle[zeroRow][zeroCol] = puzzle[zeroRow][zeroCol + 1];
      puzzle[zeroRow][zeroCol + 1] = 0;
      zeroCol++;
    } else if (zeroRow < puzzle.length - 1) {
      puzzle[zeroRow][zeroCol] = puzzle[zeroRow + 1][zeroCol];
      puzzle[zeroRow + 1][zeroCol] = 0;
      zeroRow++;
    }

    moves.push(puzzle[zeroCol - 1][zeroRow]);
  }

  return <div><b>Super Puzzle :</b> {moves} </div>;
};

export default SuperPuzzle;
