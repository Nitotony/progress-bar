
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  const lines = document.querySelectorAll(".line");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentStep = 0;

  function updateProgress() {
    steps.forEach((step, index) => {
      if (index <= currentStep) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });

    lines.forEach((line, index) => {
      if (index < currentStep) {
        line.style.backgroundColor = "#4caf50";
      } else {
        line.style.backgroundColor = "#ddd";
      }
    });
  }

  prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateProgress();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateProgress();
    }
  });

  updateProgress();
});
