import fs from "node:fs";

function convertHeader(mdData) {
  let h_size = 0;

  while (mdData.content[mdData.index] === "#") {
    h_size++;
    mdData.index++;
  }

  fs.appendFileSync(mdData.fileToWrite, `<h${h_size}>`);
  while (mdData.content[mdData.index] != "\n" && mdData.content[mdData.index]) {
    fs.appendFileSync(mdData.fileToWrite, mdData.content[mdData.index]);
    mdData.index++;
  }
  fs.appendFileSync(mdData.fileToWrite, `</h${h_size}>`);
}

export default convertHeader;
