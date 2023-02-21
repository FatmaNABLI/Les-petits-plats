let newRecipes = recipes;
let ulIngredients = document.getElementById("liste_ingredients");
let ulTags = document.getElementById("liste_tags");
//Remplissage liste ingredients
getIngredients(newRecipes).forEach(ingredient => {
    let li = document.createElement("li");
    li.innerHTML = ingredient;
    li.addEventListener("click" ,e => {
        createtag(li.textContent, "ingredients")
        console.log(li.textContent);
    })
    ulIngredients.appendChild(li);

   
})
function createtag(contenu , type){
    let li = document.createElement("li");
    li.innerHTML = contenu;
    li.classList.add(type);
    ulTags.appendChild(li);
    let i = document.createElement("i");
    i.classList.add("fas","fa-times");
    i.addEventListener("click", e => {
        e.target.parentElement.remove();
    });
    li.append(i);
}
function displayData() {
  

    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        document.getElementById("recipes").appendChild(recipeCardDOM);
    });
}


document.querySelectorAll(".tag").forEach(tag => tag.addEventListener("click",e => {

    console.log(e.target);
    //e.target.lastChild.style.display = "block";
}));

displayData();