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

  insert(value, index) {
    // console.log(node);
    if (index < 0 || index > this.size) return console.log("Invalid Index");
    if (index === 0) {
      this.prepend(value);
    } else {
      let node = new Node(value);

      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
      this.size++;
    }
  }

  delete(index) {
    if (index < 0 || index >= this.size) return console.log("Invalid Index");
    if (index === 0) {
      let current = this.head;
      this.head = current.next;
      current = null;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      //   current = null;
      let temp = current.next;
      current.next = temp.next;
      temp = null;
      console.log(current);
    }
    this.size--;
  }

  deleteNodeByValue(value) {
    if (this.isEmpty()) return console.log("List is empty");
    if (this.head.value === value) {
      let current = this.head;
      this.head = current.next;
      current = null;
      console.log("Node is deleted of value: " + value);
    } else {
      let current = this.head;
      let temp;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }

      if (current.next) {
        let temp = current.next;
        // console.log(temp);
        // console.log(temp.next);

        // console.log(current.next);

        current.next = temp.next;
        this.size--;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) return console.log("List is Empty");
    if (this.head.value === value) {
      return this.head.value;
    } else {
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
      //   console.log(current);
      if (current.next) {
        console.log("Value is Founded : " + current.next.value);
      }
      return console.log("value is not found");
    }
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  print() {
    let emptyArray = [];
    if (this.isEmpty()) {
      console.log("Node is empty");
    } else {
      let current = this.head;
      while (current != null) {
        // console.log("value in node is: " + current.value);
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
list.insert(200, 3);
list.deleteNodeByValue(200);
list.search(200);
// list.delete(2);
list.print();
list.reverse();
list.print();

console.log("list is empty?", list.isEmpty());
console.log("list size ?", list.getSize());
