"use strict";

const sumtv2 = (n) => {
  return n.reduce((o, n) => o + n);
};

const sumv3 = (n) => n.reduce((o, n) => o + n);

console.log(sumv3([2, 3, 4]));

const revString = (str) => str.split("").reverse().join("");

console.log(revString("Al Sakib Ayon"));

const fname = "Sakib";
const lname = "Ayon";

const person_es6 = {
  fname,
  lname
};

console.log(person_es6);

const person = {
  fn: "Al Sakib",
  ln: "Ayon",
  age: 25,
  sex: "Male"
};

const { fn, ln, ...rest } = person;
console.log(fname, lname, rest);

Object.values(rest).forEach((item) => {
  console.log(item);
});

function getData() {
  const country = "Bangladesh";
  const capital = "Dhaka";

  return { country, capital };
}

const details = getData();

console.log(details);

const { country, capital } = details;

console.log(country, capital);

// const anotherPerson = person;
// anotherPerson.fn = "Ariyan";

const anotherPerson = Object.assign({}, person);

console.log(anotherPerson);
