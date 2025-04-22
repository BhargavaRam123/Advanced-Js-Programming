class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyCircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      const lastNode = this.head.prev;

      newNode.next = this.head;
      newNode.prev = lastNode;

      this.head.prev = newNode;
      lastNode.next = newNode;

      this.head = newNode;
    }

    this.size++;
    return this;
  }
}
