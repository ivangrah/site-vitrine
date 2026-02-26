
// récupération des objets  javascript


const logo = document.getElementById("logo");
const commande = document.getElementById("commande");
const fermer = document.getElementById("fermer");
const logoA = document.getElementById("logoA");
const commande1 = document.getElementById("commande1");
const logo32 = document.getElementById("logo32");
const fermer1 = document.getElementById("fermer1");
const paye = document.getElementById("paye");
const commander1 = document.getElementById("commander1");
const sortir = document.getElementById("sortir");
const commander2 = document.getElementById("commander2");

const wave = document.getElementById("wave");
const pay2 = document.getElementById("pay2");
const sor = document.getElementById("sor");


const mtn = document.getElementById("mtn");
const pay3 = document.getElementById("pay3");
const sort = document.getElementById("sort");


const orange = document.getElementById("orange");
const pay1 = document.getElementById("pay1");
const so = document.getElementById("so");

const moov = document.getElementById("moov");
const pay4 = document.getElementById("pay4");
const sot = document.getElementById("sot");


// click pour les commandes

logo.addEventListener("click", ()=> {
  commande.style.display = "flex";
})

fermer.addEventListener("click", ()=> {
  commande.style.display = "none";
})


logo32.addEventListener("click", ()=> {
commande1.style.display = "flex";
})

  fermer1.addEventListener("click", ()=> {  
 commande1.style.display = "none";
})

//click pour le choix du moyen de paiement

  commander1.addEventListener("click", ()=> {  
 paye.style.display = "flex";

})
 commander2.addEventListener("click", ()=> {
 paye.style.display = "flex";
})

sortir.addEventListener("click", ()=>{
  paye.style.display = "none";
})

// click pour la confirmation et l'annulation du paiement wave

  pay2.addEventListener("click", ()=>{
  wave.style.display = "block";
})

sor.addEventListener("click", ()=>{
wave.style.display = "none";

});

// click pour la confirmation et l'annulation du paiement mtn

  pay3.addEventListener("click", ()=>{
  mtn.style.display = "block";
})

sort.addEventListener("click", ()=>{
mtn.style.display = "none";

});


// click pour la confirmation et l'annulation du paiement orange

  pay1.addEventListener("click", ()=>{
  orange.style.display = "block";
})

so.addEventListener("click", ()=>{
orange.style.display = "none";

});



// click pour la confirmation et l'annulation du paiement moov 

  pay4.addEventListener("click", ()=>{
  moov.style.display = "block";
})

sot.addEventListener("click", ()=>{
moov.style.display = "none";

});


