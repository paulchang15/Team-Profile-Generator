const Engineer = require("../lib/Engineer");

test("getName()", () => {
  const emp = new Engineer("Bob", 1111, "bob@hotmail.com");
  expect(emp.getName()).toBe("Bob");
});
