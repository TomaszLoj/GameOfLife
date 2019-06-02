
const { board } = require("./ExamInput2");

const getLogicalValue = (e) => !!e;

const transform2DimArr = (arr, func) => {
   return arr.map(e => e.map(func));
}

const boardLogical = transform2DimArr(board,getLogicalValue);

console.log(board);
console.log(boardLogical);
console.log(board);
