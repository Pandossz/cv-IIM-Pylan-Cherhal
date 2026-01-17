const form = document.querySelector("form")
const nameInput = document.querySelector("#name")
const nameError = document.querySelector("#name-error")

form.addEventListener("submit", function(event){
    event.preventDefault();
    //verifier si le contenu de l'input est vide
    if(nameInput.value === ""){
    //afficher message d'erreur
    nameError.classList.remove("hidden")
    }

    else {
        nameError.classList.add("hidden")

        console.log("name", nameInput.value);
        console.log("Bonus: Maintenant essayez de vider l'input une fois qu'on a bien \"envoyé\" le formulaire, et même d'afficher un message \"Bien envoyé !\"")
    }
})

console.log(form)