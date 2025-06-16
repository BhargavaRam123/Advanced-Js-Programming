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
            console.log("inserted to the right of", curr.value);
            curr.right = node;
            break;
          } else {
            curr = curr.right;
          }
        } else {
          if (curr.left === null) {
            console.log("inserted to the left of", curr.value);
            curr.left = node;
            break;
          } else {
            curr = curr.left;
          }
        }
      }
    }
  }
  inordertraversal(n = this.root) {
    if (n === null) {
      return;
    }
    this.inordertraversal(n.left);
    console.log("val:", n.value);
    this.inordertraversal(n.right);
  }
  preordertraversal(n = this.root) {
    if (n === null) {
      return;
    }
    console.log("val:", n.value);
    this.preordertraversal(n.left);
    this.preordertraversal(n.right);
  }
  postordertraversal(n = this.root) {
    if (n === null) {
      return;
    }
    this.postordertraversal(n.left);
    this.postordertraversal(n.right);
    console.log("val:", n.value);
  }
}

const tr = new BinaryTree();
tr.insert(5);
tr.insert(2);
tr.insert(13);
tr.insert(7);
tr.insert(23);
tr.insert(6);
console.log("break");
tr.inordertraversal();
console.log("break");
tr.preordertraversal();
console.log("break");
tr.postordertraversal();
