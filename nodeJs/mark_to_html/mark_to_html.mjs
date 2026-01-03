import convertHeader from "./convert_header.mjs";
import { argv } from "node:process";
import fs from "node:fs";
import handle_asterisk from "./handle_asterisk.mjs";
import { convertList } from "./convert_list.mjs";
import convertLinkAndImage from "./convert_link.mjs";
import {
  breakLine,
  writeParagraph,
} from "./convert_paragraph_and_linebreak.mjs";
class MdData {
  constructor(content, index, fileToWrite) {
    this.content = content;
    this.index = index;
    this.fileToWrite = fileToWrite;

    // Inform if we're currently in an existent paragraph, then we can decide if we wanna add the <p>, </p> or do nothing
    this.inParagraph = false;
  }

  //Getter to know what is the current content[index]
  get contentIndex() {
    return this.content[this.index];
  }

  openParagraph() {
    fs.appendFileSync(this.fileToWrite, `<p>`);
    this.inParagraph = !this.inParagraph;
  }

  closeParagraph() {
    fs.appendFileSync(this.fileToWrite, `</p>`);
    this.inParagraph = !this.inParagraph;
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
    case "[":
      convertLinkAndImage(mdData, "link");
      break;
    case "!":
      // Use the same logic as convertLink but index get incresead by 1 to skip the "!" char
      if (mdData.content[mdData.index + 1] === "[") {
        mdData.index++;
        convertLinkAndImage(mdData, "image");
        break;
      }
    case " ":
    case "<": {
      breakLine(mdData);
      break;
    }
    default:
      writeParagraph(mdData, mode);
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
      writeHTML(mdData, "default");
    //Finish the HTML body
    fs.appendFileSync(mdData.fileToWrite, "</body></html>");
  } catch (err) {
    console.log(err);
  }
};

main();

// TODO:
// Code Blocks
// Escaping Characters

// DONE:
// Line Breaks - DONE
// Paragraph - DONE
// Images - DONE
// Headings - DONE
// Bold - DONE
// Italic - DONE
// Bold & Italic - DONE
// Ordered lists - DONE
// Unordered lists - DONE
// Horizontal Rules - DONE
// Links - DONE
