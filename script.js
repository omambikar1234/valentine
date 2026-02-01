const yes = document.getElementById("yes");
const no = document.getElementById("no");
const card = document.querySelector(".card");
const questions = document.getElementById("questions");
const final = document.getElementById("final");

no.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  no.style.transform = `translate(${x}px, ${y}px)`;
});

no.addEventListener("click", () => {
  alert("Wrong answer. Try again.");
});

yes.addEventListener("click", () => {
  card.style.display = "none";
  questions.classList.remove("hidden");
});

document.getElementById("submit").addEventListener("click", () => {
  questions.style.display = "none";
  final.classList.remove("hidden");
});
