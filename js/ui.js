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