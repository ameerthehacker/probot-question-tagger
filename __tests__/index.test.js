const isQuestion = require("../question");

test("Return true for valid questions", () => {
  expect(isQuestion("Why this should be used")).toBeTruthy();
  expect(isQuestion("What is this project")).toBeTruthy();
  expect(isQuestion("How to fix this shit")).toBeTruthy();
  expect(isQuestion("Does this thing work")).toBeTruthy();
  expect(isQuestion("Whether this thing is correct or not")).toBeTruthy();
});

test("Return false for non question statements", () => {
  expect(isQuestion("This is the way this shit should be done!")).toBeFalsy();
});
