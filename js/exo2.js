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

let maPhrase = prompt("Ecrivez une phrase svp ?");
let total = maPhrase.length;
let cpt;
let consonne;

function voyelleConsonne(value) 
{
    
    let voyelles = ["a", "e", "i", "o", "u", "y"];

    for (let i = 0; i < value.length; i++) 
    {
        for(let y =0; y < voyelles.length; y++)
        {
            if(value[i] == voyelles[y])
            {
                cpt++;
            }
        }
       return cpt;
    }
    consonne = total - cpt; 
}


voyelleConsonne(maPhrase);
alert(cpt);
alert(consonne);


