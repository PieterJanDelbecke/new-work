function printerError(s) {
  const regex = /[a-m]/g;
  let found = s.match(regex);
  found = !found ? [] : found;
  return `${s.length - found.length}/${s.length}`;
}

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("zzz"));
console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"),
);
