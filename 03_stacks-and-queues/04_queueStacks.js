const Stack = require('./00_stack.js');

class queue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(v) {
    this.inbox.push(v);
  }

  dequeue() {
   if (!this.outbox.size()) {
     while (this.inbox.size()) {
       this.outbox.push(this.inbox.pop());
     }
   }

   return this.outbox.pop();
  }
}

let q = new queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q);