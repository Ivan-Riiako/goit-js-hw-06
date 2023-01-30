const refs = {
  input: document.querySelector("input#validation-input"),
};

refs.input.addEventListener("blur", onImputblur);

function onImputblur(event) {
    // console.log(refs.input.value);
    // console.log(event.currentTarget.value);
    // console.log(refs.input.dataset.length);
    // console.log(event.currentTarget.value.length);

  const checkInputLenght = Number(refs.input.dataset.length);
  const inputLength = event.currentTarget.value.length;
    if (inputLength === checkInputLenght) {
      refs.input.className = "valid";
    } else {
      refs.input.className = "invalid";
    }
  
}