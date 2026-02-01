const start = document.getElementById("start");
const game = document.getElementById("game");
const questions = document.getElementById("questions");
const final = document.getElementById("final");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const questionTitle = document.getElementById("questionTitle");
const optionsContainer = document.getElementById("options");

let currentQuestion = 0;

const gameQuestions = [
  {
    question: "One thing I like about you the most is",
    correct: "Your energy",
    options: [
      "Your energy",
      "The way you dress",
      "Your sense of humour",
      "How organised you are"
    ]
  },
  {
    question: "A memory of ours that I will always cherish is",
    correct: "I cannot pick one because there are so many",
    options: [
      "Our first conversation",
      "That one late night call",
      "I cannot pick one because there are so many",
      "The first time we met"
    ]
  },
  {
    question: "One physical feature of yours that I fell for is",
    correct: "Your hair",
    options: [
      "Your smile",
      "Your eyes",
      "Your hair",
      "The way you carry yourself"
    ]
  }
];

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
  loadQuestion();
});

function loadQuestion() {
  const q = gameQuestions[currentQuestion];
  questionTitle.textContent = q.question;
  optionsContainer.innerHTML = "";

  q.options.forEach(option => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = option;

    div.addEventListener("click", () => {
      if (option === q.correct) {
        currentQuestion++;
        if (currentQuestion < gameQuestions.length) {
          loadQuestion();
        } else {
          celebrate();
          setTimeout(() => {
            game.style.display = "none";
            questions.classList.remove("hidden");
          }, 1500);
        }
      }
    });

    optionsContainer.appendChild(div);
  });
}

function celebrate() {
  confetti({
    particleCount: 140,
    spread: 90,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    confetti({
      particleCount: 100,
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
