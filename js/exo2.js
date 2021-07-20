//exo de while

// let nb1, nb2, somme;

// do{
//     nb1 = prompt("Veuillez indiquer le nombre 1 :");
// }
// while(nb1 == "" || isNaN(parseFloat(nb1)))

// do{
//     nb2 = prompt("veuillez indiquer le nombre 2");
// }
// while(nb2 == "" || isNaN(parseFloat(nb2)))

// somme = parseFloat(nb1) + parseFloat(nb2);

// alert(somme);

//exo demander un nombre compris entre 1 et 10
//on redemande à l'utilisateur si pas un nb

// let chiffre, table;

// do
// {
//     chiffre = prompt("Saisissez un chiffre entre 1 et 10");
// }
// while (chiffre == "" || isNaN(parseInt(chiffre)) || parseInt(chiffre) < 1 || parseInt(chiffre) > 10);

// console.log("Table de " + chiffre.toString());

// for (let i = 0; i <= 10; i++)
// {

//     table = i.toString() + " x " + chiffre.toString() + " = " + i * parseInt(chiffre);

//     console.log(table);
// }

// let photocopie = Number(prompt('Combien de photocopie ?'));
// let photocopie10 = photocopie * Number(0.1);
// let photocopie40 = ((photocopie - Number(10)) * Number(0.08) + Number(1)) ;
// let photocopieplus = ((photocopie - Number(40)) * Number(0.05) + Number(3.4)) ;

// if(photocopie <= 10)
// {
//     alert("Pour " + photocopie + " photocopies, cela fait " + photocopie10 + '€');
// }
// else if(photocopie > 10 && photocopie <=40)
// {
//     alert("Pour " + photocopie + " photocopies, cela fait " + photocopie40 + '€');
// }
// else if(photocopie > 40)
// {
//     alert("Pour " + photocopie + " photocopies, cela fait " + photocopieplus + '€');
// }
// else
// {
//     alert("je n'ai pas compris");

// }

// Exo JS : Demander à l'utilisateur de saisir une date puis vérifier que celle-ci est exacte.
//On demande le jour, puis le mois, puis l'année et on vérifie enfin que cette date est correcte.

// function treatDate()
// {

// }

// let annee = Number(prompt("Saisir une annee"));

// let bi = false;
// if(annee % 4 == 0)
// {
// bi = true;
// }

// alert(bi);

//EXO demander la saisie d'une phrase
//lui indiquer combien de consonnes et de voyelles

// let maPhrase = prompt("Ecrivez une phrase svp ?");
// let vowelsCount =0, numberCount =0 , consCount =0, otherChar = 0;
// let vowels = "aeiouyéèê";
// let consonant ="zrtpmlkjhgfdsqwxcvbn";
// let number = "0123456789";

// function voyelleConsonne(mot) {
  
// Array.from(mot).forEach(element => {

//     if(vowels.includes(element))
//     {
//         vowelsCount++;
//     }
//     else if(consonant.includes(element))
//     {
//         consCount++;
//     }
//     else if(number.includes(element))
//     {
//         numberCount++
//     }
//     else
//     {
// otherChar++;
//     }
      
// });

//   console.log(
//     "Votre phrase : {0} contient {1} voyelles, {2} chiffres, {3} consonnes, {4} autre caractères."
//       .replace("{0}", maPhrase)
//       .replace("{1}", vowelsCount)
//       .replace("{2}", numberCount )
//       .replace("{3}", consCount)
//       .replace("{4}",otherChar)
//   );
// }

// voyelleConsonne(maPhrase);

//Ex1 : Ecrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.

// let chiffre =  prompt("Veuillez saisir un chiffre entre 1 et 3 SVP");


// while(chiffre < 1 || chiffre >3 )
// {
//     alert("saisie erronnée, recommencez");
//     chiffre = prompt("Veuillez saisir un chiffre valide entre 1 et 3 SVP");
// }




//Ex2 : Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. 
//En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.

// let nb = prompt("Veuillez saisir un chiffre entre 10 et 20 SVP");

