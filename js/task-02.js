const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrLi = []

ingredients.forEach(ingredient => {
  const ingridientLi = document.createElement("li");
  ingridientLi.textContent = ingredient;
  ingridientLi.className = "item";
  ingridientLi.classList.add('diablo');
arrLi.push(ingridientLi);
  
})

console.log(arrLi);
document.querySelector("ul").append(...arrLi);