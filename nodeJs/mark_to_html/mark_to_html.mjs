import convertHeader from "./convert_header.mjs";
import { argv } from "node:process";
import fs from "node:fs";
import handle_asterisk from "./handle_asterisk.mjs";

class MdData {
  constructor(content, index, fileToWrite) {
    this.content = content;
    this.index = index;
    this.fileToWrite = fileToWrite;
  }
}

const main = () => {
  console.log("starting conversion...\n");

  try {
    // I'm using the synchronous version because I need the content to be
    // fully loaded before the code move on to the next step
    const mdData = new MdData(fs.readFileSync(argv[2], "utf-8"), 0, argv[3]);

    // Create or erase the content from the file
    fs.writeFileSync(mdData.fileToWrite, "<html><body>");

    for (mdData.index; mdData.index < mdData.content.length; mdData.index++) {
      switch (mdData.content[mdData.index]) {
        // # means there's a header
        case "#":
          convertHeader(mdData);
          break;
        case "*":
          handle_asterisk(mdData);
          break;
        default:
          fs.appendFileSync(mdData.fileToWrite, mdData.content[mdData.index]);
      }
    }

    //Finish the HTML body
    fs.appendFileSync(mdData.fileToWrite, "</body></html>");
  } catch (err) {
    console.log(err);
  }
};

main();

// TODO:
// paragraph
// Line Breaks
// Ordered lists
// Unordered lists
// Escaping Backticks
// Code Blocks
// Horizontal Rules - asterisk handled
// Links
// Images
// Escaping Characters

// DONE:
// Headings - DONE
// Bold - DONE
// Italic - DONE
// Bold & Italic - DONE
