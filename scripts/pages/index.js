let newRecipes = recipes;
let ulIngredients = document.getElementById("liste_ingredients");
let ulAppareils = document.getElementById("liste_appareils");
let ulUstensils= document.getElementById("liste_ustensils");
let ulTags = document.getElementById("liste_tags");
let btns = document.querySelectorAll("button");
let divListes = document.querySelectorAll(".liste");  

//Remplissage liste ingredients

function remplirListeingredients(recipes){
    ulIngredients.innerHTML = "";
    let ingredients = getIngredients(recipes);
    ingredients.sort((a,b) => {
        return (a.localeCompare(b));
    }
    );
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

//Création d'un tag selon le type (ingredient , appareil, ustensil)
function createTag(contenu , type){
    let li = document.createElement("li");
    li.innerHTML = contenu;
    li.classList.add(type);
    ulTags.appendChild(li);
    let i = document.createElement("i");
    i.classList.add("fas","fa-times");
    //Suppression d'un tag
    i.addEventListener("click", e => {
        e.target.parentElement.remove();
        //parcourir la liste des tags et re-filtrer les recettes
        let ulTags = document.getElementById("liste_tags");
        let li = ulTags.children;
        //S'il n'y a pas de recherche avancée
        newRecipes = recipes;
        if(li.length !=0 ){
            for(let i = 0 ; i< li.length ; i++){
                //console.log(li[i].className);
                //console.log(li[i].textContent);
                if(li[i].className == "ingredients"){
                    newRecipes = filterRecipesByIngredient(newRecipes, li[i].textContent.trim());
                }
                else if(li[i].className == "ustensils"){
                    newRecipes = filterRecipesByUstensil(newRecipes, li[i].textContent.trim());
                }
                else{
                    newRecipes = filterRecipesByAppliance(newRecipes, li[i].textContent.trim());
                }
            }
        }
        /*displayRecipes(newRecipes);
        remplirListeingredients(newRecipes);
        remplirListeAppareils(newRecipes);
        remplirListeUstensils(newRecipes);*/
        displayData(newRecipes);

    });
    li.append(i);
}


function displayRecipes(recipes){
    document.getElementById("recipes").innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        document.getElementById("recipes").appendChild(recipeCardDOM);
    });
}

//1er affichage
function displayData(newRecipes) {
  
    remplirListeingredients(newRecipes);
    remplirListeAppareils(newRecipes);
    remplirListeUstensils(newRecipes);
    displayRecipes(newRecipes);
}


displayData(newRecipes);