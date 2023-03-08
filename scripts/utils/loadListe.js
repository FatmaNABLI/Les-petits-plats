//Remplissage liste ingredients
function remplirListeingredientsByIngred(ingredients){
    ulIngredients.innerHTML = "";
    ingredients.forEach(ingredient => {
        let li = document.createElement("li");
        li.innerHTML = ingredient;
        li.addEventListener("click",e => {
            createTag(li.textContent  + " " , "ingredients");
            //Màj des recettes
            newRecipes = filterRecipesByIngredient(newRecipes, li.textContent);
            displayData(newRecipes);
        })
        ulIngredients.appendChild(li);
    })
}
//Remplissage liste appareils
function remplirListeAppareilsByAppareils(appareils){
    ulAppareils.innerHTML = "";
    sortedAppareils.forEach(apapreil => {
        let li = document.createElement("li");
        li.innerHTML = apapreil;
        li.addEventListener("click",e => {
            createTag(li.textContent  + " " , "appareils");
            //Màj des recettes
            newRecipes = filterRecipesByAppliance(newRecipes, li.textContent);
            displayData(newRecipes);
        })
        ulAppareils.appendChild(li);
    });
}

//Remplissage liste ustensiles
function remplirListeUstensilsByUstens(ustenils){
    ulUstensils.innerHTML = "";
   sortedUstensils.forEach(ustensil => {
        let li = document.createElement("li");
        li.innerHTML = ustensil;
        li.addEventListener("click",e => {
            createTag(li.textContent  + " " , "ustensils");
            //Màj des recettes
            newRecipes = filterRecipesByUstensil(newRecipes, li.textContent);
            displayData(newRecipes);
        })
        ulUstensils.appendChild(li);
    });
}
