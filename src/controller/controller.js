'use strict';

var GameField = require('./../model/gameField');

var gameField = null;

function Controller() {
    this.operate = true;
}

Controller.prototype.createField = function(lenght) {
    this.operate = true;
    gameField = new GameField(lenght);
};

Controller.prototype.setStone = function(x, y) {
    if (!operate) {
        console.log("Game already done", "unable to set stone");
        return false;
    }
    var next = gameField.getNext();
    if (gameField.setStone(x, y)) {
        console.log("set ", next, " at:", x, y);
    }
};

Controller.prototype.getWhitePlayerScore = function() {
    return gameField.getWhitePlayer().getScore();
};

Controller.prototype.getBlackPlayerScore = function() {
    return gameField.getBlackPlayer().getScore();
};
