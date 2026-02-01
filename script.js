const start = document.getElementById("start");
const game = document.getElementById("game");
const questions = document.getElementById("questions");
const final = document.getElementById("final");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const sentences = document.querySelectorAll(".sentence");
const blanks = document.querySelectorAll(".blank");
const choices = document.querySelectorAll(".choice");

let currentStep = 0;

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
    const currentBlank = blanks[currentStep];
    const correctAnswer = currentBlank.dataset.answer;

    if (choice.textContent === correctAnswer) {
      currentBlank.textContent = correctAnswer;
      currentStep++;

      if (sentences[currentStep]) {
        sentences[currentStep].classList.remove("hidden");
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
    spread: 90,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 120,
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
