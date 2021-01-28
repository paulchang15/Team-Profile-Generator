const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const PageTemplate = require("../src/page-template");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const { create } = require("domain");
const employees = [
  new Manager("Ryan", "1234", "ryanthecoder@hotmail.com", "1234"),
  new Manager("John", "1234", "johntheremcoach@hotmail.com", "12345"),
  new Manager("John", "1234", "johntheremcoach@hotmail.com", "12345"),
];
// what type of employee to add first Man, intern, or just quit.  If quit, generate HTML and quit.
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
// afterwards create Manager , Intern, Engineer

function createTeam() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, PageTemplate(employees), "UTF-8");
}

createTeam();
