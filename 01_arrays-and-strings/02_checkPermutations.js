// Given two strings, write a method to decide if one is a permutation of the other

function permutation(a, b) {
  if (!a.length || !b.length) return false;
  if (a.length !== b.length) return false;

  const memo = {};
  for (let i = 0; i < a.length; i++) {
    const char = a[i];

    if (memo[char]) {
      memo[char]++;
    } else {
      memo[char] = 1;
    }
  }

  for (let i = 0; i < b.length; i++) {
    const char = b[i];

    if (memo[char] === undefined) return false;
    memo[char]--;

    if (memo[char] < 0) return false;
  }

  return true;
}

if (!permutation('abcde', 'edcba')) {
  console.log('should return true for permutation');
}

if (permutation('abxcde', 'edcba')) {
  console.log('should return false for strings of different lengths');
}

if (permutation('axcde', 'edcba')) {
  console.log('should return false for non-permutations');
}

if (permutation('', '')) {
  console.log('should return false for empty strings');
}
