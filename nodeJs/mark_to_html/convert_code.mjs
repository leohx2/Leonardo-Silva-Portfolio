function converCodeIndent(mdData) {
  while (mdData.contentIndex && mdData.content[mdData.index] != "\n") {
    mdData.appendFile(mdData.contentIndex);
    mdData.index++;
  }

  if (mdData.contentIndex === "\n") {
    mdData.appendFile("<br>");
    mdData.index++;
  }

  if (
    mdData.contentIndex === " " &&
    mdData.content[mdData.index + 1] == " " &&
    mdData.content[mdData.index + 2] == " " &&
    mdData.content[mdData.index + 3] == " "
  ) {
    // 3rd way, with at least 4 spaces
    mdData.index += 4;
    converCodeIndent(mdData);
  }
}

function convertCode(mdData) {
  if (!mdData.inParagraph) mdData.openParagraph();
  mdData.appendFile(
    `<code style="padding:0.1rem 0.4rem; border-radius:5px ;color:white; background-color:#0E0E0E">`
  );

  // first way, with ``
  if (mdData.contentIndex === "`" && mdData.content[mdData.index + 1] === "`") {
    mdData.index += 2;
    while (
      (mdData.contentIndex != "`" || mdData.content[mdData.index + 1] != "`") &&
      mdData.contentIndex
    ) {
      mdData.appendFile(mdData.contentIndex);
      mdData.index++;
    }
    mdData.index++;
  } else if (
    mdData.contentIndex === "`" &&
    mdData.content[mdData.index + 1] != "`"
  ) {
    // second way, with only one `
    mdData.index++;
    while (mdData.contentIndex != "`" && mdData.contentIndex) {
      mdData.appendFile(mdData.contentIndex);
      mdData.index++;
    }
  }
  mdData.appendFile("</code>");
}

export { convertCode, converCodeIndent };
