let input = document.getElementById("recherche_principale_input");

input.addEventListener("keyup" , event => {
    console.log(event.code);
    console.log(input.value);
    console.log("*****************")
    //str.toLowerCase().includes(substr)
});