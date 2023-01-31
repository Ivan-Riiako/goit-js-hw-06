const refs = {
  input: document.querySelector("input#validation-input"),
};

refs.input.addEventListener("blur", onImputblur);

function onImputblur(event) {

  const checkInputLenght = Number(refs.input.dataset.length);
  const inputLength = event.currentTarget.value.length;
  
    if (inputLength === checkInputLenght) {
      event.currentTarget.className = "valid";
    } else {
      event.currentTarget.className = "invalid";
    }
}