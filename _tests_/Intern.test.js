const Intern = require("../lib/Intern");

test("getName()", () => {
  const emp = new Intern("Bob", 1111, "bob@hotmail.com");
  expect(emp.getName()).toBe("Bob");
});
