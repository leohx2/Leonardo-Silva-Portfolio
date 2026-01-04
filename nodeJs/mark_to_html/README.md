# Markdown to HTML Converter (CLI)

A custom Command Line Interface (CLI) tool built from scratch in **Node.js** to convert Markdown files into HTML. 

**Educational Project:** This parser was built entirely with **Vanilla JavaScript (Node.js)** without relying on any external parsing libraries (like `marked` or `markdown-it`). The goal was to understand data manipulation, file streams, and parser logic "under the hood."

## Features

* **Zero Dependencies:** Built using only native Node.js modules (`fs`, `process`).
* **State Machine Architecture:** Uses a custom class to manage parsing context and file pointers.
* **Recursive Parsing:** Supports infinitely nested lists (Ordered & Unordered) using recursion.
* **ES Modules:** Written using modern `.mjs` syntax.
* **Basic syntax Markdown Support:**
    * Headers (H1 - H6)
    * Formatting (**Bold**, *Italic*, ***Both***)
    * Lists (Ordered & Unordered with nesting)
    * Images & Links
    * Code Blocks & Inline Code
    * Horizontal Rules (`---`, `***`, `___`)
    * Character Escaping
    * [Markdown guide org](https://www.markdownguide.org/basic-syntax/)

## Prerequisites

* **Node.js** (Version 14\+ recommended for ESM support).

## Installation & Usage

1.  **Clone the repository:**<br>
    ``
    git clone https://github.com/leohx2/Leonardo-Silva-Portfolio.git && 
    cd nodeJs/mark-to-html/
    ``
    
2.  **Run the converter:**<br>
    Pass the source file and the destination file as arguments<br>
    ``
    node mark_to_html.mjs MD_FILE_NAME.md DESTINATION_FILE_NAME.html
    ``

3.  **Check the result:**<br>
    Open `DESTINATION_FILE_NAME.html` in your browser to see the converted output.

## Project Architecture

The project is modularized to separate concerns, keeping the main loop clean:

* `mark_to_html.mjs`: Entry point. Contains the main loop and the `MdData` class (State Management).
* `convert_header.mjs`: Parses headers (`#`) and manages hierarchy.
* `convert_list.mjs`: Handles complex list logic, using **recursion** for nesting (`<ul>`/`<ol>`).
* `convert_link.mjs`: Parses both links (`[text](url)`) and images (`![alt](url)`).
* `convert_code.mjs`: Manages code blocks (fenced or indented) and inline code styles.
* `handle_asterisk.mjs`: Centralizes logic for **Bold**, *Italic*, and Horizontal Rules (`***`, `---`, `___`).
* `convert_escaping.mjs`: Handles character escaping (e.g., `*`) to prevent syntax conflicts.
* `convert_paragraph_and_linebreak.mjs`: Controls text flow, ensuring correct `<p>` and `<br>` placement.

## Technical Highlights

### The "Context Object" Pattern
Instead of passing strings between functions, the project uses a single class instance (`MdData`) passed by reference. This allows different modules to read and modify the global parsing state (current index, file buffer, active paragraphs) efficiently.

### Recursive List Handling
Parsing nested lists is one of the hardest parts of Markdown. This project detects indentation levels and calls the list parser recursively to generate valid nested HTML (`<ul>` inside `<li>`).

## Author

**Leonardo Rosendo Silva** *Backend Student & Frontend Developer*

**Feel free to checkout my website [silvaleonardo.dev](https://silvaleonardo.dev)**

---
*Built for educational purposes as part of my backend development portfolio.*

**Note: I am implementing the basic syntax from the [Markdown guide org](https://www.markdownguide.org/basic-syntax/), and I'm not taking into consideration alternative syntax**