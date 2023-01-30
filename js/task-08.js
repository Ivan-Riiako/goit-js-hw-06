const refs = {
  form: document.querySelector("form.login-form"),
};
refs.form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert('Все поля должны быть заполнены!');
  }

    // console.log(`email: ${email.value}, Password: ${password.value}`);
    console.log(event.currentTarget.elements.email.value);
    console.log(event.currentTarget.elements.password.value);

    
  event.currentTarget.reset();
}
