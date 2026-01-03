import { isInArray } from "./convert_list.mjs";
import { writeParagraph } from "./convert_paragraph_and_linebreak.mjs";

function escapingChar(mdData, mode) {
  const escapeChars = [
    "\\",
    "`",
    "*",
    "_",
    "{",
    "}",
    "[",
    "]",
    "<",
    ">",
    "(",
    ")",
    "#",
    "+",
    "-",
    ".",
    "!",
    "|",
  ];

  if (isInArray(mdData.content[mdData.index + 1], escapeChars)) {
    mdData.index++;
    writeParagraph(mdData, mode);
  }
}

export default escapingChar;
