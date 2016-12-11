function urlify(str) {
  return str.trim().split(' ').join('%20');
}

const str1 = 'Mr John Smith';
const res1 = 'Mr%20John%20Smith';
const str2 = ' Mrs Jane Doe ';
const res2 = 'Mrs%20Jane%20Doe';

if (urlify(str1) !== res1) {
  console.log('should complete simple solution');
}

if (urlify(str2) !== res2) {
  console.log('should remove trailing spaces');
}
