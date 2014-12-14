'use strict';

// bool to inicate who's next
var whiteIsNext = false;

// bool pass var
var pass = false;

function GameField() {
    this.whitePlayer = null;
    this.blackPlayer = null;
    this.gameField = [];
}

GameField.prototype.createGameField = function(size) {
    this.gameField = [];
    var i, j;
    for (i = 0; i < size; ++i) {
        this.gameField.push([]);
        for (j = 0; j < size; ++j) {
            this.gameField[i].push(0);
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
        this.gameField[x][y] = 1;
    } else {
        this.gameField[x][y] = 2;
    }
    _moveEnd();
    whiteIsNext = !whiteIsNext;
    return true;
};

GameField.prototype.getCellStatus = function(x, y) {
    return this.gameField[x][y];
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
