//#region 

// let prenom = prompt("Saisissez votre prénom");
// let nom = prompt("saisissez votre nom de famille");


// alert("Votre nom complet est " + prenom + " " + nom.toUpperCase());


// let nombre1 = prompt("Saisissez un premier nombre entre 10 et 30 ");

// while (nombre1 < 10 || nombre1 > 30)
// {
//     nombre1 = prompt("Saisissez un premier nombre entre 10 et 30 ");
// }

// let nombre2 = prompt("Saisissez un second nombre entre 10 et 30 ");  

// while (nombre2 < 10 || nombre2 > 30)
// {
//     nombre2 = prompt("Saisissez un second nombre entre 10 et 30 "); 
// }



//     alert("La différence entre le nombre 1 et le nombre 2 est de : " +  nombre1 - nombre2  );



    



// let nom = prompt("saisissez votre nom de famille");
//#endregion

let nb = prompt("Saisissez un nombre ?");

// while(isNaN(nb))
// {
//     nb = parseInt(prompt("Saisissez un nombre ?"));
// }

// let pair = nb % 2;

// if(pair == 0)
// {
//     alert("Ce chiffre est pair");
// }
// else
// {
//     alert("Ce chiffre est impair");
// }

//alert(pair == 0 ? "Chiffre pair" : "chiffre impair");

let rst = Math.sign(nb);


if(rst > 0)
{
    alert("positif");
}
else if(rst <0)
{
    alert("négatif");
}
else
{
    alert("nul");
}


