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
// /**Ajout d'un message d'erreur */
// let lblError = document.createElement("label");
// lblError.id = "lblError";
// lblError.setAttribute("for", "msgError");
// lblError.innerText ="";

// lblError.style.visibility = "hidden";

// createDivCol1.appendChild(lblError);
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
    DisplayMessage("error","La valeur sélectionnée ne peut pas être vide.");
  
  } else {
    
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
lineCMot1.setAttribute("class","col-7 p-5");
let lineCMot2 = document.createElement("div");
lineCMot2.setAttribute("class","col p-5 ");

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
    DisplayMessage("error","error");
  }
  else
  {
    for(let b=0; b < valCombo; b++)
    {
      divCLettre.innerText = event.innerText;
    }
  }
}


let btnCheck = document.createElement("button");
btnCheck.setAttribute("class","a")
let returnLblSearch = document.createElement("label");
let txtResponse = document.querySelector('#txtReponse');
btnCheck.innerHTML = "Vérifier" ;
btnCheck.id = "btnCheck";
btnCheck.setAttribute("class","btn btn-primary btn-lg p-1");

btnCheck.addEventListener('click',  () =>
{
if(txtResponse.value == "")
{
  
  DisplayMessage("error","Le champ est vide <br> merci de faire le nécesaire ") ;
  
}
else
{
  Search(txtResponse.value);
  
  //DisplayMessage("good","Youpi");

}
});

lineCMot2.appendChild(btnCheck)
lineCMot2.appendChild(returnLblSearch);

lineRMot.appendChild(lineCMot2);
mainDiv.appendChild(lineRMot);



function DisplayMessage(value, msg)
{
  // Get the modal
let modal = document.querySelector("#myModal");

// Get the button that opens the modal
let btn = document.querySelector("#btnCheck");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// Get the p that display the message
let p = document.querySelector("#msg");

switch (value) {
  case "error":
    p.innerHTML =msg;
    break;
    case "good" :
    p.innerHTML = msg;
}

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

async function Search(value)
{
let url = "https://en.wiktionary.org/w/api.php?action=query&list=search&srsearch="+value+"&format=json&origin=*";

//  let resp = await fetch(url);
//  let commits = await resp.json();
//  let totalHits = await commits.query.searchinfo.totalhits;
//  alert(totalHits);
  // .then(resp => resp.json())
  // .then(commits => alert(commits[0]));
fetch(url)
.then((response)=>{
  //vérifier le status de la response
  if(response.status >=200 && response.status <=299)
  {
    return response.json();
  } else {
    throw Error(response.statusText)
  }
})
.then((jsonResponse)=>
{
  //Recherche le nombre d'occurrence sur l'api
  let totalHits =  jsonResponse.query.searchinfo.totalhits;
if(totalHits > 0)
{
  DisplayMessage("good","Félicitation !! le mot tapé est bien connu de notre base de données.")
}
else
{
  DisplayMessage("error","LOOSER");
}
})
.catch((error) =>
{
  DisplayMessage("error",error);
  console.log(error);
})

}