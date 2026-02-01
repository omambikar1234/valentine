const yes = document.getElementById("yes");
const no = document.getElementById("no");

const start = document.getElementById("start");
const game = document.getElementById("game");
const questions = document.getElementById("questions");
const final = document.getElementById("final");

const sentences = document.querySelectorAll(".sentence");
const blanks = document.querySelectorAll(".blank");
const choices = document.querySelectorAll(".choice");

let currentSentence = 0;

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
});

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const blank = blanks[currentSentence];
    if (choice.textContent === blank.dataset.answer) {
      blank.textContent = choice.textContent;
      currentSentence++;

      if (sentences[currentSentence]) {
        sentences[currentSentence].classList.remove("hidden");
      } else {
        celebrate();
        setTimeout(() => {
          game.style.display = "none";
          questions.classList.remove("hidden");
        }, 1500);
      }
    }
  });
});

function celebrate() {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.4 }
    });
  }, 400);
}

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
