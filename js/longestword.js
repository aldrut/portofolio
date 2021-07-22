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
      "<label for='alpha' id=" +
      txtVoyelles +
      " class='divPointer bg-div m-5' onclick='ecrireInDiv(" +
      txtVoyelles +
      ")');' >" +
      txtVoyelles +
      "</label>";
    elsV.append(col);
  }
  mainDiv.appendChild(elsV);
}

let createDivRowQuestion = document.createElement("div");
createDivRowQuestion.setAttribute(
  "class",
  "row d-flex justify-content-center text-center"
);

let createDivCol1 = document.createElement("div");
createDivCol1.setAttribute("class", "col justify-content-center");

let select = document.createElement("select");
select.id = "selectNbLettre";
select.addEventListener("change", generateLetterCase);
select.classList.add("m-5");
let opt1 = document.createElement("option");
opt1.setAttribute("value", "");
select.appendChild(opt1);

for (let p = 5; p <= 10; p++) {
  select.options[select.options.length] = new Option(p);
}

createDivRowQuestion.appendChild(createDivCol1);

let createLabel = document.createElement("label");
createLabel.textContent = "Avec combien de lettres voulez-vous jouer ?";
createDivCol1.appendChild(createLabel);
createDivCol1.appendChild(select);

let lblError = document.createElement("label");
lblError.id = "lblError";
lblError.setAttribute("for", "msgError");
lblError.innerText ="";

lblError.style.visibility = "hidden";

createDivCol1.appendChild(lblError);

mainDiv.appendChild(createDivRowQuestion);
let divRLettre, divCLettre,  divLettre;
let tab = [];
divRLettre = document.createElement("div");
divRLettre.setAttribute("class","row");

for(let d=0; d < 10; d++)
{
  divCLettre = document.createElement("div");
  divCLettre.setAttribute("class","col border-top-0 border-right-0 border-left-0 border-bottom-0 affichageText ");
  divCLettre.style.height = "100px";
  divCLettre.id = d;
  tab.push(d);
  divCLettre.innerText = "...";
  divCLettre.addEventListener("click",ecrireInTextbox);
  divRLettre.append(divCLettre);
}

mainDiv.append(divRLettre);
let valCombo;
function generateLetterCase(event) {
  valCombo = event.target.value;
  if (valCombo == "") {
    lblError.style.visibility = "visible";
    lblError.innerText = "La valeur sélectionnée ne peut pas être vide, veuillez réessayer";
  
  } else {
    lblError.style.visibility = "hidden";
    lblError.innerText ="";
   
  }
}

let lineRMot = document.createElement("div");
lineRMot.setAttribute("class","row p-5");
let lineCMot1 = document.createElement("div");
lineCMot1.setAttribute("class","col-10 p-5");
let lineCMot2 = document.createElement("div");
lineCMot2.setAttribute("class","col p-5");

lineCMot1.innerHTML = "Veuillez entrer une réponse :" + " " + "<span id='txtReponse' class='form-control'></span>";

lineRMot.appendChild(lineCMot1);
lineRMot.appendChild(lineCMot2);
mainDiv.appendChild(lineRMot);

function ecrireInTextbox(event)
{
  txtReponse.textContent += event.target.innerText;
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

