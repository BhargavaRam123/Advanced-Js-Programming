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
  _updateHeight(node) {
    const leftsubtreeheight = this._getnodeheight(node.left);
    const rightsubtreeheight = this._getnodeheight(node.right);
    node.height = Math.max(leftsubtreeheight, rightsubtreeheight) + 1;
  }
  _balance(node) {
    if (!node) return node;
    const nodeBF = this._getbalancefactor(node);
    if (nodeBF > 1) {
      if (this._getbalancefactor(node.left) < 0) {
        return this._leftrightrotation(node);
      }
      return this._rightrotation(node);
    } else if (nodeBF < -1) {
      if (this._getbalancefactor(node.right) > 0)
        return this._rightleftrotation(node);
      return this._leftrotation(node);
    }
    return node;
  }
  _leftrotation(node) {
    const temp = node.right;
    node.right = temp.left;
    if (temp.left) {
      temp.left.parent = node;
    }
    temp.left = node;
    temp.parent = node.parent;
    node.parent = temp;
    if (temp.parent) {
      if (temp.parent.left === node) {
        temp.parent.left = temp;
      } else if (temp.parent.right === node) {
        temp.parent.right = temp;
      }
    }
    this._updateHeight(node);
    this._updateHeight(temp);
    return temp;
  }
  _rightrotation(node) {
    const temp = node.left;
    node.left = temp.right;
    if (temp.right) {
      temp.right.parent = node;
    }
    temp.right = node;
    temp.parent = node.parent;
    node.parent = temp;
    if (temp.parent) {
      if (temp.parent.left === node) {
        temp.parent.left = temp;
      } else if (temp.parent.right === node) {
        temp.parent.right = temp;
      }
    }
    this._updateHeight(node);
    this._updateHeight(temp);
    return temp;
  }
  _leftrightrotation(node) {
    node.left = this._leftrotation(node.left);
    return this._rightrotation(node);
  }
  _rightleftrotation(node) {
    node.right = this._rightrotation(node.right);
    return this._leftrotation(node);
  }
  _findmin(node = this.root) {
    let currentnode = node;
    while (currentnode && currentnode.left) {
      currentnode = currentnode.left;
    }
    return currentnode;
  }
  _getnodeheight(node) {
    if (!node) return -1;
    return node.height;
  }
  _getbalancefactor(node) {
    const leftsubtreeheight = this._getnodeheight(node.left);
    const rightsubtreeheight = this._getnodeheight(node.right);
    return leftsubtreeheight - rightsubtreeheight;
  }
  levelOrderTraversal() {
    // Create an empty array to store the traversed nodes
    const temp = [];
    // Create an array to keep track of the current level of nodes
    const queue = [];

    // If the tree has a root, add it to the queue
    if (this.root) {
      queue.push(this.root);
    }

    // Keep traversing the tree while there are nodes in the queue
    while (queue.length) {
      // Create an array to store the nodes of the current level
      const subTemp = [];
      // Store the number of nodes in the current level
      const len = queue.length;

      // Iterate through the current level of nodes
      for (let i = 0; i < len; i += 1) {
        // Dequeue the first node in the queue
        const node = queue.shift();
        // Push the node's value to the subTemp array
        subTemp.push(node.value);
        // If the node has a left child, add it to the queue
        if (node.left) {
          queue.push(node.left);
        }
        // If the node has a right child, add it to the queue
        if (node.right) {
          queue.push(node.right);
        }
      }

      // Push the subTemp array to the temp array
      temp.push(subTemp);
    }
    // Return the final temp array
    return temp;
  }
}

const tr = new AvlTree();
tr.insert(21);
tr.insert(26);
tr.insert(30);
tr.insert(9);
tr.insert(4);
tr.insert(14);
tr.insert(28);
tr.insert(18);
tr.insert(15);
tr.insert(10);
tr.insert(2);
tr.insert(3);
tr.insert(7);
console.log(tr.levelOrderTraversal());
