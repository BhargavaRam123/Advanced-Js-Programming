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
  _rightrotation() {
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
}
