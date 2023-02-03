const gradientContainer = document.querySelector(".subtitle");
const firstColorInput = document.querySelector(".color1");
const secondColorInput = document.querySelector(".color2");
const body = document.getElementById("root");
const rootCss = document.querySelector(":root");

function setGradient() {
  rootCss.style.setProperty("--beginGradient", firstColorInput.value);
  rootCss.style.setProperty("--endGradient", secondColorInput.value);
  gradientContainer.textContent = body.style.background;
}

firstColorInput.addEventListener("input", setGradient);

secondColorInput.addEventListener("input", setGradient);
