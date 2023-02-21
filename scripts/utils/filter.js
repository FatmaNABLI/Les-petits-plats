

function filterRecipesByAppliance(recipes, appliance){
    let newRecipes = [];
    newRecipes = recipes.filter(recipe => recipe.appliance.toLowerCase() == appliance.toLowerCase());
    console.log(newRecipes);
    return newRecipes;
}

function filterRecipesByIngredient(recipes, ingredient){
    let newRecipes = [];
   recipes.forEach(recipe => {
    if(recipe.ingredients.findIndex(ingred => ingred.ingredient.toLowerCase() == ingredient.toLowerCase()) != -1){
        newRecipes.push(recipe);
    }
   });
   console.log(newRecipes);
   return newRecipes; 
}

function filterRecipesByUstensil(recipes, ustensil){
    let newRecipes = [];
    recipes.forEach(recipe => {
     if(recipe.ustensils.findIndex(eltUstensil => eltUstensil.toLowerCase() == ustensil.toLowerCstensilase()) != -1){
         newRecipes.push(recipe);
     }
    });
    return newRecipes; 
}
//filterRecipesByIngredient(recipes, ingredient)
//filterRecéipesByAppliance(recipes,"four");