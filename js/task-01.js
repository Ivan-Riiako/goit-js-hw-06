const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);

[...list.children].forEach(category => {
    const header = category.querySelector("h2");
    console.log(`Category:${header.textContent}`);
    
const amauntItem = category.querySelector("ul").children.length;
console.log(`Elements: ${amauntItem}`);

});

