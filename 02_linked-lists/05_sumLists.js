const List = require('./00_List.js');

function sum(l1, l2) {
  return reduce(l1) + reduce(l2);
}

function reduce(list) {
  let s = '';
  let current = list.head;

  while (current) {
    s += current.value;
    current = current.next;
  }

  return parseInt(s);
}

let l1 = new List();
l1.add(6);
l1.add(1);
l1.add(7);

let l2 = new List();
l2.add(2);
l2.add(9);
l2.add(5);

console.log(sum(l1, l2));