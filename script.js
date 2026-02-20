function nextPage(page) {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1s ease";
    setTimeout(() => {
        window.location.href = page;
    }, 1000);
}

window.onload = function () {
    const music = document.getElementById("bgMusic");
    if (music) {
        music.volume = 0.5;
        music.play().catch(() => {});
    }

    // floating hearts
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "🤍";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (6 + Math.random() * 5) + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }, 800);
};
function checkAccess() {
    var input = document.getElementById("passwordInput").value;

    // 🔐 CHANGE THIS TO YOUR EXACT PROPOSE DATE
    var correctPassword = "08-02-2026";

    if (input === correctPassword) {
        nextPage("chapter1.html");
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
}


