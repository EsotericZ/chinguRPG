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
let enemyPic = document.createElement("img");
document.getElementById("enemyPic").appendChild(enemyPic);
enemyPic.src = `./assets/images/bat.png`

enemyHealth.textContent = `Health: ${batStats.health}`;

let heroPic = document.createElement("img");
document.getElementById("heroPic").appendChild(heroPic);
heroPic.src = `./assets/images/${character}.png`

// heroClass.textContent = `${character}`;
heroHealth.textContent = `Health: ${characterStats.health}`;