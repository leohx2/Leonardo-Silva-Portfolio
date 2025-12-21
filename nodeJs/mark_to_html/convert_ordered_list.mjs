import fs from "node:fs";

function rightSyntax(mdData, mode) {
  if (mode === "firstList")
    return (
      !isNaN(mdData.content[mdData.index]) &&
      mdData.content[mdData.index + 1] === "." &&
      mdData.content[mdData.index + 2] === " "
    );
  else
    return (
      mdData.content[mdData.index] === "." &&
      mdData.content[mdData.index + 1] === " "
    );
}

function neastedList(mdData, blankIndexes) {
  let counter = 2 + blankIndexes;
  while (
    !isNaN(mdData.content[mdData.index - 1]) &&
    mdData.content[mdData.index - counter] === " " &&
    counter >= 2
  ) {
    counter--;
  }
  if (counter < 2) {
    return true;
  }
  return false;
}

function writeLists(mdData, blankIndexes) {
  // Checking if it's a number via isNaN.
  while (!isNaN(mdData.content[mdData.index]) && mdData.content[mdData.index]) {
    mdData.index++;
  }

  // blankIndexes was created to help to deal with nestead lists. It first check if there's a
  // nestead list by checking if there's "    1. " before it. But if we have 3 neasted lists, we must ignore 8 blanks spaces
  if (neastedList(mdData, blankIndexes)) {
    mdData.index--;

    fs.appendFileSync(mdData.fileToWrite, "<ol>");
    writeLists(mdData, blankIndexes + 4);
    fs.appendFileSync(mdData.fileToWrite, "</ol>");
  }

  // Skip the "dot" if the sintax is right. Also, find out if the neasted list ended or not.
  if (
    rightSyntax(mdData, "secondaryLists") &&
    neastedList(mdData, blankIndexes - 4)
  ) {
    mdData.index++;
  } else {
    return;
  }

  fs.appendFileSync(mdData.fileToWrite, "<li>");
  while (mdData.content[mdData.index] != "\n" && mdData.content[mdData.index]) {
    fs.appendFileSync(mdData.fileToWrite, mdData.content[mdData.index]);
    mdData.index++;
  }
  fs.appendFileSync(mdData.fileToWrite, "</li>");

  return writeLists(mdData, blankIndexes);
}

// The list must start with the number 1, according to the provided doc
function convertOrderedList(mdData) {
  // Checking the right syntax
  if (rightSyntax(mdData, "firstList")) {
    fs.appendFileSync(mdData.fileToWrite, "<ol>");
    writeLists(mdData, 0);
    fs.appendFileSync(mdData.fileToWrite, "</ol>");

    // make sure the index is in the right position, otherwise it's "one position ahead"
    mdData.index--;
  } else return;
}

export default convertOrderedList;
