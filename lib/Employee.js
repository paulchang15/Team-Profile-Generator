class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  static questions() {
    return [
        {
          type: "input",
          name: "name",
          message: "What is the name of the employee?"
        },
        {
          type: "input",
          name: "id",
          message: "What is the ID of the employee?"
        },
        {
          type: "input",
          name: "email",
          message: "What is the email of the employee?"
        }
    ]
  }
  
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
