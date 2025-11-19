const options = document.getElementById('options');
const optionWindow = document.getElementById('optionWindow');
const optionContent = document.getElementById('optionContent');

const closeBtn = document.getElementById('closeBtn');
const closeBtn2 = document.getElementById('closeBtn2');

const darkModeToggle = document.getElementById('mode');
const qrCodeOverlay = document.getElementById('qrCodeOverlay');

closeBtn.addEventListener('click', () => {
    optionContent.classList.toggle("slide-out-top");
    setTimeout(() => {
        optionWindow.classList.toggle("hidden");
        optionContent.classList.toggle("slide-in-top");
        optionContent.classList.toggle("slide-out-top");
    }, 150);
});

if (closeBtn2) {
    closeBtn2.addEventListener('click', () => {
        const qrOverlay = document.getElementById('qrCodeOverlay');
        const qrWindow = document.getElementById('qrCodeWindow');

        if (qrOverlay) qrOverlay.classList.add('hidden');
        qrWindow.classList.toggle("scale-in-center");

        if (qrWindow) {
            Array.from(qrWindow.children).forEach(child => {
                if (!child.classList.contains('closeBtn') && child.tagName !== 'H1') {
                    child.remove();
                }
            });
        }
    });
}

qrCodeOverlay.addEventListener('click', (e) => {
    if (e.target === qrCodeOverlay) {
        const qrOverlay = document.getElementById('qrCodeOverlay');
        const qrWindow = document.getElementById('qrCodeWindow');

        if (qrOverlay) qrOverlay.classList.add('hidden');
        qrWindow.classList.toggle("scale-in-center");

        if (qrWindow) {
            Array.from(qrWindow.children).forEach(child => {
                if (!child.classList.contains('closeBtn') && child.tagName !== 'H1') {
                    child.remove();
                }
            });
        }
    }
});


options.addEventListener('click', () => {
    optionWindow.classList.toggle("hidden");
    optionContent.classList.toggle("slide-in-top");
});

optionWindow.addEventListener('click', (e) => {
    if (e.target === optionWindow) {
        optionContent.classList.toggle("slide-out-top");
        setTimeout(() => {
            optionWindow.classList.toggle("hidden");
            optionContent.classList.toggle("slide-in-top");
            optionContent.classList.toggle("slide-out-top");
        }, 150);
    }
});

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle("darkmode");
    darkModeToggle.src = document.body.classList.contains("darkmode") ? "images/sun.png" : "images/moon.png";
    setMode(document.body.classList.contains("darkmode") ? "dark" : "light");
});
function getMode() {
    return localStorage.getItem("mode");
}
function setMode(mode) {
    localStorage.setItem("mode", mode);
}
function loadMode() {
    const mode = getMode();
    if (mode === "dark") {
        document.body.classList.add("darkmode");
        darkModeToggle.src = "images/sun.png";
    } else {
        document.body.classList.remove("darkmode");
        darkModeToggle.src = "images/moon.png";
    }
}
loadMode();

const buttons = document.querySelectorAll('.grid-item')
const result = document.getElementById('result');
const diddy = document.getElementById('diddy');

const audio = document.getElementById('audio');
audio.volume = 0.05;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonContent = button.innerHTML
        if (buttonContent == "C") {
            result.innerHTML = "";
            return;
        }
        if (buttonContent == "=") {
            result.innerHTML = "67"
            setTimeout(() => {
                diddy.classList.toggle("hidden")
                diddy.classList.toggle("fade-in")

                audio.pause();
                const audio2 = document.getElementById('audio2');
                audio2.volume = 0.05;
                audio2.play();

            }, 100);

            return;
        }
        result.innerHTML = result.innerHTML + buttonContent;
    });
});