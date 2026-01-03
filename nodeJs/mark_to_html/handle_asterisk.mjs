import fs from "node:fs";
import { convertList } from "./convert_list.mjs";

// Checking if it's well formated. In case the user types "***something" I need to write
// "***something" and not <strong>something</strong>, because there's no asterisk in the end.
function check_asterisk(mdData, asterisk_qtd) {
  let counter = mdData.index;
  let asterisk_counter = 0;

  // reads the file until fins another *
  while (mdData.content[counter] != "*" && mdData.content[counter]) counter++;

  // If there's no *, means the user forgot to close the syntax.
  // Or, if there's a \n before the *, means the user is probably using a <hr> now and forgot to close the syntax
  if (
    !mdData.content[counter] ||
    mdData.content[counter - 1] == "\n" ||
    mdData.content[counter - 1] == " "
  )
    return false;

  while (mdData.content[counter] == "*") {
    counter++;
    asterisk_counter++;
    if (asterisk_counter == asterisk_qtd) return true;
  }

  return asterisk_counter == asterisk_qtd;
}

function handle_asterisk(mdData, mode) {
  let asterisk_counter = 0;
  let finish_as = "";

  while (mdData.contentIndex === "*" && mdData.content) {
    asterisk_counter++;
    mdData.index++;
  }

  // Handle horizontal rule
  if (
    asterisk_counter >= 3 &&
    (mdData.contentIndex === "\n" || !mdData.contentIndex)
  ) {
    //We need to close the paragraph tag, if it's opened
    if (mdData.inParagraph) mdData.closeParagraph();
    mdData.appendFile("<hr>");
    mdData.index--;
    return;
  }

  if (!check_asterisk(mdData, asterisk_counter)) {
    //We need to open the paragraph tag, if there's no opened tag
    if (!mdData.inParagraph && mode === "default") mdData.openParagraph();
    mdData.appendFile("*");
    mdData.index -= asterisk_counter;
    return;
  }

  // Handle italic, bold or both
  if (asterisk_counter === 1) {
    if (mdData.contentIndex === " ") {
      // goes back to the asterisk position
      mdData.index--;
      if (mode === "insideAList") {
        mdData.appendFile(mdData.contentIndex);
        return;
      }
      convertList(mdData, "unorderedList");
      return;
    }
    mdData.appendFile("<em>");
    finish_as = "</em>";
  } else if (asterisk_counter === 2) {
    mdData.appendFile("<strong>");
    finish_as = "</strong>";
  } else if (asterisk_counter >= 3) {
    mdData.appendFile("<strong><em>");
    finish_as = "</em></strong>";
  }

  while (mdData.contentIndex != "*") {
    mdData.appendFile(mdData.contentIndex);
    mdData.index++;
  }
  mdData.appendFile(finish_as);
  mdData.index += asterisk_counter - 1;
}

export default handle_asterisk;
