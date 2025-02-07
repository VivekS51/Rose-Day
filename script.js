document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "You are the rose of my life!",
        "Every petal of a rose symbolizes love for you.",
        "Roses are red, violets are blue, I'm blessed to have someone like you!",
        "May our love bloom like a beautiful rose!"
    ];
    
    let index = 0;
    const messageBox = document.getElementById("loveMessage");

    setInterval(() => {
        messageBox.style.opacity = "0"; // Fade out
        setTimeout(() => {
            messageBox.innerText = messages[index];
            messageBox.style.opacity = "1"; // Fade in
            index = (index + 1) % messages.length;
        }, 1000);
    }, 3000);

    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("hearts");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    setInterval(createHeart, 500);
});
