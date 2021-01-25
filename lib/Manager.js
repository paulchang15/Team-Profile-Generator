const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  static questions() {
    return Employee.questions().concat(
        {
          type: "input",
          name: "office",
          message: "What is the office number of the employee?"
        }
    )
  };
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