//  while(!(parseInt(nb) == nb && nb >=10 && nb <= 20))
//  {
//     if(parseInt(nb) >20)
//     {
//         alert('trop grand');
//     }
//     if(parseInt(nb) < 10)
//     {
//         alert('trop petit');
//     }
//     nb = prompt("Veuillez saisir un chiffre valide entre 10 et 20 SVP");
//  }

//Ex3 : Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. 
//Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27. 
//Utiliser une boucle while, puis réécrire l'algorithme avec une boucle do while et enfin avec une boucle for.

// let nb = prompt("Veuillez saisir un chiffre SVP");
// let i = 0;

// while(i < 10)
// {
//     i++;
//     alert(parseInt(nb)+i);
// }

// do{
//     i++;
//     alert(parseInt(nb)+i);10
// }
// while(i < 10)

// for(i =0; i < 10; i++)
// {
//     alert(parseInt(nb)+i);
// }

// Ex4 : Ecrire un algorithme qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à ce nombre. 
//Par exemple, si l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15


// let nb = prompt("Veuillez saisir un chiffre SVP");
// let j =0;
// for( i = 0; i <= parseInt(nb); i++)
// {
//     j += i;
    
// }
// alert(j) ;

//Ex 5 : Ecrire un algorithme qui demande à l'utilisateur (un prof) de saisir les notes d'un élèves (compris entre 0 et 20). 
//Si la saisie n'est pas une note valide l'indiquer à l'utilisateur. La saisie des notes s'arrête lorsque l'utilisateur saisie le mot END. 
//L'algorithme doit alors afficher la moyenne des notes de l'élève ainsi que la note la plus élevée et la note la moins élevée. 
//(petit conseil : utiliser un tableau pour stocker les notes saisies)



// let tabNotes = [];
// let noteCandidat;

// let nbNote = prompt("combien de note voulez vous saisir ?");

// for(let i = 1; i <= nbNote; i++)
// {
//     noteCandidat = prompt("Veuillez saisir la note de l'élève n° " + i); 
//     while(!parseFloat(noteCandidat) == noteCandidat || parseFloat(noteCandidat)< 0 || parseFloat(noteCandidat)>20)
//     {
//         noteCandidat = prompt("Veuillez saisir la note de l'élève n° " + i); 
//     }
//     tabNotes.push(noteCandidat);
// }

// let sumNotes = totalNotes(tabNotes);

// let moyenne = (parseFloat(sumNotes) / tabNotes.length);

// console.log("Votre moyenne est de {0}. La note la plus haute est {1} et la plus basse est {2}".replace("{0}",parseFloat(moyenne))
// .replace("{1}", Math.max(...tabNotes))
// .replace("{2}", Math.min(...tabNotes)));




// function totalNotes(tableau)
// {
//     let sum = 0;
//     for(let i = 0; i < tableau.length; i++)
//     {
//        sum += parseFloat(tabNotes[i]);
//     }
//     return sum;
// }


// let a = 123.32;

// console.log(parseFloat(a).toFixed(1));

document.title = "Distributeur de confiserie";

// class Money {
//     constructor(nbCoin2, nbCoin1, nbCent50, nbCent20, nbCent10) {
//         this.nbCoin2 = nbCoin2;
//         this.nbCoin1 = nbCoin1;
//         this.nbCent50 = nbCent50;
//         this.nbCent20 = nbCent20;
//         this.nbCent10 = nbCent10;
//     }
// }

// class Products {
//     constructor(Code, Libelle, Prix) {
//         this.Code = Code;
//         this.Libelle = Libelle;
//         this.Prix = Prix;
//     }
// }
// let MoneyTab = new Money();
// MoneyTab.Coin2 = 0;
// MoneyTab.Coin1 = 0;
// MoneyTab.Cent50 = 0;
// MoneyTab.Cent20 = 0;
// MoneyTab.Cent10 = 0;



// let ProductList = 
// [
//     "Twix","Mars","Bounty","Chips","Kit-KAT","Thé au citron", "Potage Tomate",
//     "Kinder Bueno","Cristaline","Evian","Coca","Thé à la menthe",
//     "Sprite","Expresso court","Expresso long","Chocolat"
// ];

// let nbLine = Math.ceil(ProductList.length /4);

// let section1 = document.querySelector("#section1");

