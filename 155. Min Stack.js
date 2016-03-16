/**
 * @constructor
 */
var MinStack = function() {
    this.array = [];
    this.index = -1;
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    this.index++;
    this.array[this.index] = x;
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    this.index--;
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.array[this.index];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    var tmp = this.array[this.index];
    for(var i = this.index; i >=0; i--){
        if(this.array[i] < tmp){
            tmp = this.array[i];
        }
    }
    return tmp;
};