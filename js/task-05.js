// const input = document.querySelector("input#name-input");
// console.log(input);

// const output = document.querySelector("span#name-output");
// console.log(output);

const refs = {
input :document.querySelector("input#name-input"),
output: document.querySelector("span#name-output"),
}
// console.log(refs.input, refs.output);
// console.log(refs.output.textContent);

refs.input.addEventListener('input', onImputChange);

function onImputChange(event) {
    refs.output.textContent = event.currentTarget.value;
// console.log(refs.output.textContent);
    if (event.currentTarget.value === '') {
       refs.output.textContent = 'Anonymous'; 
    };
}
