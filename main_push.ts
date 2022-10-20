import {Stack} from "./stack";

let index = [1,2,3,4,5,6,7,8,9];
let stack = new Stack();

let a = index.length

for (let i=0;i<a;i++) {
    stack.push(index.shift());
}
for (let i=0;i<a;i++) {
    index.push(stack.pop())
}

console.log(index)