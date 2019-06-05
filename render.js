const chalk = require("chalk");

 function render (arr){
    console.clear();
    for (let i = 0; i < arr.length; i++) {
        let row = "";
        let color;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j]) {
                color = chalk.bgRed;
            }else {
                color = chalk.bgBlue;
            }
            row += color("  ");
        }
        console.log(row);
    }
}
module.exports = render;