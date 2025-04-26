class AvlTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.height = 0;
  }
}
class AvlTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const inserthelper = (node, parent = null) => {
      if (!node) {
        const newNode = new AvlTreeNode(value);
        newNode.parent = parent;
        return newNode;
      }
      if (value < node.value) {
        node.left = inserthelper(node.left, node);
      } else if (value > node.value) {
        node.right = inserthelper(node.right, node);
      }
      this._updateHeight(node);
      return this._balance(node);
    };
    this.root = inserthelper(this.root);
    if (this.root.parent) {
      this.root.parent = null;
    }
  }
}
