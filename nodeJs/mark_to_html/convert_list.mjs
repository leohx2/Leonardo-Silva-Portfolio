import fs from "node:fs";
import { writeHTML } from "./mark_to_html.mjs";

function isInArray(content, list) {
  for (let i = 0; i < list.length; i++) {
    if (content === list[i]) return true;
  }

  return false;
}

function rightSyntax(mdData, mode, listType) {
  const unorderedListChar = ["+", "*", "-"];

  if (mode === "firstList") {
    if (listType === "orderedList")
      return (
        !isNaN(mdData.contentIndex) &&
        mdData.content[mdData.index + 1] === "." &&
        mdData.content[mdData.index + 2] === " "
      );
    else
      return (
        isInArray(mdData.contentIndex, unorderedListChar) &&
        mdData.content[mdData.index + 1] === " "
      );
  } else {
    if (listType === "orderedList")
      return (
        mdData.contentIndex === "." && mdData.content[mdData.index + 1] === " "
      );
    else return mdData.contentIndex === " ";
  }
}

function neastedList(mdData, blankIndexes, listType) {
  const unorderedListChar = ["+", "*", "-"];
  let counter = 2 + blankIndexes;

  if (listType === "orderedList") {
    while (
      !isNaN(mdData.content[mdData.index - 1]) &&
      mdData.content[mdData.index - counter] === " " &&
      counter >= 2
    ) {
      counter--;
    }
  } else {
    while (
      isInArray(mdData.content[mdData.index - 1], unorderedListChar) &&
      mdData.content[mdData.index - counter] === " " &&
      counter >= 2
    ) {
      counter--;
    }
  }

  if (counter < 2) {
    return true;
  }
  return false;
}

function writeLists(mdData, blankIndexes, listType) {
  const unorderedListChar = ["+", "*", "-", " "];

  // Checking if it's a number via isNaN or if it's a unordered list char.
  // isNaN returns false for numbers and special chars like "\n" or " "
  if (listType === "orderedList") {
    while (!isNaN(mdData.contentIndex) && mdData.contentIndex) {
      mdData.index++;
    }
  } else {
    while (
      (isInArray(mdData.contentIndex, unorderedListChar) ||
        mdData.contentIndex === "\n") &&
      mdData.contentIndex
    ) {
      if (
        // Special case, when dealing with * inside a list
        mdData.contentIndex === "*" &&
        isInArray(mdData.content[mdData.index - 2], unorderedListChar)
      ) {
        break;
      }
      mdData.index++;
    }
    // we need to send index one postion behind
    mdData.index--;
  }

  // blankIndexes was created to help to deal with nestead lists. It first check if there's a
  // nestead list by checking if there's "    1. " before it. But if we have 2 neasted lists , we must ignore 8 blanks spaces
  if (neastedList(mdData, blankIndexes, listType)) {
    mdData.appendFile(`${listType === "orderedList" ? "<ol>" : "<ul>"}`);
    writeLists(mdData, blankIndexes + 4, listType);
    mdData.appendFile(`${listType === "orderedList" ? "</ol>" : "</ul>"}`);
  }

  // Skip the "dot" if the sintax is right. Also, find out if the neasted list ended or not.
  if (
    rightSyntax(mdData, "secondaryLists", listType) &&
    neastedList(mdData, blankIndexes - 4, listType)
  ) {
    mdData.index++;
  } else {
    return;
  }

  mdData.appendFile("<li>");
  while (mdData.contentIndex != "\n" && mdData.contentIndex) {
    writeHTML(mdData, "insideAList");
    mdData.index++;
  }
  mdData.appendFile("</li>");

  return writeLists(mdData, blankIndexes, listType);
}

// The list must start with the number 1, according to the provided doc
function convertList(mdData, listType) {
  // Checking the right syntax

  if (rightSyntax(mdData, "firstList", listType)) {
    //We need to close the paragraph tag, if it's opened before we write a list
    if (mdData.inParagraph) mdData.closeParagraph();
    mdData.appendFile(`${listType === "orderedList" ? "<ol>" : "<ul>"}`);
    writeLists(mdData, 0, listType);
    mdData.appendFile(`${listType === "orderedList" ? "</ol>" : "</ul>"}`);

    // make sure the index is in the right position, otherwise it's "one position ahead"
    if (listType === "orderedList") mdData.index--;
  } else {
    //We need to open the paragraph tag, if it's closed before we write the char
    if (!mdData.inParagraph) mdData.openParagraph();
    mdData.appendFile(mdData.contentIndex);
  }
}

export { convertList, isInArray };
