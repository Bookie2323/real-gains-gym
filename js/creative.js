function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const result = document.getElementById("bmiResult");

  if (!weight || !height) {
    result.textContent = "Please enter valid weight and height.";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  result.textContent = `Your BMI is ${bmi}`;
}

const quotes = [
  "Push yourself because no one else is going to do it for you.",
  "Don’t limit your challenges. Challenge your limits.",
  "Sweat is just fat crying.",
  "Discipline is doing it even when you don’t feel like it."
];
let index = 0;
setInterval(() => {
  document.getElementById("quote").textContent = quotes[index];
  index = (index + 1) % quotes.length;
}, 4000);
