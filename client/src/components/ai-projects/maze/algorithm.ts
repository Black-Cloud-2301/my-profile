interface BranchAndBoundProps {
  row: number;
  col: number;
}

interface FindingProps {
  row: number;
  col: number;
  evaluate: number;
  father: { row: number; col: number; evaluate: number }[];
}

const mazeBackground = [
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
];

const evaluate = (array: number[][]) => {
  let evaluate = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (array[i][j] === 1) evaluate++;
      else if (array[i][j] === 2) evaluate--;
    }
  }
  return evaluate;
};

const checkBack = (
  row: number,
  col: number,
  father: { row: number; col: number; evaluate: number }[]
) => {
  for (let i = 0; i < father.length; i++) {
    if (row === father[i].row && col === father[i].col) return true;
  }
  if (row < 0 || row > 9 || col < 0 || col > 9) return true;
  return false;
};

export function BranchAndBound(
  start: BranchAndBoundProps,
  end: BranchAndBoundProps
) {
  console.log(start, end);
  const evaluate = (row: number, col: number) => {
    return Math.abs(row - end.row) + Math.abs(col - end.col);
  };

  const open = [];

  open.push({
    row: start.row,
    col: start.col,
    evaluate: evaluate(start.row, start.col),
    father: [
      {
        row: start.row,
        col: start.col,
        evaluate: evaluate(start.row, start.col),
      },
      {
        row: start.row,
        col: start.col,
        evaluate: evaluate(start.row, start.col),
      },
    ],
  });

  let cost = 10000;
  let answer;
  while (open.length !== 0) {
    open.sort(function (a, b) {
      return a.evaluate - b.evaluate;
    });

    const finding: FindingProps | undefined = open.shift();
    if (finding !== undefined) {
      if (finding.father.length >= cost) continue;
      if (finding.row === end.row && finding.col === end.col) {
        cost = finding.father.length;
        finding.father.shift();
        finding.father.shift();
        answer = finding.father;
        continue;
      }
      if (!checkBack(finding.row - 1, finding.col, finding.father)) {
        if (mazeBackground[finding.row - 1][finding.col] === 0) {
          open.push({
            row: finding.row - 1,
            col: finding.col,
            evaluate: evaluate(finding.row - 1, finding.col),
            father: [
              ...finding.father,
              {
                row: finding.row - 1,
                col: finding.col,
                evaluate: evaluate(finding.row - 1, finding.col),
              },
            ],
          });
        }
      }
      if (!checkBack(finding.row + 1, finding.col, finding.father)) {
        if (mazeBackground[finding.row + 1][finding.col] === 0) {
          open.push({
            row: finding.row + 1,
            col: finding.col,
            evaluate: evaluate(finding.row + 1, finding.col),
            father: [
              ...finding.father,
              {
                row: finding.row + 1,
                col: finding.col,
                evaluate: evaluate(finding.row + 1, finding.col),
              },
            ],
          });
        }
      }
      if (!checkBack(finding.row, finding.col - 1, finding.father)) {
        if (mazeBackground[finding.row][finding.col - 1] === 0) {
          open.push({
            row: finding.row,
            col: finding.col - 1,
            evaluate: evaluate(finding.row, finding.col - 1),
            father: [
              ...finding.father,
              {
                row: finding.row,
                col: finding.col - 1,
                evaluate: evaluate(finding.row, finding.col - 1),
              },
            ],
          });
        }
      }
      if (!checkBack(finding.row, finding.col + 1, finding.father)) {
        if (mazeBackground[finding.row][finding.col + 1] === 0) {
          open.push({
            row: finding.row,
            col: finding.col + 1,
            evaluate: evaluate(finding.row, finding.col + 1),
            father: [
              ...finding.father,
              {
                row: finding.row,
                col: finding.col + 1,
                evaluate: evaluate(finding.row, finding.col + 1),
              },
            ],
          });
        }
      }
    }
  }
  console.log(answer);
  answer?.pop();
  return answer;
}
