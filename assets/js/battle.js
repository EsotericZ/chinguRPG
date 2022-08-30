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

let attack = document.getElementById('attackBtn');
let mega = document.getElementById('megaBtn');
let defense = document.getElementById('defenseBtn');

attack.addEventListener('click', function() {
    let hitIndex = Math.floor(Math.random() * characterStats.attack.length);
    let hit = characterStats.attack[hitIndex];
    let newBatHealth = batStats.health - hit;  
    alert(`Attack! ${characterStats.attack}, ${hit}, die bat ${newBatHealth}`);
    batStats.health = newBatHealth;
    enemyHealth.textContent = `Health: ${batStats.health}`;
})

mega.addEventListener('click', function() {
    alert('Mega Attack!')
})

defense.addEventListener('click', function() {
    alert('Defend!')
})