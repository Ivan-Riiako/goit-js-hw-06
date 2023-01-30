const refs = {
  input: document.querySelector("input#font-size-control"),
  output: document.querySelector("span#text"),
};

refs.input.addEventListener("input", onImputChange);

function onImputChange(event) {
  // console.log(refs.input.value);
  // console.log(event.currentTarget.value);
  // console.log(refs.input.dataset.length);

  if (event.currentTarget.value.length === refs.input.dataset.length) {
    refs.input.className = "valid";
  } else {
    refs.input.className = "invalid";
  }
}
