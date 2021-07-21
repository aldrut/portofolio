document.title='Morpion';
let jeuEstFini = false;
let joueurEnCours;
let nbtour = 0;
let user1;
let user2;
let allButton = document.querySelectorAll(".col .borderTab");

//let btnRemiseZero = document.querySelector("#btnStart");

let message = document.querySelector("#message");
//Inscriptions des joueurs

 user1 = prompt("Indiquez le nom du joueur 1 !!");

while(!isNaN(user1) || user1 == "")
{
    user1 = prompt("Indiquez le nom du joueur 1 !!");
}

 user2 = prompt("Indiquez le nom du joueur 2 !!");

while(!isNaN(user2) || user2 == "")
{
   user2 = prompt("Indiquez le nom du joueur 2 !!");
}

// //Dérterminer qui commence en premier
 let nomJoueurEnCours = document.querySelector('#nomJoueurEnCours');
 //Tableau des joueurs user1= [0,0][0,1] et pour user2 [1,0][1,1]
 let joueur = [[user1,"X"],[user2,"O"]];

 let index = Math.round(Math.random()*10);
 
    if(index >= 0 && index <=5)
    {
        nomJoueurEnCours.innerHTML = joueur[0][0] + " ";
        nomJoueurEnCours.innerHTML += "- Votre symbole est le " + joueur[0][1];
        tourJoueur(nbtour++);
       
    }
    else
    {
        nomJoueurEnCours.innerHTML = joueur[1][0] + " ";
        nomJoueurEnCours.innerHTML += "- Votre symbole est le " + joueur[1][1];
        tourJoueur(nbtour++);
        
}
//Changement de joueur 
    function tourJoueur(tour)
    {
        if(tour % 2 == 0 )
        {
            nomJoueurEncours = joueur[1][0];
            nomJoueurEnCours.innerHTML = nomJoueurEncours + " ";
            nomJoueurEnCours.innerHTML += "- Votre symbole est le " + joueur[1][1];
        }
        else
        {
            nomJoueurEncours = joueur[0][0];
            nomJoueurEnCours.innerHTML = nomJoueurEncours + " ";
            nomJoueurEnCours.innerHTML += "- Votre symbole est le " + joueur[0][1];
        }

    }

//récupérer chaque cellule

let tab = document.querySelectorAll('button[class ^="col borderTab"]');

for(let i = 0; i < tab.length; i++)
{
    tab[i].addEventListener('click', symbole.bind(this,i));
    
}

function symbole(event)
{
    
    tab[event].innerHTML = (nbtour %2 ==0 ) ? "X" : "O";
    
    nbtour++;
    tourJoueur(nbtour);
    let x = vainqueur(tab[event].innerHTML);
    if(x == true)
    {
        vainqueur(tab[event].innerHTML)
    }
    else
    {
        message.innerHTML = "Match nul" ;
    }
    
}

