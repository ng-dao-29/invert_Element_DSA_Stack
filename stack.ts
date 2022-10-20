export class Stack<T> {
    container: number [] = [];
    constructor() {
    }
    push(data:number) {
        this.container.push(data);
    }
    pop(): number {
        return this.container.pop()
    }
    size():number {
        return this.container.length
    }
}