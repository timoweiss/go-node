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
            this.gameField[i].push([0]);
        }
    }
};


module.exports = GameField;
//.createGameField(9);
