function findShort(s) {
  return Math.min(...s.split(" ").map((x) => x.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones I",
  ),
);
