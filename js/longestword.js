//GENERATION DU TABLEAU DES CONSONNES
let tabConsonne = ["z","r","t","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
//GENERATION DU TABLEAU DES VOYELLES
let tabVoyelles = ["a", "e", "i", "o", "u", "y"];
//RECUPERER LE NOM DE LA DIV PRINCIPALE
let mainDiv = document.querySelector("#mainDiv");

//CREATION DIV POUR AFFICHER LES CONSONNES
for (let i = 0; i < 1; i++) {
  /*Creation de nos lignes*/
  let elsC = document.createElement("div");
  elsC.setAttribute("id", "consonnes");
  elsC.setAttribute("class", "row ");
  // mainDiv.appendChild(elsC);

  for (let j = 0; j < tabConsonne.length; j++) {
    let txtConsonnes = tabConsonne[j];
    /*Creation de nos colonnes*/
    let col = document.createElement("div");
    col.setAttribute("class", "col affichageText text-white");
    col.innerHTML ="<label for='alpha' id=" + txtConsonnes + " class='divPointer bg-div ' onclick='ecrireInDiv(" + txtConsonnes + ")'>" + txtConsonnes + "</label>";
    /**Insertion des noeuds */
    elsC.append(col);
  }
  /*Insertion dans page*/
  mainDiv.appendChild(elsC);
}
//CREATION DIV POUR AFFICHER LES VOYELLES
for (let x = 0; x < 1; x++) {
  /*Creation de nos lignes*/
  let elsV = document.createElement("div");
  elsV.setAttribute("id", "voyelles");
  elsV.setAttribute("class", "row ");

  for (let z = 0; z < tabVoyelles.length; z++) {
    let txtVoyelles = tabVoyelles[z];
    /*Creation de nos colonnes*/

    let col = document.createElement("div");
    col.setAttribute("class", "col affichageText text-white");
    col.innerHTML =
      "<label for='alpha' id=" +txtVoyelles +" class='divPointer bg-div m-5' onclick='ecrireInDiv(" +txtVoyelles + ")');' >" + txtVoyelles + "</label>";
    elsV.append(col);
  }
  /**Insertion dans page */
  mainDiv.appendChild(elsV);
}
//#region CREATION DIV POUR AFFICHER LA COMBO BOX
let createDivRowQuestion = document.createElement("div");
createDivRowQuestion.setAttribute("class","row d-flex justify-content-center text-center");

let createDivCol1 = document.createElement("div");
createDivCol1.setAttribute("class", "col justify-content-center");

let select = document.createElement("select");
select.id = "selectNbLettre";
select.addEventListener("change", generateLetterCase);
select.classList.add("m-5");
let opt1 = document.createElement("option");
opt1.setAttribute("value", "");
select.appendChild(opt1);
/**Ajout des options */
for (let p = 5; p <= 10; p++) {
  select.options[select.options.length] = new Option(p);
}
//#endregion
createDivRowQuestion.appendChild(createDivCol1);

let createLabel = document.createElement("label");
createLabel.textContent = "Avec combien de lettres voulez-vous jouer ?";
createDivCol1.appendChild(createLabel);
createDivCol1.appendChild(select);
/**Ajout d'un message d'erreur */
let lblError = document.createElement("label");
lblError.id = "lblError";
lblError.setAttribute("for", "msgError");
lblError.innerText ="";

lblError.style.visibility = "hidden";

createDivCol1.appendChild(lblError);
/**Affichage du bloc COMBO BOX */
mainDiv.appendChild(createDivRowQuestion);
/**GENERATION DU BLOCK DES LETTRES SELECTIONNEES  */
let divRLettre, divCLettre,  divLettre;
let tab = [];
let valCombo;

divRLettre = document.createElement("div");
divRLettre.setAttribute("class","row");

for(let d=0; d < 10; d++)
{
  divCLettre = document.createElement("div");
  divCLettre.setAttribute("class","col affichageText  ");
  divCLettre.style.height = "100px";
  /**Creation d'un span dans la div */
  divCLettre.innerHTML = "<span id='sp"+d+"'>"+d+"</span>"
  
   
  divCLettre.addEventListener("click",ecrireInTextbox);
  
  divRLettre.append(divCLettre);
}

let allSpan = document.querySelectorAll("span");
tab.push(allSpan);


mainDiv.append(divRLettre);

function generateLetterCase(event) {
  valCombo = event.target.value;
  if (valCombo == "") {
    lblError.style.visibility = "visible";
    lblError.innerText = "La valeur sélectionnée ne peut pas être vide, veuillez réessayer";
  
  } else {
    lblError.style.visibility = "hidden";
    lblError.innerText ="";
  let span;
     Array.from(tab).forEach(elt =>  
       {
        
      span =  document.querySelector["#" + elt];
      span.disabled = true;
       }
         );
     
   
  }
}

let lineRMot = document.createElement("div");
lineRMot.setAttribute("class","row p-5");
let lineCMot1 = document.createElement("div");
lineCMot1.setAttribute("class","col-10 p-5");
let lineCMot2 = document.createElement("div");
lineCMot2.setAttribute("class","col p-5");

lineCMot1.innerHTML = "Veuillez entrer une réponse :" + " " + "<input type='text' id='txtReponse' class='form-control' required></input>";

lineRMot.appendChild(lineCMot1);
lineRMot.appendChild(lineCMot2);
mainDiv.appendChild(lineRMot);

function ecrireInTextbox(event)
{
  document.querySelector('#txtReponse').value += event.target.innerText;
}

function ecrireInDiv(event) {

  if(document.querySelector('#selectNbLettre').value =="")
  {
    lblError.style.visibility = "visible";
    lblError.innerText = "La valeur sélectionnée ne peut pas être vide, veuillez réessayer";
  }
  else
  {
    for(let b=0; b < valCombo; b++)
    {
      divCLettre.innerText = event.innerText;
    }
  }


  // alert(value.innerHTML);
}

