const steps = document.querySelectorAll(".step");
const lines = document.querySelectorAll(".line");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentStep = 0;

function updateSteps() {
  steps.forEach((step, index) => {
    if (index <= currentStep) {
      step.classList.add("active");
      step.textContent = "&#10003;";
    } else {
      step.classList.remove("active");
      step.textContent = "&#10005;";
    }
  });

  lines.forEach((line, index) => {
    if (index < currentStep) {
      line.classList.add("active");
    } else {
      line.classList.remove("active");
    }
  });

  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === steps.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateSteps();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateSteps();
  }
});

updateSteps();
