let input = document.getElementById("recherche_principale_input");

input.addEventListener("keyup" , event => {
    let substring = input.value;
    if (substring.length >= 3){
        let newRecipesCopie = findSubstringInRecipes(newRecipes, substring);
        displayData(newRecipesCopie);
    }
    
});

function findSubstringInRecipes(recipes, substring){
    let newRecipes = [];
    //Recherche dans le titre , la description et le tableau d'ingredients
    newRecipes = recipes.filter( recipe => recipe.name.toLowerCase().includes(substring.toLowerCase())  || recipe.description.toLowerCase().includes(substring.toLowerCase())
    || recipe.ingredients.findIndex(ingred => ingred.ingredient.toLowerCase().includes(substring.toLowerCase())) != -1
    ); 
    //
    console.log(newRecipes);
    return newRecipes;
} 