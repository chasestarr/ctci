function palindrome(str) {
  if (!str.length) return null;

  const memo = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!memo[char]) {
      memo[char] = true;
    } else {
      memo[char] = !memo[char];
    }
  }

  let count = 0;
  for (let char in memo) {
    if (memo[char]) count++
  }

  return count <= 1;
}

const str1 = 'aabbccdd';
const str2 = 'aabbccx';
const str3 = 'abcdefabc';

if (!palindrome(str1)) {
  console.log('should return true for even-length palindrome');
}

if (!palindrome(str2)) {
  console.log('should return true for odd-length palindrome');
}

if (palindrome(str3)) {
  console.log('should return false for non-palindrome');
}
