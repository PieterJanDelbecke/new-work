function validatePIN(pin) {
  const regex = /\D/g;
  const result = pin.match(regex);
  if (!result) {
    return pin.length === 4 || pin.length === 6 ? true : false;
  } else {
    return false;
  }
}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));
console.log(validatePIN("-1.234"));
console.log(validatePIN(".234"));
