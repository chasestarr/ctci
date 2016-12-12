function stringRotation(a, b) {
  const concatted = b + b;
  return !!concatted.includes(a);
}

console.log(stringRotation('waterbottle', 'erbottlewat'));
