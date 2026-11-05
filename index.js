function XO(str) {
  let x = 0;
  let o = 0;
  const arr = str.toLowerCase().split("");
  arr.forEach((letter) => {
    if (letter === "x") x++;
    if (letter === "o") o++;
  });
  return x === o ? true : false;
}

console.log(XO("xo"));
console.log(XO("xO"));
console.log(XO("xxxoo"));
console.log(XO("xxOo"));
