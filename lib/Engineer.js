const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  static questions() {
    return Employee.questions().concat(
        {
          type: "input",
          name: "github",
          message: "What is the github of the employee?"
        }
    )
  };
  getGitHub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
