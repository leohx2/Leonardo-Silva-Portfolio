import fs from "node:fs";

// Checking if it's well formated. In case the user types "***something" I need to write
// "***something" and not <strong>something</strong>, because there's no asterisk in the end.
function check_asterisk(mdData, asterisk_qtd) {
  let counter = mdData.index;
  let asterisk_counter = 0;

  // reads the file until fins another *
  while (mdData.content[counter] != "*" && mdData.content[counter]) counter++;

  // If there's no *, means the user forgot to close the syntax.
  // Or, if there's a \n before the *, means the user is probably using a <hr> now and forgot to close the syntax
  if (!mdData.content[counter] || mdData.content[counter - 1] == "\n")
    return false;

  while (mdData.content[counter] == "*") {
    counter++;
    asterisk_counter++;
    if (asterisk_counter == asterisk_qtd) return true;
  }

  return asterisk_counter == asterisk_qtd;
}

function handle_asterisk(mdData) {
  let asterisk_counter = 0;
  let finish_as = "";

  while (mdData.content[mdData.index] === "*" && mdData.content) {
    asterisk_counter++;
    mdData.index++;
  }

  // Handle horizontal rule
  if (
    asterisk_counter === 3 &&
    (mdData.content[mdData.index] === "\n" || !mdData.content[mdData.index])
  ) {
    fs.appendFileSync(mdData.fileToWrite, "<hr>");
    return;
  }

  // TODO, verify if it's a valid operation
  if (!check_asterisk(mdData, asterisk_counter)) {
    // fs.appendFileSync(mdData.fileToWrite, `${"*".repeat(asterisk_counter)}`);
    fs.appendFileSync(mdData.fileToWrite, "*");
    mdData.index -= asterisk_counter;
    return;
  }

  // Handle italic, bold or both
  if (asterisk_counter === 1) {
    fs.appendFileSync(mdData.fileToWrite, "<em>");
    finish_as = "</em>";
  } else if (asterisk_counter === 2) {
    fs.appendFileSync(mdData.fileToWrite, "<strong>");
    finish_as = "</strong>";
  } else if (asterisk_counter >= 3) {
    fs.appendFileSync(mdData.fileToWrite, "<strong><em>");
    finish_as = "</em></strong>";
  }

  while (mdData.content[mdData.index] != "*") {
    fs.appendFileSync(mdData.fileToWrite, mdData.content[mdData.index]);
    mdData.index++;
  }
  fs.appendFileSync(mdData.fileToWrite, finish_as);
  mdData.index += asterisk_counter - 1;
}

export default handle_asterisk;
