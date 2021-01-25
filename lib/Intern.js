const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  static questions() {
    return Employee.questions().concat(
        {
          type: "input",
          name: "school",
          message: "What school did the employee attend?"
        }
    );
  };

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
