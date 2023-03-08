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
    appareils.forEach(apapreil => {
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
   ustenils.forEach(ustensil => {
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


//Remplissage des diférentes liste à partir des recettes
function remplirListeingredients(recipes){
    ulIngredients.innerHTML = "";
    let ingredients = getIngredients(recipes);
    ingredients.sort((a,b) => {
        return (a.localeCompare(b));
    }
    );
    sortedIngredients = ingredients;
    ingredients.forEach(ingredient => {
        let li = document.createElement("li");
        li.innerHTML = ingredient;
        li.addEventListener("click",e => {
            createTag(li.textContent  + " " , "ingredients");
            //divListes[0].style.display = "none";
            //btns[0].style.display = "block";
            //Màj des recettes
            newRecipes = filterRecipesByIngredient(newRecipes, li.textContent);
            displayData(newRecipes);
        })
        ulIngredients.appendChild(li);
    })
}

//Remplissage liste appareils
function remplirListeAppareils(recipes){
    ulAppareils.innerHTML = "";
    let appareils = getAppareils(recipes);
    appareils.sort((a,b) => {
        return (a.localeCompare(b));
    });
    sortedAppareils = appareils;
    appareils.forEach(apapreil => {
        let li = document.createElement("li");
        li.innerHTML = apapreil;
        li.addEventListener("click",e => {
            createTag(li.textContent  + " " , "appareils");
            //divListes[1].style.display = "none";
            //btns[1].style.display = "block";
            //Màj des recettes
            newRecipes = filterRecipesByAppliance(newRecipes, li.textContent);
            displayData(newRecipes);
        })
        ulAppareils.appendChild(li);
    });
}

//Remplissage liste ustensiles
function remplirListeUstensils(recipes){
    ulUstensils.innerHTML = "";
    let ustensils = getUstensils(recipes);
    ustensils.sort((a,b) => {
        return (a.localeCompare(b));
    });
    sortedUstensils = ustensils;
   ustensils.forEach(ustensil => {
        let li = document.createElement("li");
        li.innerHTML = ustensil;
        li.addEventListener("click",e => {
            createTag(li.textContent  + " " , "ustensils");
            //divListes[2].style.display = "none";
            //btns[2].style.display = "block";
            //Màj des recettes
            newRecipes = filterRecipesByUstensil(newRecipes, li.textContent);
            displayData(newRecipes);
        })
        ulUstensils.appendChild(li);
    });
}
