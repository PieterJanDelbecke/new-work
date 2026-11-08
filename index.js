function getSum(a, b) {
  const [x, y] = [a, b].sort((a, b) => a - b);
  const arr = [];
  for (let i = x; i <= y; i++) {
    arr.push(i);
  }
  return arr.reduce((sum, x) => sum + x, 0);
}

console.log(getSum(0, -1));
console.log(getSum(-1, 2));
console.log(getSum(2, 2));
