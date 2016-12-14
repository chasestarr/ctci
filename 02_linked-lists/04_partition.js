const List = require('./00_List.js');

function partition(list, pivot) {
  let storage = new List();
  let current = list.head;
  while (current) {
    if (current.value >= pivot) {
      storage.add(current.value);
    } else {
      storage.addToHead(current.value);
    }

    current = current.next;
  }

  return storage;
}

List.prototype.addToHead = function(value) {
  this.head = { value: value, next: this.head };
  if (!this.head.next) {
    this.tail = this.head;
  }
}

let l = new List();
l.add(3);
l.add(5);
l.add(8);
l.add(5);
l.add(10);
l.add(2);
l.add(1);
l.print();
console.log('===========');
let parted = partition(l, 5);
parted.print();