// for(let j =0; j < nbLine; j++)
// {
//     section1.innerHTML = "<div class='row>'<div class='col-4'>";
//     for(let h=0; h < 4; h++)
//     {
//         section1.innerHTML = "<div class='card' style='width: 18rem;'>";
//         section1.innerHTML = "<img class='card-img-top' src='/img/expresso.jpg' alt='Expresso'>";
//         section1.innerHTML = "<div class='card-body'>";
        
        
//           <h5 class="card-title">Expresso</h5>
//           <p class="card-text">Café long en grain</p>
//           <button class="btn btn-primary btn-block" id="btn2"></button>
//         </div>
//       </div>";
//     }

// }
// section1.innerHTML = "";
// section1.innerHTML = "</div></div>";





//GENERER TABLEAU GOURMANDISE
// let productsTab = new Products();
// for(let i =0; i < ProductList.length; i++)
// {
//     //AJOUT DU CODE
//     productsTab.Code = "A"+i;
//     //AJOUT PRODUIT
//     productsTab.Libelle = ProductList[i];
//     //OBTENTION D'UN PRIX
//     productsTab.Prix = getRandomPrice(0.5,1.5).toFixed(1);
    
    
    
// }

//let demanderCode = prompt("Veuillez saisir un code entre A0 et A9");

//  while (demanderCode == "" && 
//  Produit.array.forEach(element => { if(element.Code != demanderCode) return false; })
//     )
//     {
//         demanderCode = prompt("Donnée non valide - Veuillez saisir un code entre A0 et A9");  
//     }




//GENERER ALEATOIREMENT UN PRIX ENTRE 0.5 ET 1.5
//  function getRandomPrice(min, max)
//  {
//      return Math.random() * (max-min)+min;
//  }
//CALCULER LE RESTE DE LA COMMANDE
// function getResteMonnaies(money)
// {
//     return price -= parseFloat(money).toFixed(1);
// }
//OBTENTION D'UN PRIX
// let price = getRandomPrice(0.5,1.5).toFixed(1);
//ON DEMANDE LE CHOIX DE LA COMMANDE
// let votreChoix = prompt("Votre choix");
// while (votreChoix == "" )
// {
//     votreChoix = prompt("Saisissez un choix valide");
// }
// //ON LUI DEMANDE D'INSÉRER LES PIECES
// let pieces = prompt(votreChoix + " Prix = {0}".replace("{0}",price) +"\nPièces acceptées 10cts 20cts 50cts 1€ 2€");

// while (pieces == "" ||  parseFloat(pieces) > 2 || parseFloat(pieces) < 0.1 || parseFloat(price) != 0 )
// {
//     let reste = getResteMonnaies(pieces);
//     while(reste > 0)
//     {
//         pieces = prompt(votreChoix + " Reste = {0}".replace("{0}",reste) +"\nPièces acceptées 10cts 20cts 50cts 1€ 2€");
//         reste = getResteMonnaies(pieces);
//     }
//     break;
    
    
// }

// alert("voici votre commande");
//Automate rendu monnaie
// function getRandom(min, max){
//     return Math.random() * (max - min) + min;
// }

// let fondCaisse =[[5,2],[10,3],[20,4],[50,2],[100,5],[200,10]];


// alert(fondCaisse[0][1]);




// let prixChoisi = parseFloat(getRandom(0.50,1.50).toFixed(1)) * 100;
// alert("Prix de l'article choisi " + prixChoisi + " cts");

// let montantInsere = 0;
// let tableauPieces = [5, 10, 20, 50, 100, 200];
// while(montantInsere < prixChoisi){
//     let saisie = prompt("Inserer votre monnaie svp.");
//     let test = isNaN(saisie) || !saisie || !tableauPieces.includes(parseInt(saisie))
//     while(isNaN(saisie) || !saisie || !tableauPieces.includes(parseInt(saisie))){
//         saisie = prompt("Inserer votre monnaie svp.");
//     }
//     montantInsere += parseInt(saisie);
//     Array.from(fondCaisse).forEach(x =>
//         {
//         if(x[0] == saisie )
//         {
//             x[1]++;

