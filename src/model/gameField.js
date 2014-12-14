'use strict';

var Cell = require('./../model/cell');
var Player = require('./../model/player');

// bool to inicate who's next
var whiteIsNext = false;

// bool pass var
var pass = false;

function GameField() {
    this.whitePlayer = new Player();
    this.blackPlayer = new Player();
    this.gameField = [];
}

GameField.prototype.createGameField = function(size) {
    this.gameField = [];
    var i, j;
    for (i = 0; i < size; ++i) {
        this.gameField.push([]);
        for (j = 0; j < size; ++j) {
            this.gameField[i].push(new Cell(i, j));
        }
    }
};

GameField.prototype.setStone = function(x, y) {
    if (x > this.gameField.length || y > this.gameField.length) {
        return false;
    } else if (this.getCellStatus(x, y) !== 0) {
        return false;
    }
    if (whiteIsNext) {
        this.gameField[x][y].setStatus(1);
    } else {
        this.gameField[x][y].setStatus(2);
    }
    _moveEnd();
    whiteIsNext = !whiteIsNext;
    return true;
};

GameField.prototype.getCellStatus = function(x, y) {
    return this.gameField[x][y].getStatus();
};

GameField.prototype.getNext = function() {
    if (whiteIsNext) {
        return "white";
    }
    return "black";
};

function _moveEnd() {
    // TODO:
    // update datastructure for score
}


module.exports = GameField;
//.createGameField(9);
