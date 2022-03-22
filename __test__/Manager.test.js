const Manager = require("../lib/Manager");

const testManager = new Manager("Tina", "fake id 2", "tina@tina.com", "12345");

test("can get manager office number", () => {
  expect(testManager.officeNumber).toBe("12345");
  expect(testManager.getOfficeNumber()).toBe("12345");
});

test("can get manager role", () => {
  expect(testManager.role).toBe("Manager");
  expect(testManager.getRole()).toBe("Manager");
});
