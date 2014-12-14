'use strict';

var Controller = require('./src/controller/controller');


var myGameField = new Controller();


myGameField.createField(9);


console.log('before:', myGameField.getCellStatus(1, 2));

return;
myGameField.setStone(1, 2);
myGameField.setStone(3, 2);
myGameField.setStone(5, 2);
myGameField.setStone(2, 5);
myGameField.setStone(1, 1);
console.log('after:', myGameField.getCellStatus(1, 2));
console.log('after:', myGameField.gameField[1][1].setChecked());
console.log(myGameField.gameField);
console.log('after:', myGameField.resetAllChecked());
console.log(myGameField.gameField);
