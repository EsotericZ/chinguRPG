let character = localStorage.getItem("character");

let characterStats;
let heroHealth = document.getElementById("heroHealth");

if (character == "mage") {
    characterStats = mage;
} else if (character == "ranger") {
    characterStats = ranger;
} else {
    characterStats = warrior;
}

let batStats = bat;

console.log(characterStats);
console.log(batStats);

heroClass.textContent = `${character}`;
heroHealth.textContent = `Health: ${characterStats.health}`;