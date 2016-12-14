const Stack = require('./00_stack.js');

Stack.prototype.push = function(v) {
  if (!this.size()) {
    this.storage.push({ value: v, min: v});
  } else {
    const min = this.storage[this.size() - 1].min;
    if (v < min) {
      this.storage.push({ value: v, min: v });
    } else {
      this.storage.push({ value: v, min: min });
    }
  }
};

Stack.prototype.min = function() {
  if (!this.size()) return null;

  return this.storage[this.size() - 1].min;
}

let s = new Stack();

s.push(5);
s.push(4);
s.push(3);
s.push(6);
s.push(7);

console.log(s.min());