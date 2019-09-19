const functions = require("./functions");

// toBe
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not toBe
test("Add 2 + 2 NOT to equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test("User should be Shiv Sharma", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Shiv",
    lastName: "Sharma"
  });
});

// LessThan
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Reg Exp
test("There is no I in team", () => {
  expect("teami").not.toMatch(/I/);
});

// Array
test("Admin should be in usernames", () => {
  const usernames = ["shiv", "shankar", "sharma"];
  expect(usernames).toContain("admin");
});
