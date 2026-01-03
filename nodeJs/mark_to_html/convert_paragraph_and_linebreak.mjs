import fs from "node:fs";
import { isInArray } from "./convert_list.mjs";

function writeParagraph(mdData, mode) {
  if (!mdData.inParagraph && mode === "default" && mdData.contentIndex != "\n")
    mdData.openParagraph();

  fs.appendFileSync(mdData.fileToWrite, mdData.contentIndex);

  if (mdData.inParagraph) {
    if (
      (mdData.contentIndex === "\n" &&
        mdData.content[mdData.index + 1] === "\n") ||
      !mdData.content[mdData.index + 1]
    )
      mdData.closeParagraph();
  }
}

export { writeParagraph };
