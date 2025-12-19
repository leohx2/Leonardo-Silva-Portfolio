// including the process module
const { argv } = require("node:process");
const fs = require("node:fs");
const fsWrite = require("node:fs");

console.log("start reading...\n");

try {
  // I'm using the synchronous version because I need the content to be
  // fully loaded before the code move on to the next step
  const data = fs.readFileSync(argv[2], "utf-8");

  // Create or erase the content from the file
  fsWrite.writeFileSync(argv[3], "");

  for (let i = 0; i < data.length; i++) {}
} catch (err) {
  console.log(err);
}
