/* Music control */
const music = document.getElementById("bgMusic");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

/* Countdown Timer */
const targetDate = new Date("February 14, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "💘 It’s Our Special Day!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s until our moment 💖`;
}, 1000);

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

    setTimeout(() => heart.remove(), 7000);
}, 400);
