class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    if (this.head) {
      let temp = this.head;
      while (temp.next === null) {
        temp = temp.next;
      }
      let node = new Node(value);

      temp.next = node;
    } else {
      let node = new Node(value);
      this.head = node;
    }
  }
}
