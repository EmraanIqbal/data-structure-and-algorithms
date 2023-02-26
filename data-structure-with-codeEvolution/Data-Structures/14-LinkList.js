class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
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
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //    O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      //   let temp;
      while (current.next) {
        // temp = current;
        current = current.next;
      }
      //   console.log(temp);

      current.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Node is empty");
    } else {
      let current = this.head;
      while (current != null) {
        console.log("value in node is: " + current.value);
        current = current.next;
      }
    }
  }
}

const list = new LinkedList();
list.prepend(131);
list.prepend(130);
list.prepend(129);

list.append(132);
list.print();
console.log("list is empty?", list.isEmpty());
console.log("list size ?", list.getSize());
