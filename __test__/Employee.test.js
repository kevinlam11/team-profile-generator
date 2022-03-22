const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

const testEmployee = new Employee("Bob", "fake id", "bob@bob.com");

test("created an employee object", () => {
  expect(typeof testEmployee).toBe("object");
});

test("can get and set employees name", () => {
  expect(testEmployee.name).toBe("Bob");
  expect(testEmployee.getName()).toBe("Bob");
});

test("can get and set employees id", () => {
  expect(testEmployee.id).toBe("fake id");
  expect(testEmployee.getId()).toBe("fake id");
});

test("can get and set employees email", () => {
  expect(testEmployee.email).toBe("bob@bob.com");
  expect(testEmployee.getEmail()).toBe("bob@bob.com");
});

test("can get employee role", () => {
  expect(testEmployee.role).toBe("Employee");
  expect(testEmployee.getRole()).toBe("Employee");
});
