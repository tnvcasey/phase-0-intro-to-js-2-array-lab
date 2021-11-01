// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]; 

beforeEach(function () {
    cats.length = 0; 

    cats.push("Milo", "Otis", "Garfield"); 
}); 

function destructivelyAppendCat(){
    cats.push("Ralph"); 
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop(); 
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
 
function appendCat() {
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats; 
}

function prependCat() {
    const copyOfCats = ["Arnold", ...cats,]; 
    return copyOfCats; 
}

function removeLastCat() {
    const copyOfCats = [...cats]; 
    copyOfCats.pop(); 
    return copyOfCats; 
}

function removeFirstCat() {
    const copyOfCats = [...cats]; 
    copyOfCats.shift();
    return copyOfCats; 
}
