class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.rear++ % this.capacity;
      this.items[this.rear] = item;
      this.currentLength += 1;
      if (this.front === -1) this.front = this.rear;
    }
  }

  dequeue() {
    if (!this.isEmpty) return null;
    const element = this.items[this.front];
    this.items[this.front] = null;
    this.front++ % this.capacity;
    this.currentLength--;
    if (this.isEmpty) {
      this.rear = -1;
      this.front = -1;
    }
    return element;
  }

  peek() {
    if (this.isEmpty) return null;
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty) {
      console.log("Queue is empty");
    } else {
      let i;
      let string = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        string += this.items[i] + " ";
      }
      string += this.items[i];
      console.log(string);
    }
  }
}

const circularQueue = new CircularQueue(5);

circularQueue.enqueue(10);
circularQueue.enqueue(100);
circularQueue.enqueue(1000);
circularQueue.enqueue(10000);
circularQueue.enqueue(100000);

console.log(circularQueue.peek());
// circularQueue.enqueue(10);
// circularQueue.enqueue(10);

// circularQueue.dequeue();
// circularQueue.enqueue(10);
console.log(circularQueue);

circularQueue.print();
