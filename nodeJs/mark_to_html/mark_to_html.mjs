import convertHeader from "./convert_header.mjs";
import { argv } from "node:process";
import fs from "node:fs";
import handle_asterisk from "./handle_asterisk.mjs";
import convertList from "./convert_list.mjs";

class MdData {
  constructor(content, index, fileToWrite) {
    this.content = content;
    this.index = index;
    this.fileToWrite = fileToWrite;
  }

  //Getter to know what is the current content[index]
  get contentIndex() {
    return this.content[this.index];
  }
}

export function writeHTML(mdData, mode) {
  switch (mdData.contentIndex) {
    case "#":
      convertHeader(mdData);
      break;
    case "*":
      handle_asterisk(mdData, mode);
      break;
    case "1":
      if (mode === "insideAList")
        fs.appendFileSync(mdData.fileToWrite, mdData.contentIndex);
      else convertList(mdData, "orderedList");
      break;
    case "_":
      if (
        mdData.content[mdData.index + 1] === "_" &&
        mdData.content[mdData.index + 2] === "_"
      ) {
        fs.appendFileSync(mdData.fileToWrite, "<hr>");
        mdData.index += 2;
        break;
      }
    case "-":
      if (
        mdData.content[mdData.index + 1] === "-" &&
        mdData.content[mdData.index + 2] === "-"
      ) {
        fs.appendFileSync(mdData.fileToWrite, "<hr>");
        mdData.index += 2;
        break;
      }
    case "+":
      convertList(mdData, "unorderedList");
      break;
    default:
      fs.appendFileSync(mdData.fileToWrite, mdData.contentIndex);
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
    for (mdData.index; mdData.index < mdData.content.length; mdData.index++)
      writeHTML(mdData, "regular");
    //Finish the HTML body
    fs.appendFileSync(mdData.fileToWrite, "</body></html>");
  } catch (err) {
    console.log(err);
  }
};

main();

// TODO:
// paragraph
// Links
// Images
// Line Breaks
// Code Blocks
// Escaping Characters

// DONE:
// Headings - DONE
// Bold - DONE
// Italic - DONE
// Bold & Italic - DONE
// Ordered lists - DONE
// Unordered lists - DONE
// Horizontal Rules - DONE
