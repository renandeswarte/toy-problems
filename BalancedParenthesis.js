function isBalanced (string) {
  var bal = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      bal++;
    } else if (string[i] === ')') {
      // If no opened parenthesis to close then string is unbalanced
      if (bal === 0) return false;
      bal--;
    }
  }
  return bal === 0;
}