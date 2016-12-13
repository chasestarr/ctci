const List = require('./00_list.js');

function removeDups(list) {
  const memo = {};
  let current = list.head;
  memo[current.value] = 1; // add first value to memo

  while (current.next) {
    const value = current.next.value;
    if (memo[value]) {
      current.next = current.next.next;
    } else {
      memo[value] = 1;
    }
    current = current.next;
  }

  return list;
}

let l = new List();
l.add(1);
l.add(2);
l.add(3);
l.add(2);
l.add(4);
l.print();

console.log('===========');

removeDups(l);
l.print();