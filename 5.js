const { board } = require("./ExamInput2");
const render = require("./render")

const getLogicalValue = e => !!e;

const transform2dArray = (arr, func) => arr.map((e, y) => e.map((e, x) => func(e, y, x, arr)));

const flat2dArray = arr => arr.reduce((prev, curr) => prev.concat(curr));

const arroundCells = (arr, posY, posX) => {
    let result = arr
        .filter((e, y) => y === posY || y === posY + 1 || y === posY - 1)
        .map(e =>
            e.filter((e, x) => x === posX || x === posX + 1 || x === posX - 1)
        );
    result[1].splice(1,1);
    return result;
};
const neighbourCount = arr => arr.reduce((prev, curr) => (curr ? prev + 1 : (curr = prev)), 0);

const shouldLive = (e, y, x, arr) => { 
    let counter = neighbourCount(flat2dArray(arroundCells(arr, y, x)));
    return (e && (counter >= 2 && counter <=3) || (!e && counter === 3)) ? true : false ;
};

let boardLogical = transform2dArray(board, getLogicalValue);

setInterval(() => {
    boardLogical = transform2dArray(boardLogical, shouldLive);
    render(boardLogical)
}, 500);