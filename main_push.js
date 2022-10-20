"use strict";
exports.__esModule = true;
var stack_1 = require("./stack");
var index = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var stack = new stack_1.Stack();
var a = index.length;
for (var i = 0; i < a; i++) {
    stack.push(index.shift());
}
for (var i = 0; i < a; i++) {
    index.push(stack.pop());
}
console.log(index);
