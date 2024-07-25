const { sortPages } = require("./report.js");
const { test, expect } = require("@jest/globals");

test("sortPages", () => {
  const input = {
    "https://wlagslane.dev/path": 1,
    "https://wlagslane.dev": 3,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://wlagslane.dev", 3],
    ["https://wlagslane.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});

test("sortPages 5 pages", () => {
  const input = {
    "https://wlagslane.dev/path": 1,
    "https://wlagslane.dev": 3,
    "https://wlagslane.dev/path2": 5,
    "https://wlagslane.dev/path3": 2,
    "https://wlagslane.dev/path4": 9,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://wlagslane.dev/path4", 9],
    ["https://wlagslane.dev/path2", 5],
    ["https://wlagslane.dev", 3],
    ["https://wlagslane.dev/path3", 2],
    ["https://wlagslane.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});
