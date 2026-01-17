//const name = "Pylan"
//let age = 19
//console.log(`je m'appelle ${name} et j'ai ${age}`);

//const code = "1234"

//const userInput = prompt()

//if (userInput === code) {
    //l'utilisateur a tapé le bon code 
   // console.log(`coffre ouvert`)
//}
//else{
    //l'utilisateur a tapé le bon code
    //console.log(`coffre fermé`)
//}

//function sayHello(){
  //  console.log("Hello")
//}



//const mainTitle = document.querySelector("h1")

//console.log(mainTitle);

//const cardText =document.querySelector(".card-container")

//const cards = document.querySelectorAll(".card")

//console.log (cards)

//cards.forEach(function (card) {
    //card.innerText = "wesh"
    //card.querySelector("p").innerText = "bande de putes"
//})

//const image = document.querySelector("img")
//image.alt ="le loge tah les fous"

//console.log(image.alt)



//function sayHello() {
    //console.log("hello")
//}

//const image = document.querySelector("img")

//image.addEventListener("click", function(){
    //console.log("chaudasse")
    //image.classList.add (".border-yellow")
//})

// 1ere etape: Récupérer les éléments  HTML dont on a besoin
const form = document.querySelector("form")
const nameInput = document.querySelector("#name")
const nameError = document.querySelector("#name-error")

form.addEventListener("sumbit", function(event){
    event.preventDefault()
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

// text gabriel aphoster of hate : After the defeate against V1, Gabriel fell in the the cycle of hatred.