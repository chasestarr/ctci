const List = require('../02_linked-lists/00_List.js');

class Queue {
  constructor() {
    this.storage = new List();
  }

  enqueue(v) {
    this.storage.add(v);
  }

  dequeue() {
    return this.storage.removeHead();
  }

  peek() {
    return this.storage.head.value.count;
  }
}

class shelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.counter = 0;
  }

  enqueue(v) {
    v.count = this.counter;
    this.counter++;

    if (v.type === 'dog') this.dogs.enqueue(v);
    if (v.type === 'cat') this.cats.enqueue(v);
  }

  dequeueAny() {
    if (this.dogs.peek() < this.cats.peek()) {
      return this.dequeueDog();
    } else {
      return this.dequeueCat();
    }
  }

  dequeueCat() {
    return this.cats.dequeue().value;
  }

  dequeueDog() {
    return this.dogs.dequeue().value;
  }
}

let s = new shelter();
s.enqueue({ type: 'dog', name: 'spike' });
s.enqueue({ type: 'dog', name: 'spot' });
s.enqueue({ type: 'dog', name: 'rover' });
s.enqueue({ type: 'cat', name: 'garfield' });
s.enqueue({ type: 'cat', name: 'felix' });
s.enqueue({ type: 'cat', name: 'sylvester' });

console.log(s.dequeueAny().name);
console.log(s.dequeueCat().name);
console.log(s.dequeueDog().name);