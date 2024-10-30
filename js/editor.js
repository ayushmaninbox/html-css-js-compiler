// Initialize CodeMirror editors
const htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-code'), {
    lineNumbers: true,
    mode: "xml",
    theme: "dracula",
    tabSize: 4
});

const cssEditor = CodeMirror.fromTextArea(document.getElementById('css-code'), {
    lineNumbers: true,
    mode: "css",
    theme: "dracula",
    tabSize: 4
});

const jsEditor = CodeMirror.fromTextArea(document.getElementById('js-code'), {
    lineNumbers: true,
    mode: "javascript",
    theme: "dracula",
    tabSize: 4,
});

// Run button functionality
document.querySelector('#run-btn').addEventListener("click", function () {
    let csscode = "<style>" + cssEditor.getValue() + "</style>";
    let htmlcode = htmlEditor.getValue();
    let jscode = "<script>" + jsEditor.getValue() + "</script>";
    let previewWindow = document.querySelector("#result").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlcode + csscode + jscode);
    previewWindow.close();
    document.getElementById('result').classList.add('backcor');
});

// Initialize editors with some default content
htmlEditor.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
</head>
<body>
    <h1>Welcome to DevComp!</h1>
    <p>Start coding here.</p>
</body>
</html>`);

cssEditor.setValue(`body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    color: #2c3e50;
}`);

jsEditor.setValue(`console.log("Hello from DevComp!");`);