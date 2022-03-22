const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

const teamArray = [];

console.log("Welcome to the Team Profile Generator!");
question1();
function question1() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "intro",
        message: "What type of employee would you like to add?",
        choices: ["Manager", "Intern", "Engineer"],
      },
    ])
    .then((results) => {
      switch (results.intro) {
        case "Manager":
          managerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        case "Engineer":
          engineerQuestions();
          break;
        default:
          question1();
      }
    });
}

function managerQuestions() {
  console.log("ask manager questions");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your managers id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your managers email?",
      },
      {
        type: "input",
        name: "office",
        message: "What is your managers office number?",
      },
    ])
    .then((manager) => {
      teamArray.push(
        new Manager(manager.name, manager.id, manager.email, manager.office)
      );
      //   console.log(teamArray);
      finalQuestion();
    });
}
function internQuestions() {
  console.log("ask intern questions");
}
function engineerQuestions() {
  console.log("ask engineer questions");
}

function finalQuestion() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "userConfirm",
        message: "Would you like to add another employee to the list?",
      },
    ])
    .then(({ userConfirm }) => {
      if (userConfirm) question1();
      else console.log("the end", teamArray);
    });
}