function vainqueur(joueur)
{
    
    if(tab[0].innerHTML == joueur && tab[1].innerHTML == joueur && tab[2].innerHTML == joueur )

    {
        tab[0].style.backgroundColor = "#9ACD32"; 
        tab[1].style.backgroundColor = "#9ACD32";  
        tab[2].style.backgroundColor = "#9ACD32"; 
        message.innerHTML = joueur + " vous avez gagné" ;
        return true;
    }
    else
    {
        message.innerHTML = "Match nul" ; 
    }
    if(tab[3].innerHTML == joueur && tab[4].innerHTML == joueur && tab[5].innerHTML == joueur )
    {
        tab[3].style.backgroundColor = "#9ACD32"; 
        tab[4].style.backgroundColor = "#9ACD32";  
        tab[5].style.backgroundColor = "#9ACD32"; 
        message.innerHTML = joueur + " vous avez gagné" ;
        return true;
    }
    else
    {
        message.innerHTML = "Match nul" ; 
    }
    if(tab[6].innerHTML == joueur && tab[7].innerHTML == joueur && tab[8].innerHTML == joueur )
    {
        tab[6].style.backgroundColor = "#9ACD32"; 
        tab[7].style.backgroundColor = "#9ACD32";  
        tab[8].style.backgroundColor = "#9ACD32"; 
        message.innerHTML = joueur + " vous avez gagné" ;
        return true;
    }
    else
    {
        message.innerHTML = "Match nul" ; 
    }
    if(tab[0].innerHTML == joueur && tab[3].innerHTML == joueur && tab[6].innerHTML == joueur )
    {
        tab[0].style.backgroundColor = "#9ACD32"; 
        tab[3].style.backgroundColor = "#9ACD32";  
        tab[6].style.backgroundColor = "#9ACD32"; 
        message.innerHTML = joueur + " vous avez gagné" ;
        Array.from(allButton).forEach(
            x =>
            {
                x.disabled = true;
            }
            );
        return true;
    }
    else
    {
        message.innerHTML = "Match nul" ; 
    }
    if(tab[1].innerHTML == joueur && tab[4].innerHTML == joueur && tab[7].innerHTML == joueur )
    {
        tab[1].style.backgroundColor = "#9ACD32"; 
        tab[4].style.backgroundColor = "#9ACD32";  
        tab[7].style.backgroundColor = "#9ACD32"; 
        message.innerHTML = joueur + " vous avez gagné" ;
        Array.from(allButton).forEach(
            x =>
            {
                x.disabled = true;
            }
            );
        return true;
    }
    else
    {
        message.innerHTML = "Match nul" ; 
    }
    if(tab[2].innerHTML == joueur && tab[5].innerHTML == joueur && tab[8].innerHTML == joueur)
    {
        tab[2].style.backgroundColor = "#9ACD32"; 
        tab[5].style.backgroundColor = "#9ACD32";  
        tab[8].style.backgroundColor = "#9ACD32"; 
        message.innerHTML = joueur + " vous avez gagné" ;
        Array.from(allButton).forEach(
            x =>
            {
                x.disabled = true;
            }
            );
        return true;
    }
    else
    {
        message.innerHTML = "Match nul" ; 
    }
    if(tab[0].innerHTML == joueur && tab[4].innerHTML == joueur && tab[8].innerHTML == joueur )
    {
        tab[0].style.backgroundColor = "#9ACD32"; 
        tab[4].style.backgroundColor = "#9ACD32";  
        tab[8].style.backgroundColor = "#9ACD32"; 
        message.innerHTML = joueur + " vous avez gagné" ;
        Array.from(allButton).forEach(
            x =>
            {
                x.disabled = true;
            }
            );
        return true;
    }
    else
    {
        message.innerHTML = "Match nul" ; 
    }
    if(tab[2].innerHTML == joueur && tab[4].innerHTML == joueur && tab[6].innerHTML == joueur)
    {
        tab[2].style.backgroundColor = "#9ACD32"; 
        tab[4].style.backgroundColor = "#9ACD32";  
        tab[6].style.backgroundColor = "#9ACD32";
        message.innerHTML = joueur + " vous avez gagné" ; 
        Array.from(allButton).forEach(
            x =>
            {
                x.disabled = true;
            }
            );
        return true;
    }
    else
    {
        
                tab[0].style.backgroundColor = "#F47378"; 
                tab[1].style.backgroundColor = "#F47378";  
                tab[2].style.backgroundColor = "#F47378";
                tab[3].style.backgroundColor = "#F47378"; 
                tab[4].style.backgroundColor = "#F47378";  
                tab[5].style.backgroundColor = "#F47378";
                tab[6].style.backgroundColor = "#F47378"; 
                tab[7].style.backgroundColor = "#F47378";  
                tab[8].style.backgroundColor = "#F47378";
            
        
        message.innerHTML = "Match nul" ; 
    }
   
}
function newPlayer()
{
    let u1 = document.querySelector('txtJ1');
    let u2 = document.querySelector('txtJ2');
    alert(u1.value + u2.value);
    $('#myModal').modal('hide');
    
}

let bp;