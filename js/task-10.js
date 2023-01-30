function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector("input"),
  containerBox: document.querySelector("div#boxes"),
  btnCreateBoxes: document.querySelector("button[data-create]"),
  btnDestroyBoxes: document.querySelector("button[data-destroy]"),
};
refs.btnCreateBoxes.addEventListener("click", createBoxes);
refs.btnDestroyBoxes.addEventListener("click", destroyBoxes);


function createBoxes(amount) {
  amount = Number(refs.input.value);
  const amountBoxes = [];
  for (let i = 0; i < amount; i += 1){
    const box = document.createElement("img");
    let boxSize = 30+ (i*10);
box.style.height = `${boxSize}px`;
box.style.width = `${boxSize}px`;
let randomColor = getRandomHexColor();
box.style.backgroundColor = `${randomColor}`;
amountBoxes.push(box)
  }

  refs.containerBox.append(...amountBoxes);
}

function destroyBoxes(){
refs.containerBox.textContent = '';
};




