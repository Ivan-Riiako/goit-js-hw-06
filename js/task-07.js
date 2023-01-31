const refs = {
  input: document.querySelector("input#font-size-control"),
  spanText: document.querySelector("span#text"),
};
refs.input.addEventListener("input", onImputChange);
// Var 1
refs.input.value = 16;
function onImputChange(event) {
  let changeValue = event.currentTarget.value;
  refs.spanText.style.fontSize = `${changeValue}px`;
}
// Var 2
//  let inputCurrentValue = refs.input.value;
// refs.spanText.style.fontSize='16px';

  
// let spanTextFontSize = Number(refs.spanText.style.fontSize.replace("px", ""));
// // console.log(spanTextFontSize);


// function onImputChange(event) {
//   const changeValue = event.currentTarget.value;

//   if (changeValue > inputCurrentValue) {
//     spanTextFontSize += 1;
//     refs.spanText.style.fontSize = `${spanTextFontSize}px`;
//   } else if (spanTextFontSize > 0 && changeValue < inputCurrentValue) {
//     spanTextFontSize -= 1;
//     refs.spanText.style.fontSize = `${spanTextFontSize}px`;
//   }
//     inputCurrentValue = changeValue;
//     // console.log(spanTextFontSize);
// }