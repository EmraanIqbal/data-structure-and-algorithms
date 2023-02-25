class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    return this.items[this.items?.length - 1];
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.push(40));
console.log(stack.push(50));
console.log(stack.push(60));
// console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.print());
