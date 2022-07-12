function greeter(person) {
  return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);

interface pessoa {
  firstName: string;
  lastName: string;
}

function greeting(person: pessoa) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let usuario = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeter(user);

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greet(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let users = new Student("Jane", "M.", "User");

document.body.textContent = greeter(users);
