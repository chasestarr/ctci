function isUnique(str) {
  if (!str.length) return null; // fail early if empty string

  const memo = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (memo[char]) return false;
    memo[char] = 1;
  }

  return true;
}

const word1 = 'abcdef';
const word2 = 'abcdeef';

if (!isUnique(word1)) console.log('should return true for unique strings');
if (isUnique(word2)) console.log('should return false for non-unique strings');
if (isUnique('')) console.log('should return null for empty strings');
