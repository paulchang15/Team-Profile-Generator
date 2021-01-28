const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const PageTemplate = require("../src/page-template");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const { OutgoingMessage } = require("http");
const employees = [];
// what type of employee to add first Man, intern, or just quit.  If quit, generate HTML and quit.
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
// afterwards create Manager , Intern, Engineer
function questions() {
  inquirer
    .prompt({
      type: "list",
      name: "role",
      message: "What is the role of this Employee?",
      choices: ["Manager", "Engineer", "Intern", "No more team members"],
    })
    .then((data) => {
      if (data.role === "Manager") {
        createManager();
      }
      if (data.role === "Engineer") {
        createEngineer();
      }
      if (data.role === "Intern") {
        createIntern();
      }
      if (data.role === "No more team members") {
        createTeam();
      }
    });
}

questions();
function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the employee?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID of the employee?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the employee?",
      },
      {
        type: "input",
        name: "office",
        message: "What is the office number of the employee?",
      },
    ])
    .then((data) => {
      const manager = new Manager(data.name, data.id, data.email, data.office);
      employees.push(manager);
      console.log(employees);
      questions();
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the employee?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID of the employee?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the employee?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the github of the employee?",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      employees.push(engineer);
      console.log(employees);
      questions();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the employee?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the ID of the employee?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the employee?",
      },
      {
        type: "input",
        name: "school",
        message: "What school did this employee go to?",
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      employees.push(intern);
      console.log(employees);
      questions();
    });
}

function createTeam() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, PageTemplate(employees), "UTF-8");
}
