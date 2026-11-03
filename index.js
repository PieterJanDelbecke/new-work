function descendingOrder(n) {
  num = n
    .toString()
    .split("")
    .map((x) => +x)
    .sort((a, b) => b - a)
    .join("");
  return +num;
}

console.log(descendingOrder(1021));
console.log(descendingOrder(0));
