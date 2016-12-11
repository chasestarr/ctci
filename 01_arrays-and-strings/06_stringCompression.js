function compress(str) {
  let output = '';

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (!str[i + 1] || str[i] !== str[i + 1]) {
      output += str[i] + count;
      count = 0;
    }
  }
  return output.length < str.length ? output : str;
}

const s1 = ['aaabcccccddd', 'a3b1c5d3'];
const s2 = ['zzzziiiiizz', 'z4i5z2'];
const s3 = ['abc', 'abc'];

if (compress(s1[0]) !== s1[1]) console.log('should compress trivial case');
if (compress(s2[0]) !== s2[1]) console.log('should compress with repeating characters');
if (compress(s3[0]) !== s3[1]) console.log('should return original if compress is longer');
