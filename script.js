const gradientContainer = document.querySelector(".subtitle");
const firstColorInput = document.querySelector(".color1");
const secondColorInput = document.querySelector(".color2");
const body = document.getElementById("root");
const rootCss = document.querySelector(":root");
const copyBtn = document.querySelector(".copy-btn");

function setGradient() {
  rootCss.style.setProperty("--beginGradient", firstColorInput.value);
  rootCss.style.setProperty("--endGradient", secondColorInput.value);
  typeGradientProperties();
}

function typeGradientProperties() {
  const indexOfRepeat = getComputedStyle(document.body)
    .getPropertyValue("background")
    .indexOf("repeat");
  gradientContainer.textContent = getComputedStyle(document.body)
    .getPropertyValue("background")
    .slice(0, indexOfRepeat);
}

firstColorInput.addEventListener("input", setGradient);

secondColorInput.addEventListener("input", setGradient);

copyBtn.addEventListener("click", () => {
  if (gradientContainer.textContent) {
    navigator.clipboard.writeText(gradientContainer.textContent);
    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
  }
});
