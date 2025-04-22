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
      while (temp.next) {
        temp = temp.next;
      }
      let node = new Node(value);
      temp.next = node;
    } else {
      let node = new Node(value);
      this.head = node;
    }
  }
  printlinkedlist() {
    let temp = this.head;
    while (temp) {
      console.log("node->", temp.value);
      temp = temp.next;
    }
  }
}

const ll = new linkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.printlinkedlist();
