class BST {
  constructor() {
    this._root = null;
  }

  add (v) {
    if (!this._root) {
      this._root = new node(v);
      return;
    }

    let current = this._root;
    while (current) {
      // left path
      if (v < current.value) {
        if (!current.left) {
          current.left = new node(v);
          return;
        }

        current = current.left;
      }

      // right path
      if (v > current.value) {
         if (!current.right) {
          current.right = new node(v);
          return;
        }

        current = current.right;
      }
    }
  }

  contains (v) {

  }

  remove (v) {

  }

  dft (n = this._root) {
    if (!n) return;
    // in-order
    this.dft(n.left);
    console.log(n.value);
    this.dft(n.right);
  }
}

class node {
  constructor (v) {
    this.value = v;
    this.left = null;
    this.right = null;
  }
}

module.exports = BST;