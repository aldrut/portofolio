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

let chiffre =  prompt("Veuillez saisir un chiffre entre 1 et 3 SVP");

while(!parseInt(chiffre) == chiffre || chiffre >= 0 && chiffre <= 3)
{
    prompt("Veuillez saisir un chiffre valide entre 1 et 3 SVP");
}
console.log("Merci, votre chiffre saisi {0} est bien compris entre 1 et 3".replace("{0}",chiffre));

