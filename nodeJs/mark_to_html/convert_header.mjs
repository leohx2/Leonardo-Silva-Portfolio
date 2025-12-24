import fs from "node:fs";

function convertHeader(mdData) {
  let h_size = 0;

  while (mdData.content[mdData.index] === "#") {
    h_size++;
    mdData.index++;
  }

  if (mdData.content[mdData.index] != " ") {
    fs.appendFileSync(mdData.fileToWrite, `${"#".repeat(h_size)}`);
    mdData.index--;
    return;
  }

  fs.appendFileSync(
    mdData.fileToWrite,
    `<h${h_size} ${h_size < 3 ? "style=margin-bottom:0px" : ""}>`
  );

  while (mdData.content[mdData.index] != "\n" && mdData.content[mdData.index]) {
    fs.appendFileSync(mdData.fileToWrite, mdData.content[mdData.index]);
    mdData.index++;
  }
  fs.appendFileSync(mdData.fileToWrite, `</h${h_size}>`);
  if (h_size < 3) fs.appendFileSync(mdData.fileToWrite, `<hr >`);

  // making sure the index is in the write position, since the "while loop" will always go one more than necessary
  // do our logic when using this function in other loops
  mdData.index--;
}

export default convertHeader;
