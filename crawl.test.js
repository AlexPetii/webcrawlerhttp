const { normalaizeURL } = require("./crawl");
const { test, expect } = require("@jest/globals");

test("normalaizeURL strip protocol", () => {
  const input = "https://blog.boot.dev/path";
  const actual = normalaizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("normalaizeURL trailing slash", () => {
  const input = "https://blog.boot.dev/path/";
  const actual = normalaizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("normalaizeURL capitals", () => {
  const input = "https://BLOG.boot.dev/path";
  const actual = normalaizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});

test("normalaizeURL strip hhtp", () => {
  const input = "http://blog.boot.dev/path";
  const actual = normalaizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});
