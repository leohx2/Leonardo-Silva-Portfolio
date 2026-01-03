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
import { convertCode, converCodeIndent } from "./convert_code.mjs";
import escapingChar from "./convert_escaping.mjs";
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

  writeFile(string) {
    fs.writeFileSync(this.fileToWrite, string);
  }

  appendFile(string) {
    fs.appendFileSync(this.fileToWrite, string);
  }

  openParagraph() {
    this.appendFile(`<p>`);
    this.inParagraph = !this.inParagraph;
  }

  closeParagraph() {
    this.appendFile(`</p>`);
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
      if (mode === "insideAList") mdData.appendFile(mdData.contentIndex);
      else convertList(mdData, "orderedList");
      break;
    case "_":
      if (
        mdData.content[mdData.index + 1] === "_" &&
        mdData.content[mdData.index + 2] === "_"
      ) {
        mdData.appendFile("<hr>");
        mdData.index += 2;
        break;
      }
    case "-":
      if (
        mdData.content[mdData.index + 1] === "-" &&
        mdData.content[mdData.index + 2] === "-"
      ) {
        mdData.appendFile("<hr>");
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
    case " ": {
      if (
        mdData.contentIndex === " " &&
        mdData.content[mdData.index + 1] == " " &&
        mdData.content[mdData.index + 2] == " " &&
        mdData.content[mdData.index + 3] == " "
      ) {
        mdData.appendFile(
          `<code style="display:block; width:100vw; padding:1rem; color:white; background-color:#0E0E0E; border-radius:5px">`
        );
        mdData.index += 4;
        converCodeIndent(mdData);
        mdData.index--;
        mdData.appendFile("</code>");
        break;
      }
    }
    case "<": {
      breakLine(mdData);
      break;
    }
    case "`": {
      convertCode(mdData);
      break;
    }
    case "\\": {
      escapingChar(mdData, mode);
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
    mdData.writeFile("<html><body>");
    for (mdData.index; mdData.index < mdData.content.length; mdData.index++)
      writeHTML(mdData, "default");
    //Finish the HTML body
    mdData.appendFile("</body></html>");
  } catch (err) {
    console.log(err);
  }
};

main();
