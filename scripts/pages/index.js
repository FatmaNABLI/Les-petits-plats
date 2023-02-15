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