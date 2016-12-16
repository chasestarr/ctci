class treeNode {
  constructor (v) {
    this.value = v;
    this.left = null;
    this.right = null;
  }

  dft () {
    if (this.left) this.left.dft();
    console.log(this.value);
    if (this.right) this.right.dft();
  }
}

function minimalTree(arr) {
  function recurse(a, start, end) {
    if (end < start) return null;

    const mid = Math.floor((start + end) / 2);
    let n = new treeNode(a[mid]);

    n.left = recurse(a, start, mid - 1);
    n.right = recurse(a, mid + 1, end);
    return n;
  }

  return recurse(arr, 0, arr.length - 1);
}

let t = minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
t.dft();
