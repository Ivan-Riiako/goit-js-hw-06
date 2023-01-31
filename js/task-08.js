const refs = {
  form: document.querySelector("form.login-form"),
};
refs.form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
  const {elements: { email, password },} = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert('Все поля должны быть заполнены!');
  }
  const user = {
    email:email.value,
    password:password.value,
  };
  console.log(user);

  event.currentTarget.reset();
}
