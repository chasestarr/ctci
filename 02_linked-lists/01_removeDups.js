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

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const node = { value: value, next: null };
    if (!this.head) this.head = node;
    if (this.tail) this.tail.next = node;

    this.tail = node;
  }

  print() {
    let current = this.head;
    console.log(current.value);

    while (current.next) {
      console.log(current.next.value);
      current = current.next;
    }
  }
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