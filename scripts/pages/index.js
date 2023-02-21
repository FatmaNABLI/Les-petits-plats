let newRecipes = recipes;
let ulIngredients = document.getElementById("liste_ingredients");
let ulAppareils = document.getElementById("liste_appareils");
let ulUstensils= document.getElementById("liste_ustensils");
let ulTags = document.getElementById("liste_tags");
let btns = document.querySelectorAll("button");
let divListes = document.querySelectorAll(".liste");  

//Remplissage liste ingredients
getIngredients(newRecipes).forEach(ingredient => {
    let li = document.createElement("li");
    li.innerHTML = ingredient;
    li.addEventListener("click",e => {
        createTag(li.textContent  + " " , "ingredients");
        divListes[0].style.display = "none";
        btns[0].style.display = "block";
    })
    ulIngredients.appendChild(li);
})

//Remplissage liste appareils
getAppareils(newRecipes).forEach(apapreil => {
    let li = document.createElement("li");
    li.innerHTML = apapreil;
    li.addEventListener("click",e => {
        createTag(li.textContent  + " " , "appareils");
        divListes[1].style.display = "none";
        btns[1].style.display = "block";
    })
    ulAppareils.appendChild(li);
});
//Remplissage liste ustensiles
getUstensils(newRecipes).forEach(ustensil => {
    let li = document.createElement("li");
    li.innerHTML = ustensil;
    li.addEventListener("click",e => {
        createTag(li.textContent  + " " , "ustensils");
        divListes[2].style.display = "none";
        btns[2].style.display = "block";
    })
    ulUstensils.appendChild(li);
});
//Création d'un tag selon le type (ingredient , appareil, ustensil)
function createTag(contenu , type){
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