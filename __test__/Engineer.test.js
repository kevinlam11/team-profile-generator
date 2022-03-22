const Engineer = require("../lib/Engineer");

const testEngineer = new Engineer(
  "Tina",
  "fake id 2",
  "tina@tina.com",
  "tinagithub"
);

test("can get engineer github", () => {
  expect(testEngineer.github).toBe("tinagithub");
  expect(testEngineer.getGithub()).toBe("tinagithub");
});

test("can get engineer role", () => {
  expect(testEngineer.role).toBe("Engineer");
  expect(testEngineer.getRole()).toBe("Engineer");
});
