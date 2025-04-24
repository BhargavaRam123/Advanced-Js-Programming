class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(v) {
    let node = new Node(v);
    if (!this.root) {
      this.root = node;
    } else {
      let curr = this.root;
      while (true) {
        if (v > curr.value) {
          if (curr.right === null) {
            curr.right = node;
            break;
          } else {
            curr = curr.right;
          }
        } else {
          if (curr.left === null) {
            curr.left = node;
            break;
          } else {
            curr = curr.left;
          }
        }
      }
    }
  }
  inordertraversal(n = this.head) {
    if (n === null) {
      return;
    }
    this.inordertraversal(n.left);
    console.log("val:", n.value);
    this.inordertraversal(n.right);
  }
}
