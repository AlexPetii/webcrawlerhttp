const { crawlPage } = require("./crawl.js");

function main() {
  if (process.argv.length < 3) {
    console.log("no website provided");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("a lot of website provided");
    process.exit(1);
  }
  const baseURL = process.argv[2];

  console.log(`start crawl ${baseURL}`);
  crawlPage(baseURL);
}

main();
