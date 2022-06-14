const index = require("./index");

test("dodawanie liczb 2 i 3 daje 5", () => {
  expect(index(2, 3)).toBe(5);
});