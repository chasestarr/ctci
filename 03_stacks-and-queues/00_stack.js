class stack {
  constructor() {
    this.storage = [];
  }

  push(v) {
    this.storage.push(v);
  }

  pop() {
    return this.storage.pop();
  }

  size() {
    return this.storage.length;
  }
}

module.exports = stack;