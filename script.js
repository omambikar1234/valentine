const yes = document.getElementById("yes");
const no = document.getElementById("no");

const start = document.getElementById("start");
const game = document.getElementById("game");
const questions = document.getElementById("questions");
const final = document.getElementById("final");

let score = 0;
const heart = document.getElementById("heart");
const scoreText = document.getElementById("scoreText");

no.addEventListener("mouseover", () => {
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;
  no.style.transform = `translate(${x}px, ${y}px)`;
});

no.addEventListener("click", () => {
  alert("Wrong answer. Try again.");
});

yes.addEventListener("click", () => {
  start.style.display = "none";
  game.classList.remove("hidden");
  moveHeart();
});

function moveHeart() {
  const area = document.getElementById("gameArea");
  const x = Math.random() * (area.clientWidth - 30);
  const y = Math.random() * (area.clientHeight - 30);
  heart.style.left = x + "px";
  heart.style.top = y + "px";
}

heart.addEventListener("click", () => {
  score++;
  scoreText.textContent = "Score: " + score;
  moveHeart();

  if (score === 3) {
    game.style.display = "none";
    questions.classList.remove("hidden");
  }
});

document.getElementById("submit").addEventListener("click", () => {
  const date = document.getElementById("date").value;
  const activity = document.getElementById("activity").value;
  const person = document.getElementById("person").value;

  const body =
    "Date: " + date + "%0D%0A" +
    "Activity: " + activity + "%0D%0A" +
    "With: " + person;

  window.location.href =
    "mailto:your@email.com?subject=Valentine%20Plan&body=" + body;

  questions.style.display = "none";
  final.classList.remove("hidden");
});
