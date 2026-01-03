import fs from "node:fs";

class ConvertLinkAux {
  constructor(index) {
    this.auxCounter = index;
    this.linkStartPosition = 0;
    this.titleStartPosition = 0;
    this.placeHolder;
    this.link;
    this.title;
  }
}

function convertLinkAndImage(mdData, type) {
  /**  First of all, we need must confirm if there's an actual link
   * which means me must have an ] followed by a "(" and ")" in the end
   * But, instead looping twice through every char of the link, I will reserve
   * their positions to slice then to a new variable
   */

  const aux = new ConvertLinkAux(mdData.index);

  while (
    mdData.content[aux.auxCounter] &&
    mdData.content[aux.auxCounter] != "]"
  ) {
    if (mdData.content[aux.auxCounter] == '"' && aux.titleStartPosition == 0) {
      aux.placeHolder = mdData.content.slice(mdData.index + 1, aux.auxCounter);
      aux.titleStartPosition = aux.auxCounter + 1;
    } else if (
      mdData.content[aux.auxCounter] == '"' &&
      aux.titleStartPosition > 0
    ) {
      // If the titleStartPosition is not 0 and we found the closing " so,
      // we need to pass this to the title string to hold it
      aux.title = mdData.content.slice(aux.titleStartPosition, aux.auxCounter);
    }
    aux.auxCounter++;
  }

  if (
    mdData.content[aux.auxCounter] === "]" &&
    mdData.content[aux.auxCounter + 1] == "("
  ) {
    // Now that we now we found the "]" and the "(" immediately after we must check for the
    // ")"
    // planceHolder receive the string starting on the first letter after the index,
    // which is currently "["
    if (aux.titleStartPosition === 0)
      aux.placeHolder = mdData.content.slice(mdData.index + 1, aux.auxCounter);
    aux.auxCounter += 2;
    aux.linkStartPosition = aux.auxCounter;

    while (
      mdData.content[aux.auxCounter] &&
      mdData.content[aux.auxCounter] !== ")"
    ) {
      aux.auxCounter++;
    }

    if (mdData.content[aux.auxCounter] === ")") {
      // If we are here, it means we have the whole link
      aux.link = mdData.content.slice(aux.linkStartPosition, aux.auxCounter);
      if (type === "image") {
        fs.appendFileSync(
          mdData.fileToWrite,
          `
          <img src="${aux.link}"  title="${aux.title ? aux.title : ""}"
          alt="${
            aux.placeHolder ? aux.placeHolder : ""
          }" style="max-height:100vh; max-width:100vw"> 
          `
        );
      } else {
        fs.appendFileSync(
          mdData.fileToWrite,
          `
          <a href="${aux.link}" target="_blank" title="${
            aux.title ? aux.title : ""
          }"
          style="text-decoration: none">
          ${aux.placeHolder}
          </a>
          `
        );
      }
      mdData.index = aux.auxCounter;
      return;
    }
  }

  fs.appendFileSync(mdData.fileToWrite, mdData.contentIndex);
}

export default convertLinkAndImage;
