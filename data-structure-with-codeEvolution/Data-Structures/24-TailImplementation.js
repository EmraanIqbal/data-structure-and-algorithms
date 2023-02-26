class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //   O(1)
  prepend(value) {
    const node = new Node(value);
    // let temp = this.head;
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  //    O(1)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) return console.log("List is Empty");
    const temp = this.head.value;
    this.head = this.head.next;
    this.size--;
    return temp;
  }

  removeFromEnd() {
    if (this.isEmpty()) return console.log("List is Empty");
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }

      this.tail = prev;
      prev.next = null;
    }
    this.size--;
  }

  print() {
    let emptyArray = [];
    if (this.isEmpty()) {
      console.log("Node is empty");
    } else {
      let current = this.head;
      while (current != null) {
        console.log("value in node is: " + current.value);
        emptyArray.push(current.value);
        current = current.next;
      }
      console.log(emptyArray);
      return emptyArray;
    }
  }
}

const list = new LinkedList();
list.prepend(131);
list.prepend(130);
list.prepend(129);

list.append(132);

// list.removeFromFront();
// list.removeFromEnd();

list.print();

console.log("list is empty?", list.isEmpty());
console.log("list size ?", list.getSize());
