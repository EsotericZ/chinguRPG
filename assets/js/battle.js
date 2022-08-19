// VARIABLES
// let startBtn = document.getElementById("startBtn");
let characterStats;

let battle = document.getElementById("battle");
let character = localStorage.getItem("character");
console.log(character);
// console.log(mage)
battle.textContent = `test ${character}`;

if (character == "mage") {
    characterStats = mage;
} else if (character == "ranger") {
    characterStats = ranger;
} else {
    characterStats = warrior;
}

console.log(characterStats);