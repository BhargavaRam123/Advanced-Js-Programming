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
  insertAtEnd(data) {
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
    }

    this.size++;
    return this;
  }
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return false;
    }

    if (index === 0) {
      return this.insertAtBeginning(data);
    }

    if (index === this.size) {
      return this.insertAtEnd(data);
    }
    const newNode = new Node(data);

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    let nextNode = current.next;

    newNode.next = nextNode;
    newNode.prev = current;
    current.next = newNode;
    nextNode.prev = newNode;

    this.size++;
    return this;
  }
  removeFromBeginning() {
    if (this.head === null) {
      return null;
    }

    const removedData = this.head.data;

    if (this.head.next === this.head) {
      this.head = null;
    } else {
      const lastNode = this.head.prev;
      const secondNode = this.head.next;

      secondNode.prev = lastNode;
      lastNode.next = secondNode;

      this.head = secondNode;
    }
    this.size--;
    return removedData;
  }
}
