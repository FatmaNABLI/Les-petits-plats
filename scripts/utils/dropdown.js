document.querySelectorAll("button").forEach(btn => btn.addEventListener("click", e => {

    document.querySelectorAll("button").forEach(btn => btn.style.display = "block");
    document.querySelectorAll(".liste").forEach(liste => liste.style.display = "none");
  
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "block";
    
})
);


document.querySelectorAll(".close_dropdown").forEach(btn => btn.addEventListener("click", e => {


e.target.parentElement.style.display = "none";
e.target.parentElement.previousElementSibling.style.display = "block";

})
);