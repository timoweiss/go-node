'use strict';

var GameField = require('./src/model/GameField');

var myGameField = new GameField();
myGameField.createGameField(9);
console.log(myGameField);
