const Employee = require("../lib/Employee");

test("creates an instance", () => {
  const emp = new Employee("Bob", 1111, "bob@hotmail.com");
  expect(typeof emp).toBe("object");
});

test("getName()", () => {
  const emp = new Employee("Bob", 1111, "bob@hotmail.com");
  expect(emp.getName()).toBe("Bob");
});
