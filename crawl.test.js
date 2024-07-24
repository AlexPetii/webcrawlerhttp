const { normalaizeURL, getURLsFromHTML } = require("./crawl");
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

test("getURLsFromHTML absolute", () => {
  const inputHTMLBody = `
<html>
    <body>
        <a href="https://blog.boot.dev/"
            Boot.dev Blog
        </a>
    </body>
</html>
  `;

  const inputBaseURL = "https://blog.boot.dev/";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://blog.boot.dev/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML relative", () => {
  const inputHTMLBody = `
  <html>
      <body>
          <a href="/path/"
              Boot.dev Blog
          </a>
      </body>
  </html>
    `;

  const inputBaseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://blog.boot.dev/path/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML relative and absolute", () => {
  const inputHTMLBody = `
    <html>
        <body>
            <a href="https://blog.boot.dev/path1/"
                Boot.dev Blog Path 1
            </a>
            <a href="/path2/"
                Boot.dev Blog Path 2
            </a>
        </body>
    </html>
      `;

  const inputBaseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [
    "https://blog.boot.dev/path1/",
    "https://blog.boot.dev/path2/",
  ];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML invalid", () => {
  const inputHTMLBody = `
    <html>
        <body>
            <a href="invalid"
                Invalid URL
            </a>
        </body>
    </html>
      `;

  const inputBaseURL = "https://blog.boot.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [];
  expect(actual).toEqual(expected);
});
