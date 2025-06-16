class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class circularlist {
  constructor() {
    this.head = null;
  }
  insert(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      node.next = this.head;
    } else if (this.head === this.head.next) {
      this.head.next = node;
      node.next = this.head;
    } else {
      let temp = this.head;
      while (temp.next !== this.head) {
        temp = temp.next;
      }
      temp.next = node;
      node.next = this.head;
    }
  }
  printll() {
    let temp = this.head;
    while (temp.next !== this.head) {
      console.log("node ->", temp.value);
      temp = temp.next;
    }
    console.log("node ->", temp.value);
  }
}
const cl = new circularlist();
cl.insert(1);
cl.insert(2);
cl.insert(3);
cl.printll();
