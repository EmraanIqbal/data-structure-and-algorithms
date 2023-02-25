class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }

    return null;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.dequeue();
console.log(queue.size());
queue.print();

// console.log(queue);
console.log(queue.peek());
