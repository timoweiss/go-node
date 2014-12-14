'use strict';

function Cell(x, y) {
    this.checked = false;
    this.status = 0;
    this.choords = {
        x: x,
        y: y
    };
}

Cell.prototype.getStatus = function() {
    return this.status;
};

Cell.prototype.setStatus = function(status) {
    this.status = status;
};

module.exports = Cell;