//         }
//         });
// }
// //
// let monnaieARendre = montantInsere - prixChoisi;
// let renduMonnaieMsg = "";
// if(monnaieARendre >= 100){
//     //1€
//     renduMonnaieMsg += "1€-";
//     monnaieARendre -= 100;
//     Array.from(fondCaisse).forEach(x =>
//         {
//         if(x[0] == 100 && x[0] > 0 )
//         {
//             x[1] = x[1]-1;

//         }
//         });

// }
// while(monnaieARendre >= 50){
//     renduMonnaieMsg += "50 cts-";
//     monnaieARendre -= 50;
//     Array.from(fondCaisse).forEach(x =>
//         {
//         if(x[0] == 50 && x[0] > 0 )
//         {
//             x[1] = x[1]-1;

//         }
//         });
// }
// while(monnaieARendre >= 20){
//     renduMonnaieMsg += "20 cts-";
//     monnaieARendre -= 20;
//     Array.from(fondCaisse).forEach(x =>
//         {
//         if(x[0] == 20  && x[0] > 0 )
//         {
//             x[1] = x[1]-1;

//         }
//         });
// }
// while(monnaieARendre >= 10){
//     renduMonnaieMsg += "10 cts-";
//     monnaieARendre -= 10;
//     Array.from(fondCaisse).forEach(x =>
//         {
//         if(x[0] == 10  && x[0] > 0  )
//         {
//             x[1] = x[1]-1;

//         }
//         });
// }
// while(monnaieARendre >= 5){
//     renduMonnaieMsg += "5 cts-";
//     monnaieARendre -= 5;
//     Array.from(fondCaisse).forEach(x =>
//         {
//         if(x[0] == 5 && x[0] > 0  )
//         {
//             x[1] = x[1]-1;

//         }
//         });
// }
// alert(renduMonnaieMsg);


 
let header1 = document.getElementById('header1');
let header2 = document.querySelector('#header1');

let links = document.getElementsByTagName('a');
let links2 = document.querySelectorAll('.nav-link');

let navlinks = document.getElementsByClassName('nav-link');
let navlinks2 = document.querySelector('.nav-link');


//récupérer les éléments de type section

let sectionList = document.getElementsByTagName('section');
let sectionList2 = document.querySelectorAll('section');
 
//récupérer les éléments de type footerid
let footerId = document.getElementById('footerId');
let sectionList3 = document.querySelector('#footerId');

//récupérer les éléments de type class
let footerId2 = document.getElementsByClassName('secTitle');
let sectionList4 = document.querySelectorAll('.secTitle');

//l'élément h2.sectitle de la section#sectId
let selector = document.querySelector('#sectId .secTitle')

//changer le nom du lien
let accueil = document.querySelector('[href="#accueil"]');
accueil.innerText = "Accueil";
accueil.innerHTML = '<img src="/img/AspNetCore.png" alt="asp.net">';

//remplacer le texte du footer par "Cet élément est le footer de la page"

let footerPage = document.querySelector("#footerText p");
footerPage.innerText = "Cet élément est le footer de la page";

//insérer une image

footerPage.innerHTML = '<img src="/img/expresso.jpg" alt="asp.net">';

//ajouter ou supprimer class
let elH2 = document.querySelector('#sectId2 h2');
elH2.classList.remove('title');
elH2.classList.add('display-none');

//récupérer h1 de la page lui enlever la class title et ajouter class bg-red
let elH1 = document.querySelector('#titrePrincipal h1');
elH1.classList.remove('title');
elH1.classList.add('bg-red');

// for(let i=0; i < sectionList2.length; i++ )
// {
//     sectionList2[i].innerText = "source" + i;
// }

// let clickLink = document.querySelector('.nav-link');
// clickLink.addEventListener('click',clickNavLink);
// function clickNavLink()
// {
//     alert('toto');
    
// }
// let imageToChange = document.querySelector('#imgToChange img');
// imageToChange.addEventListener('mouseover',moveImage);
// function moveImage()
// {

// alert('toto');
// }

let liList = document.querySelectorAll('.nav-link');

for (let i =0; i < liList.length; i++)
{
    liList[i].addEventListener('click',function() {
        modifyText(this,i);
    });
}

function modifyText(event,h)
{
    event.target.innerText = "cliqué" +h;

    //this.innerText = "cliqué";
}
 
 
let bp;