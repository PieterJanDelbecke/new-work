function squareDigits(num) {
  const arr = num
    .toString()
    .split("")
    .map((x) => Math.pow(+x, 2))
    .join("");
  return +arr;
}

console.log(squareDigits(3212));
