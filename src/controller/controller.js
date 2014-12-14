'use strict';

var GameField = require('./../model/gameField');

var gameField = null;
var operate = false;

function Controller() {
    operate = true;
}

Controller.prototype.createField = function(lenght) {
    operate = true;
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

Controller.prototype.getCellStatus = function(x, y) {
    return gameField.getCellStatus(x, y);
};

Controller.prototype.getNext = function() {
    return gameField.getNext();
};

Controller.prototype.getGameFieldSize = function() {
    return gameField.getGameFieldSize();
};

Controller.prototype.stop = function() {
    operate = false;
};

Controller.prototype.pass = function() {
    if (!operate) {
        //statusLine = "Game already closed, not allowed to pass";
        //notifyObservers();
        return false;
    }
    var pass = gamefield.pass();
    return pass;
};
