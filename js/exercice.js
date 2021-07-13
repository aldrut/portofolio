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

//let nb = prompt("Saisissez un nombre ?");

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

//5 Demander de saisir un nombre et indique si celui ci est positif ou negatif ou nul
// if(nb > 0)
// {
//     alert("positif");
// }
// else if(nb <0)
// {
//     alert("négatif");
// }
// else
// {
//     alert("nul");
// }

//Demander à quelle place le participant d'une course a-t-il terminé 
//En fonction de la position est ce une médaille d'or d'argent ou bronze

// let maPosition = prompt("Peux-tu me donner ta place dans le classement ? ");

// if(maPosition == 1) {alert("médaille d\'or"); }
// if(maPosition == 2) {alert("médaille d\'argent"); }
// if(maPosition == 3) {alert("médaille de bronze"); }
// if(maPosition == 4) {alert("médaille de Chocolat"); }
// if(maPosition == 0 || maPosition > 4 ) {alert("Pas de chance"); }

// switch(maPosition)
// {
//     case "1":
//         console.log("Gold");
        
//         case "2" :
//             console.log("silver");

// }

//let noteExamen = parseFloat(prompt("Note de votre examen"));
let noteExamen = document.querySelector('#note');
let stateR = "Refusé";
let stateA = "Reçu";
let bien = "Bien";
let assezbien = "Assez bien";
let tresbien = "Très bien";
let excellent = "Excellent";
let parfait = "Parfait";
let error =  "Ce n'est pas un note valide";


function mention()
{
    if (noteExamen.value < 10)
    {
        
        document.querySelector("#lblRst").style.color = 'red';
        document.querySelector("#lblRst").style.fontWeight  = 'bold';
        document.querySelector("#lblRst").innerHTML = stateR.toUpperCase();
        document.querySelector("#lblMention").style.color = '';

      
    }
    else if(noteExamen.value < 12  )
    {
        document.querySelector("#lblRst").innerHTML = stateA.toUpperCase() ;
        document.querySelector("#lblRst").style.color = '';
        document.querySelector("#lblRst").style.color = 'green';
        document.querySelector("#lblRst").style.fontWeight  = 'bold';
        document.querySelector("#lblMention").style.color = '';
        
    }
    else if (noteExamen.value < 14)
    {
        document.querySelector("#lblRst").innerHTML = stateA.toUpperCase() ;
        document.querySelector("#lblRst").style.color = '';
        document.querySelector("#lblRst").style.color = 'green';
        document.querySelector("#lblRst").style.fontWeight  = 'bold';
        document.querySelector("#lblMention").innerHTML = assezbien.toUpperCase() ;
        document.querySelector("#lblMention").style.color = '';
        document.querySelector("#lblMention").style.color = 'green';
        document.querySelector("#lblMention").style.fontWeight  = 'bold';
       
        
    }
    else if (noteExamen.value < 16)
    {
        document.querySelector("#lblRst").innerHTML = stateA.toUpperCase() ;
        document.querySelector("#lblRst").style.color = '';
        document.querySelector("#lblRst").style.color = 'green';
        document.querySelector("#lblRst").style.fontWeight  = 'bold';
        document.querySelector("#lblMention").innerHTML = bien.toUpperCase();
        document.querySelector("#lblMention").style.color = '';
        document.querySelector("#lblMention").style.color = 'green';
        document.querySelector("#lblMention").style.fontWeight  = 'bold';
    
    }
    else if (noteExamen.value < 18)
    {
        document.querySelector("#lblRst").style.color = '';
        document.querySelector("#lblRst").style.color = 'green';
        document.querySelector("#lblRst").style.fontWeight  = 'bold';
        document.querySelector("#lblRst").innerHTML = stateA.toUpperCase() ;
        document.querySelector("#lblMention").innerHTML = tresbien.toUpperCase();
        document.querySelector("#lblMention").style.color = '';
        document.querySelector("#lblMention").style.color = 'green';
        document.querySelector("#lblMention").style.fontWeight  = 'bold';
      
    }
    else if (noteExamen.value < 20)
    {
        document.querySelector("#lblRst").style.color = '';
        document.querySelector("#lblRst").style.color = 'green';
        document.querySelector("#lblRst").style.fontWeight  = 'bold';
        document.querySelector("#lblRst").innerHTML = stateA ;
        document.querySelector("#lblMention").innerHTML = excellent.toUpperCase() ;
        document.querySelector("#lblMention").style.color = '';
        document.querySelector("#lblMention").style.color = 'green';
        document.querySelector("#lblMention").style.fontWeight  = 'bold';
        
    }
    else if (noteExamen.value == 20)
    {
        document.querySelector("#lblRst").style.color = 'green';
        document.querySelector("#lblRst").style.fontWeight  = 'bold';
        document.querySelector("#lblRst").innerHTML = stateA.toUpperCase() ;
       
        document.querySelector("#lblMention").innerHTML = parfait.toUpperCase();
        document.querySelector("#lblMention").style.color = '';
        document.querySelector("#lblMention").style.color = 'green';
        document.querySelector("#lblMention").style.fontWeight  = 'bold';
    
    }
    else {
        document.querySelector("#lblMention").style.color = '';
        document.querySelector("#lblRst").style.color = '';
        document.querySelector("#lblRst").style.color = 'red';
        document.querySelector("#lblRst").style.fontWeight  = 'bold';
        document.querySelector("#lblRst").innerHTML = error ;
    }
}







