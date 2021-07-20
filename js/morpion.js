document.title='Morpion';
let jeuEstFini = false;
let joueurEnCours;
let nbtour = 0;


let message = document.querySelector("#message");
// //Inscriptions des joueurs
// let user1 = prompt("Indiquez le nom du joueur 1 !!");

while(!isNaN(user1) || user1 == "")
{
    user1 = prompt("Indiquez le nom du joueur 1 !!");
}

// let user2 = prompt("Indiquez le nom du joueur 2 !!");

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
        nomJoueurEnCours.innerHTML += "-Votre symbole est le " + joueur[0][1];
        tourJoueur(nbtour);
       
    }
    else
    {
        nomJoueurEnCours.innerHTML = joueur[1][0] + " ";
        nomJoueurEnCours.innerHTML += "-Votre symbole est le " + joueur[1][1];
        tourJoueur(nbtour + 1);
        

        
}
//Changement de joueur 
    function tourJoueur(tour)
    {
        if(tour % 2 == 0 )
        {
            nomJoueurEncours = joueur[1][0];
        }
        else
        {
            nomJoueurEncours = joueur[0][0];
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
    if(x != true)
    {
        vainqueur(tab[event].innerHTML)
    }
    else
    {
        message.innerHTML = "Match nul" ;
    }
    
}

function vainqueur(joueur,pion)
{
    
    if(tab[0].innerHTML == pion && tab[1].innerHTML == pion && tab[2].innerHTML == pion )

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
    if(tab[3].innerHTML == pion && tab[4].innerHTML == pion && tab[5].innerHTML == pion )
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
    if(tab[6].innerHTML == pion && tab[7].innerHTML == pion && tab[8].innerHTML == pion )
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
    if(tab[0].innerHTML == pion && tab[3].innerHTML == pion && tab[6].innerHTML == pion )
    {
        tab[0].style.backgroundColor = "#9ACD32"; 
        tab[3].style.backgroundColor = "#9ACD32";  
        tab[6].style.backgroundColor = "#9ACD32"; 
        message.innerHTML = joueur + " vous avez gagné" ;
        return true;
    }
    else
    {
        message.innerHTML = "Match nul" ; 
    }
    if(tab[1].innerHTML == pion && tab[4].innerHTML == pion && tab[7].innerHTML == pion )
    {
        tab[1].style.backgroundColor = "#9ACD32"; 
        tab[4].style.backgroundColor = "#9ACD32";  
        tab[7].style.backgroundColor = "#9ACD32"; 
        message.innerHTML = joueur + " vous avez gagné" ;
        return true;
    }
    else
    {
        message.innerHTML = "Match nul" ; 
    }
    if(tab[2].innerHTML == pion && tab[5].innerHTML == pion && tab[8].innerHTML == pion)
    {
        tab[2].style.backgroundColor = "#9ACD32"; 
        tab[5].style.backgroundColor = "#9ACD32";  
        tab[8].style.backgroundColor = "#9ACD32"; 
        message.innerHTML = joueur + " vous avez gagné" ;
        return true;
    }
    else
    {
        message.innerHTML = "Match nul" ; 
    }
    if(tab[0].innerHTML == pion && tab[4].innerHTML == pion && tab[8].innerHTML == pion )
    {
        tab[0].style.backgroundColor = "#9ACD32"; 
        tab[4].style.backgroundColor = "#9ACD32";  
        tab[8].style.backgroundColor = "#9ACD32"; 
        message.innerHTML = joueur + " vous avez gagné" ;
        return true;
    }
    else
    {
        message.innerHTML = "Match nul" ; 
    }
    if(tab[2].innerHTML == pion && tab[4].innerHTML == pion && tab[6].innerHTML == pion)
    {
        tab[2].style.backgroundColor = "#9ACD32"; 
        tab[4].style.backgroundColor = "#9ACD32";  
        tab[6].style.backgroundColor = "#9ACD32";
        message.innerHTML = joueur + " vous avez gagné" ; 
        return true;
    }
    else
    {
        message.innerHTML = "Match nul" ; 
    }
   
}



let bp;