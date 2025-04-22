class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublylinkedList {
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
      node.prev = temp;
    } else {
      let node = new Node(value);
      this.head = node;
    }
  }
  insertathead(value) {
    let node = new Node(value);
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      this.head = node;
    }
  }
  deletenodeatcertainpos(pos) {
    let temp = this.head;
    let tempnext = this.head.next;
    pos--;
    while (pos) {
      temp = temp.next;
      tempnext = tempnext.next;
      pos--;
    }
    tempnext.next.prev = temp;
    temp.next = tempnext.next;
    tempnext = null;
  }
  printlinkedlist() {
    let temp = this.head;
    while (temp) {
      //   console.log("temp value", temp);
      console.log("node->", temp.value);
      temp = temp.next;
    }
  }
}

const ll = new doublylinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.insertathead(10);
ll.deletenodeatcertainpos(2);
ll.printlinkedlist();
