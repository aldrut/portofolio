let eleve = ['Alexandre DRUT', 'Anes SEGHIR', 'Nathalie GIBILARO', 'Sébastien FLAMENT', 'Dieug KILINDILWA', 'Moktar TERKI', 'Afaf AIT HAMOU', 'Fares CHAGHLA', 'Lionel HUMBERT', 'Guillaume LARIVIERE', 'Maxime MOITTIE', 'Oumar YOUSSOUF', 'Adam ALSAKIN ALZUBEIR', 'Lucas FAUVARQUE'];


let docJson = JSON.parse(eleve);

console.log(docJson);

const randomEleve = eleve[Math.floor(Math.random() * eleve.length)];

const index = eleve.findIndex(x => x === randomEleve);


let newTab = [];





console.log(index + randomEleve);
eleve.splice(index,1);
console.log(eleve);
console.log(randomEleve);


// if(newTab.length == 0)
// {
// newTab.push(randomEleve);
// eleve.splice(eleve);
// }
// else
// {

// }


// console.log(eleve)
// console.log(newTab)

// console.log(randomEleve);