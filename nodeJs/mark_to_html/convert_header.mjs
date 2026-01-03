import fs from "node:fs";

function convertHeader(mdData) {
  let h_size = 0;

  while (mdData.contentIndex === "#") {
    h_size++;
    mdData.index++;
  }

  if (mdData.contentIndex != " ") {
    // If we are here, we know that there is no title, just a regular paragraph
    if (!mdData.inParagraph) {
      mdData.openParagraph();
    }
    mdData.appendFile(`${"#".repeat(h_size)}`);
    mdData.index--;
    return;
  }

  // Here we know that we're writingle and title, so we need to close the paragraph tag, if it's opened
  if (mdData.inParagraph) mdData.closeParagraph();

  mdData.appendFile(
    `<h${h_size} ${h_size < 3 ? "style=margin-bottom:0px" : ""}>`
  );

  while (mdData.contentIndex != "\n" && mdData.contentIndex) {
    mdData.appendFile(mdData.contentIndex);
    mdData.index++;
  }
  mdData.appendFile(`</h${h_size}>`);
  if (h_size < 3) mdData.appendFile(`<hr >`);

  // making sure the index is in the write position, since the "while loop" will always go one more than necessary
  // do our logic when using this function in other loops
  mdData.index--;
}

export default convertHeader;
