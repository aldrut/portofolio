
let tabConsonne = ["z", "r", "t", "p", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "w", "x", "c", "v", "b", "n"]

let tabVoyelles = ["a", "e", "i", "o", "u", "y"];

let mainDiv = document.querySelector('#mainDiv');
let test ="je teste";

for (let i = 0; i < 1; i++) {
    /*Creation de nos lignes*/
    let elsC = document.createElement('div');
    elsC.setAttribute("id", "consonnes");
    elsC.setAttribute("class", "row ");
    mainDiv.appendChild(elsC);

    for (let j = 0 ; j < tabConsonne.length; j++) {
        let txtConsonnes = tabConsonne[j];
        /*Creation de nos colonnes*/
        let col = document.createElement('div');
        col.setAttribute("class", "col  text-white affichageText divPointer ");
       
        col.innerHTML = "<div id="+txtConsonnes+" >" + txtConsonnes + "</div>";
   
        elsC.append(col);
    }
}

for (let x = 0; x < 1; x++) {
    /*Creation de nos lignes*/
    let elsV = document.createElement('div');
    elsV.setAttribute("id", "voyelles" + x);
    elsV.setAttribute("class", "row ");
    mainDiv.appendChild(elsV);

    for (let z = 0 ; z < tabVoyelles.length; z++) {
        let txtVoyelles = tabVoyelles[z];
        /*Creation de nos colonnes*/

        let col = document.createElement('div');
        col.setAttribute("class", "col bg-dark text-white affichageText divPointer ");
        col.innerHTML = "<div id='"+txtVoyelles+"'>" + txtVoyelles + "</div>";
    
        elsV.append(col);
    }
}



