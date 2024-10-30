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
    let jscode = "<script>" + jsEditor.getValue() + "<\/script>";
    let previewWindow = document.querySelector("#result").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlcode + csscode + jscode);
    previewWindow.close();
    document.getElementById('result').classList.add('backcor');
});

// Download button functionality
document.querySelector('#download-btn').addEventListener("click", function () {
    const projectName = prompt("Enter a name for your project:", "my-project");
    if (projectName) {
        const zip = new JSZip();
        zip.file("index.html", htmlEditor.getValue());
        zip.file("styles.css", cssEditor.getValue());
        zip.file("script.js", jsEditor.getValue());
        
        zip.generateAsync({type:"blob"}).then(function(content) {
            saveAs(content, projectName + ".zip");
        });
    }
});

// Font size control
let fontSize = 17;
document.querySelector('#increase-font').addEventListener("click", function () {
    fontSize++;
    updateFontSize();
});

document.querySelector('#decrease-font').addEventListener("click", function () {
    fontSize = Math.max(fontSize - 1, 12);
    updateFontSize();
});

function updateFontSize() {
    htmlEditor.getWrapperElement().style.fontSize = fontSize + "px";
    cssEditor.getWrapperElement().style.fontSize = fontSize + "px";
    jsEditor.getWrapperElement().style.fontSize = fontSize + "px";
    htmlEditor.refresh();
    cssEditor.refresh();
    jsEditor.refresh();
}

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

// Loading screen functionality
window.addEventListener('load', function() {
    var preloader = document.getElementById("loading");
    preloader.style.display = 'none';
});

// Full screen toggle
document.querySelector('.full-screen').addEventListener("click", function () {
    document.querySelector('.code').classList.toggle('hide');
    document.querySelector('.full-screen').classList.toggle('colorr');
});

// Layout direction toggle
document.querySelector('.rig-scee').addEventListener("click", function () {
    document.querySelector('.code-editor').classList.toggle('right');
    document.querySelector(".rotatee").classList.toggle('rotss');
});

// Accessibility improvements
document.querySelector('#run-btn').setAttribute('aria-label', 'Run Code');
document.querySelector('.full-screen').setAttribute('aria-label', 'Toggle Full Screen');
document.querySelector('.rig-scee').setAttribute('aria-label', 'Toggle Layout Direction');
document.querySelector('#download-btn').setAttribute('aria-label', 'Download Project');
document.querySelector('#increase-font').setAttribute('aria-label', 'Increase Font Size');
document.querySelector('#decrease-font').setAttribute('aria-label', 'Decrease Font Size');

// Add keyboard support for buttons
const buttons = document.querySelectorAll('button, .full-screen, .rig-scee');
buttons.forEach(button => {
    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.click();
        }
    });
});