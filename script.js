const container = document.querySelector(".container");
const dot = document.querySelector(".dot");
const scoreEl = document.querySelector("#score");
let score = 0;
let x = 0;
let y = 0;
let speed = 10;

function moveDot() {
    x += speed * (Math.random() - 0.5);
    y += speed * (Math.random() - 0.5);

    if (x < 0) {
        x = 0;
    } else if (x > container.clientWidth - dot.offsetWidth) {
        x = container.clientWidth - dot.offsetWidth;
    }

    if (y < 0) {
        y = 0;
    } else if (y > container.clientHeight - dot.offsetHeight) {
        y = container.clientHeight - dot.offsetHeight;
    }

    dot.style.transform = `translate(${x}px, ${y}px)`;
}

function updateScore() {
    score++;
    scoreEl.textContent = score;
}

dot.addEventListener("click", () => {
    updateScore();
    dot.classList.add("clicked");
    setTimeout(() => {
        dot.classList.remove("clicked");
    }, 500);
    speed += 5;
    x = Math.random() * (container.clientWidth - dot.offsetWidth);
    y = Math.random() * (container.clientHeight - dot.offsetHeight);
});

setInterval(moveDot, 50);
