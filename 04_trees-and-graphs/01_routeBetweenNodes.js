
function route(node, target) {
  let output = false;
  const seed = Math.random() * 10000;

  function recurse(n, t) {
    if (output || n.visited === seed) return; // already visited, break

    n.visited = seed; // set visited flag to random seed

    if (n === t) {
      return output = true; // base case if route found
    }

    for (let i = 0; i < node.children.length; i++) {
      recurse(n.children[i], t); // recurse over children
    }
  }

  recurse(node, target);
  return output;
}