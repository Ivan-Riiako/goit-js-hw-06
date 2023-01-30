function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  btn: document.querySelector("button.change-color"),
  output: document.querySelector("span.color"),
};
refs.btn.addEventListener("click", onBtnClick);
function onBtnClick(event) {
  // const color = getRandomHexColor();
  // console.log(color);
  
refs.output.textContent = `${color}`;
document.body.style.backgroundColor = `${color}`;

}