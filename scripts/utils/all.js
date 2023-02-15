//Remplir tous les ingredients dans le meme tableau et ne pas ajouter des doublons
function getIngredients(recipes) {
    let allIngredients = [];
    recipes.forEach(recipe => {
        let ingredients = recipe.ingredients;
        ingredients.forEach(ingredient => {
            if(allIngredients.length == 0){
                allIngredients.push(ingredient.ingredient);
            }
            else{
                let result = allIngredients.findIndex(ingred => ingred.toLowerCase() == ingredient.ingredient.toLowerCase());
                if(result == -1){
                    allIngredients.push(ingredient.ingredient);
                }
            }
        });
    });
    //console.log(allIngredients);
    return (allIngredients); 
}

function getUstensils (recipes) {
    let allUstensils = [];
    recipes.forEach(recipe => {
        let ustensils = recipe.ustensils;
        ustensils.forEach(ustensil => {
            if(allUstensils.length == 0){
                allUstensils.push(ustensil);
            }else{
                let result  = allUstensils.findIndex(ustens => ustens.toLowerCase() == ustensil.toLowerCase());
                if(result == -1){
                    allUstensils.push(ustensil);
                }
            }
        })
    });
    //console.log(allUstensils);
    return (allUstensils);
}

function getAppareils(recipes){
    let allAppareils = [];
    recipes.forEach(recipe => {
        if(allAppareils.length == 0){
            allAppareils.push(recipe.appliance);
        }else{
            let result = allAppareils.findIndex(appareil => appareil.toLowerCase() == recipe.appliance.toLocaleLowerCase());
            if(result == -1){
                allAppareils.push(recipe.appliance);
            }
        }
    });
    console.log(allAppareils);
    return (allAppareils);
}

function getIngredientsAppareilsUstensils(recipes){
    let all = {};
    let allIngredients = [];
    let allUstensils = [];
    let allAppareils = [];

    recipes.forEach(recipe => {
        let ingredients = recipe.ingredients;
        ingredients.forEach(ingredient => {
            if(allIngredients.length == 0){
                allIngredients.push(ingredient.ingredient);
            }
            else{
                let result = allIngredients.findIndex(ingred => ingred.toLowerCase() == ingredient.ingredient.toLowerCase());
                if(result == -1){
                    allIngredients.push(ingredient.ingredient);
                }
            }
        });
        let ustensils = recipe.ustensils;
        ustensils.forEach(ustensil => {
            if(allUstensils.length == 0){
                allUstensils.push(ustensil);
            }else{
                let result  = allUstensils.findIndex(ustens => ustens.toLowerCase() == ustensil.toLowerCase());
                if(result == -1){
                    allUstensils.push(ustensil);
                }
            }
        })
        
        if(allAppareils.length == 0){
            allAppareils.push(recipe.appliance);
        }else{
            let result = allAppareils.findIndex(appareil => appareil.toLowerCase() == recipe.appliance.toLocaleLowerCase());
            if(result == -1){
                allAppareils.push(recipe.appliance);
            }
        }
        
        all.ustensils = allUstensils;
        all.appareils = allAppareils;
        all.ingredients = allIngredients;
        
    });

    return all;
}

console.log(getIngredientsAppareilsUstensils(recipes));