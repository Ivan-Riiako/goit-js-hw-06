const refs = {
  input: document.querySelector("input#font-size-control"),
  spanText: document.querySelector("span#text"),
};
refs.input.addEventListener("input", onImputChange);
 let inputCurrentValue = refs.input.value;
refs.spanText.style.fontSize='16px';

  
let spanTextFontSize = Number(refs.spanText.style.fontSize.replace("px", ""));

function onImputChange(event) {
  const changeValue = event.currentTarget.value;

  if (changeValue > inputCurrentValue) {
    spanTextFontSize += 1;
    refs.spanText.style.fontSize = `${spanTextFontSize}px`;
  } else if (spanTextFontSize > 0 && changeValue < inputCurrentValue) {
    spanTextFontSize -= 1;
    refs.spanText.style.fontSize = `${spanTextFontSize}px`;
  }
    inputCurrentValue = changeValue;
}