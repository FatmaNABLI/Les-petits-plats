function filterRecipesByAppliance(recipes, appliance){
    let newRecipes = [];
    newRecipes = recipes.filter(recipe => recipe.appliance.toLowerCase() == appliance.toLowerCase());
    console.log(newRecipes);
    return newRecipes;
}

function filterRecipesByIngredient(recipes, ingredient){
    let newRecipes = [];
   recipes.forEach(recipe => {
    if(recipe.ingredients.findIndex(ingred => ingred.toLowerCase() == ingredient.ingredient.toLowerCase() != -1)){
        newRecipes.push(recipe);
    }
   }); 
}

//filterRecéipesByAppliance(recipes,"four");