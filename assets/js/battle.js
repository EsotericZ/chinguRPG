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
let statusText = document.getElementById('status');

// Set Buttons
attack.innerHTML = `${characterStats.attackName}`;
mega.innerHTML = `${characterStats.megaName}`;

let hitIndex
let hit
let newBatHealth

attack.addEventListener('click', function() {
    hitIndex = Math.floor(Math.random() * characterStats.attack.length);
    hit = characterStats.attack[hitIndex];
    newBatHealth = batStats.health - hit;  
    statusText.textContent = `${characterStats.char} attacks with ${characterStats.attackName}!`
    batStats.health = newBatHealth;
    enemyHealth.textContent = `Health: ${batStats.health}`;
})

mega.addEventListener('click', function() {
    hitIndex = Math.floor(Math.random() * characterStats.attack.length);
    hit = Math.ceil(characterStats.attack[hitIndex] * characterStats.attackMod);
    alert(hit);
    newBatHealth = batStats.health - hit;  
    statusText.textContent = `${characterStats.char} attacks with ${characterStats.megaName}!`
    batStats.health = newBatHealth;
    enemyHealth.textContent = `Health: ${batStats.health}`;
    mega.innerHTML = 'One Time Use!';
    mega.classList.add(disabled);
    
})

defense.addEventListener('click', function() {
    alert('Defend!')
})