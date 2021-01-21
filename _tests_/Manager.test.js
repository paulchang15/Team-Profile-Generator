const Manager = require("../lib/Manager");

test("getName()", () => {
  const emp = new Employee("Bob", 1111, "bob@hotmail.com");
  expect(emp.getName()).toBe("Bob");
});
