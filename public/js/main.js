// Exo 1
let tabPrenoms = ["jnt","hdr","phl","moh","wsm","ay","nc","gwn","gge"];
console.log(tabPrenoms);
let tabLength = tabPrenoms.length;
console.log(tabLength);
console.log(`Bonjour, ${tabPrenoms[0]}`)
console.log(`Bonjour, ${tabPrenoms[1]}`)
console.log(`Bonjour, ${tabPrenoms[2]}`)
console.log(`Bonjour, ${tabPrenoms[3]}`)
console.log(`Bonjour, ${tabPrenoms[4]}`)
console.log(`Bonjour, ${tabPrenoms[5]}`)
console.log(`Bonjour, ${tabPrenoms[6]}`)
console.log(`Bonjour, ${tabPrenoms[7]}`)
console.log(`Bonjour, ${tabPrenoms[8]}`)
// Exo 2
let random = Math.floor(Math.random() + 10);
let question = Number(prompt("entre un chiffre entre 1 et 10"));
if (random < question) {
    prompt("entre un chiffre entre 1 et 10");
}else{
    alert("Bravo tu a trouvé le bon nombre");
}
