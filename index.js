const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const htmlGenerator = require("./src/htmlGenerator");

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
      finalQuestion();
    });
}
function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your interns name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your intern id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your intern email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is your intern school?",
      },
    ])
    .then((intern) => {
      teamArray.push(
        new Intern(intern.name, intern.id, intern.email, intern.school)
      );

      finalQuestion();
    });
}
function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your engineer name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your engineer id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your engineer email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your engineer github username?",
      },
    ])
    .then((engineer) => {
      teamArray.push(
        new Engineer(
          engineer.name,
          engineer.id,
          engineer.email,
          engineer.github
        )
      );

      finalQuestion();
    });
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
      var outputPath = path.resolve(__dirname, "dist");

      if (userConfirm) question1();
      else {
        if (!fs.existsSync(outputPath)) {
          fs.mkdir(outputPath);
        }

        fs.writeFileSync(
          path.join(outputPath, "myTeam.html"),
          htmlGenerator(teamArray),
          "utf-8"
        );
      }
    });
}
