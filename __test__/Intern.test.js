const Intern = require("../lib/Intern");

const testIntern = new Intern(
  "Tina",
  "fake id 2",
  "tina@tina.com",
  "internschool"
);

test("can get intern school", () => {
  expect(testIntern.school).toBe("internschool");
  expect(testIntern.getSchool()).toBe("internschool");
});

test("can get intern role", () => {
  expect(testIntern.role).toBe("Intern");
  expect(testIntern.getRole()).toBe("Intern");
});
