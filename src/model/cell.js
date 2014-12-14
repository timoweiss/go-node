'use strict';

function Cell(x, y, status) {
    this.checked = false;
    this.status = status || 0;
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

Cell.prototype.getChoords = function() {
    return this.choords;
};

Cell.prototype.isChecked = function() {
    return this.checked;
};

Cell.prototype.setChecked = function() {
    this.checked = true;
};

Cell.prototype.resetChecked = function() {
    this.checked = false;
};

Cell.prototype.toString = function() {
    return this.choords.x + '|' + this.choords.y;
};

module.exports = Cell;
