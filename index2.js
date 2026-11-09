// Optional Chaining

const person = {
  name: "Pieter-Jan",
  age: 45,
  vehicle: {
    year: 2010,
    colour: "green",
  },
};

const result = person.vehicle.colour ?? "red";

console.log(result);
