function oneAway(a, b) {
  if (!a.length || !b.length) return null;
  if (Math.abs(a.length - b.length) > 1) return false;

  if (a.length === b.length) return replace(a, b);
  if (a.length < b.length) {
    return insert(a, b);
  } else {
    return insert(b, a);
  }
}

function replace(a, b) {
  let edit = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (edit) return false;
      edit = true;
    }
  }

  return true;
}

function insert(a, b) {
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] !== b[j]) {
      if (i !== j) return false;
      j++;
    } else {
      i++;
      j++;
    }
  }

  return true;
}

const w1 = ['pale', 'ple'];
const w2 = ['pale', 'pales'];
const w3 = ['pale', 'bale'];
const w4 = ['pale', 'bake'];
const w5 = ['pale', 'bakers'];

if (!oneAway(w1[0], w1[1])) console.log('should return true for off by 1 length');
if (!oneAway(w2[0], w2[1])) console.log('should return true for off by 1 length');
if (!oneAway(w3[0], w3[1])) console.log('should return true for off by 1 letter');
if (oneAway(w4[0], w4[1])) console.log('should return false for off by 2 changes');
if (oneAway(w5[0], w5[1])) console.log('should return false for off by more than 2 letters');
