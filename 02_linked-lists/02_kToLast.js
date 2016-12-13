const List = require('./00_List.js');

function kToLast(list, k) {
  let current = list.head;
  let runner = getRunner(current, k);

  while (runner) {
    current = current.next;
    runner = runner.next;
  }

  return current;
}

function getRunner(head, k) {
  let current = head;
  for (let i = 0; i < k; i++) {
    if (!current.next) break;

    current = current.next;
  }

  return current;
}

let l = new List();
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.add(5);
l.add(6);
l.add(7);

console.log('==========');

console.log(kToLast(l, 5).value);