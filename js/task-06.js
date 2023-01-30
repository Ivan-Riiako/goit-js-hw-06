const refs = {
  input: document.querySelector("input#validation-input"),
};

refs.input.addEventListener("blur", onImputblur);

function onImputblur(event) {
    // console.log(refs.input.value);
    // console.log(event.currentTarget.value);
    // console.log(refs.input.dataset.length);


    if (event.currentTarget.value.length === refs.input.dataset.length) {
      refs.input.className = "valid";
    } else {
      refs.input.className = "invalid";
    }
  
}