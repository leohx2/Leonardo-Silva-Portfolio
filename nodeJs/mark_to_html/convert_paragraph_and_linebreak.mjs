import fs from "node:fs";

function writeParagraph(mdData, mode) {
  if (!mdData.inParagraph && mode === "default" && mdData.contentIndex != "\n")
    mdData.openParagraph();

  mdData.appendFile(mdData.contentIndex);

  if (mdData.inParagraph) {
    if (
      (mdData.contentIndex === "\n" &&
        mdData.content[mdData.index + 1] === "\n") ||
      !mdData.content[mdData.index + 1]
    )
      mdData.closeParagraph();
  }
}

// If the current char is a blank space, the next is also a blank space and the 3rd is a break line, than we add
// a <br> too
function breakLine(mdData) {
  if (
    mdData.contentIndex === " " &&
    mdData.content[mdData.index + 1] === " " &&
    mdData.content[mdData.index + 2] === "\n"
  ) {
    mdData.appendFile("<br>");
    mdData.index += 2;
  } else if (
    mdData.contentIndex === "<" &&
    mdData.content[mdData.index + 1] === "b" &&
    mdData.content[mdData.index + 2] === "r" &&
    mdData.content[mdData.index + 3] === ">"
  ) {
    mdData.appendFile("<br>");
    mdData.index += 3;
  } else {
    mdData.appendFile(mdData.contentIndex);
  }
}

export { writeParagraph, breakLine };
