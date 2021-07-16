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
//     while(!parseFloat(noteCandidat) || parseFloat(noteCandidat)< 0 || parseFloat(noteCandidat)>20)
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


//OBTENTION D'UN PRIX
let price = getRandomPrice(0.5,1.5).toFixed(1);
//GENERER TABLEAU GOURMANDISE

let tabMenu = ["Barre chocolat", "M&S","Chips nature","Chips goût"]

for(let i =0; i < 10; i++)
{
    obj.
}




//GENERER ALEATOIREMENT UN PRIX ENTRE 0.5 ET 1.5
function getRandomPrice(min, max)
{
    return Math.random() * (max-min)+min;
}
//CALCULER LE RESTE DE LA COMMANDE
function getResteMonnaies(money)
{
    return price -= parseFloat(money).toFixed(1);
}
//OBTENTION D'UN PRIX
let price = getRandomPrice(0.5,1.5).toFixed(1);
//ON DEMANDE LE CHOIX DE LA COMMANDE
let votreChoix = prompt("Votre choix");
while (votreChoix == "" )
{
    votreChoix = prompt("Saisissez un choix valide");
}
//ON LUI DEMANDE D'INSÉRER LES PIECES
let pieces = prompt(votreChoix + " Prix = {0}".replace("{0}",price) +"\nPièces acceptées 10cts 20cts 50cts 1€ 2€");

while (pieces == "" ||  parseFloat(pieces) > 2 || parseFloat(pieces) < 0.1 || parseFloat(price) != 0 )
{
    let reste = getResteMonnaies(pieces);
    while(reste > 0)
    {
        pieces = prompt(votreChoix + " Reste = {0}".replace("{0}",reste) +"\nPièces acceptées 10cts 20cts 50cts 1€ 2€");
        reste = getResteMonnaies(pieces);
    }
    break;
    
    
}

alert("voici votre commande");

