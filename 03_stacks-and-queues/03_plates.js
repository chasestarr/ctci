const Stack = require('./00_stack.js');

class setOfStacks {
  constructor (n) {
    this.storage = [];
    this.max = n;
    this.current = 0;
  }

  push (v) {
    if (!this.storage.length) {
      this.storage.push(new Stack());
    }

    if (this.storage[this.current].size() === this.max) {
      this.current++;
      this.storage[this.current] = new Stack();
    }

    this.storage[this.current].push(v);
  }

  pop () {
    const result = this.storage[this.current].pop();

    if (this.storage[this.current].size() === 0) {
      this.storage[this.current] = null;
      this.current--;
    }

    return result;
  }

  size () {
    let count = 0;
    for (let i = 0; i < this.storage.length; i++) {
      count += storage[i].size();
    }
    return count;
  }
}

let s = new setOfStacks(3);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);

console.log(s.storage);

s.pop();
s.pop();
s.pop();
s.pop();

console.log(s.storage);