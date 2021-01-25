
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");


// what type of employee to add first Man, intern, or just quit.  If quit, generate HTML and quit.

// afterwards create Manager , Intern, Engineer
class ProfileQuestions {
  constructor() {
    this.employees = []
  }

  questions() {
    return inquirer
    .prompt({
      type: "list",
      name: "role",
      message: "What is the role of this Employee?",
      choices: ["Manager", "Engineer", "Intern"]
    })
    .then((data) => {
        if (data.role === "Manager") {
            return Manager.questions();
        }
        if (data.role === "Engineer") {
            return Engineer.questions();
        }
        if (data.role === "Intern") {
            return Manager.questions();
        }
    }) 
    .then((questions) => {
        return inquirer
        .prompt(questions).then((data) => {
            console.log(data);
            return data;
        })
    })
  }

  createEmployees() {
     return inquirer
      .prompt({
        type: "confirm",
        name: "confirmAdd",
        message: "Would you like to add an additional employees"
      })
      .then((data) => {

        if (data.confirmAdd) {
          console.log("confirmed");
          return this.questions()
            .then((employee) => {
              this.employees.push(employee)
              return this.createEmployees();
            });
        } else {
          console.log(this.employees);
          return this.employees;
        }
      });
   
  };




  writeToFile(fileContent) {
    return new Promise ((resolve, reject) => {
      fs.writeFile("./dist/profile.html", fileContent, (err) => {
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: "File created!",
        });
      })
    });
  }


}

module.exports = ProfileQuestions;