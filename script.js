/* Music control */
const music = document.getElementById("bgMusic");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

/* Quiz Logic */
function showQuiz() {
    document.getElementById("quiz").classList.remove("hidden");
}

function correctAnswer() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("gift").classList.remove("hidden");
}

/* Floating hearts */
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}, 400);
