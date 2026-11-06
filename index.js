function maskify(cc) {
  let count = cc.length;
  if (count > 4) {
    firstPart = "#".repeat(count - 4);
    lastPart = cc.slice(count - 4, count);
    return `${firstPart}${lastPart}`;
  } else {
    return cc;
  }
}

console.log(maskify("4556364607935616"));
console.log(maskify("616"));
