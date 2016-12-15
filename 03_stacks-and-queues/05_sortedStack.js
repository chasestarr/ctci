const Stack = require('./00_stack.js');

Stack.prototype.peek = function() {
  return this.storage[this.storage.length - 1];
}

Stack.prototype.sort = function() {
  let temp = new Stack();
  while (this.size()) {
    let t = this.pop();
    while (temp.size() && temp.peek() < t) {
      this.push(temp.pop());
    }
    temp.push(t);
  }

  this.storage = temp.storage;
}

let s = new Stack();
s.push(4);
s.push(1);
s.push(3);
s.push(6);
s.push(5);

s.sort();
console.log(s);
console.log(s.peek());