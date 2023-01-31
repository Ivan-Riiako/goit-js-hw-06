function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  btn: document.querySelector("button.change-color"),
  output: document.querySelector("span.color"),
};
refs.btn.addEventListener("click", () => {
  const color = getRandomHexColor();
  refs.output.textContent = `${color}`;
  document.body.style.backgroundColor = `${color}`;
});

// refs.btn.addEventListener("click", onBtnClick);

// function onBtnClick() {
//   const color = getRandomHexColor();
// refs.output.textContent = `${color}`;
// document.body.style.backgroundColor = `${color}`;
// }