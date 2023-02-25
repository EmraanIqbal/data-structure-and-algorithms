class Queue {
  constructor() {
    this.queue = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.queue[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.queue === this.rear) return null;
    const item = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return item;
  }

  peek() {
    if (this.queue === this.rear) return null;
    return this.queue[this.front];
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.queue);
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();

console.log(queue.peek());

console.log(queue.print());
