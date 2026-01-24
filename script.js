// Title glow follows mouse
const title = document.getElementById("title");

document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    title.style.textShadow = `
        0 0 25px rgba(255,255,255,0.9),
        ${x / 8}px ${y / 8}px 35px rgba(255,255,255,0.6)
    `;
});

// Sunrise → noon color shift
function updateTitleColor() {
    const hour = new Date().getHours();
    let color;

    if (hour < 12) {
        // morning warm tones
        color = `rgb(${255 - hour * 8}, ${200 + hour * 4}, 150)`;
    } else {
        // bright midday
        color = "white";
    }

    title.style.color = color;
}

setInterval(updateTitleColor, 60000);
updateTitleColor();
