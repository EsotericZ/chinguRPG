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
// let defense = document.getElementById('defenseBtn');
let heroText = document.getElementById('heroText');
let enemyText = document.getElementById('enemyText');
let statusText = document.getElementById('status');

// Set Buttons
attack.innerHTML = `${characterStats.attackName}`;
mega.innerHTML = `${characterStats.megaName}`;

let hitIndex
let hit
let newBatHealth
let newHeroHealth

let batAttack = () => { 
    hitIndex = Math.floor(Math.random() * batStats.attack.length);
    batHit = Math.ceil(batStats.attack[hitIndex]);
    captionIndex = Math.floor(Math.random() * batStats.captions.length);
    enemyCaption = batStats.captions[captionIndex];
    defIndex = Math.floor(Math.random() * characterStats.defense.length)
    heroDef = Math.ceil(characterStats.defense[defIndex]);
    newHeroHealth = characterStats.health - batHit + heroDef;  
    statusText.textContent = `${batStats.char} attacks with ${batStats.attackName}!`
    characterStats.health = newHeroHealth;
    heroHealth.textContent = `Health: ${characterStats.health}`;
    if (characterStats.health <= 0) {
        endGameLoss();
    }
}

attack.addEventListener('click', function() {
    hitIndex = Math.floor(Math.random() * characterStats.attack.length);
    heroHit = Math.ceil(characterStats.attack[hitIndex]);
    captionIndex = Math.floor(Math.random() * characterStats.captions.length);
    heroCaption = characterStats.captions[captionIndex];
    heroText.textContent = heroCaption;
    defIndex = Math.floor(Math.random() * batStats.defense.length)
    batDef = Math.ceil(batStats.defense[defIndex]);
    newBatHealth = batStats.health - heroHit + batDef;  
    statusText.textContent = `${characterStats.char} attacks with ${characterStats.attackName}!`
    batStats.health = newBatHealth;
    enemyHealth.textContent = `Health: ${batStats.health}`;
    attack.disabled = true;
    if (batStats.health <= 0) {
        endGameWin();
    }
    statusText.textContent = 'Bats Turn!';
    setTimeout(function() {
        batAttack();
        heroText.textContent = '';
        setTimeout(function() {
            statusText.textContent = `${characterStats.char} Turn!`;
            attack.disabled = false;
            enemyText.textContent = '';
        }, 3000);
    }, 3000);
})

mega.addEventListener('click', function() {
    hitIndex = Math.floor(Math.random() * characterStats.attack.length);
    heroHit = Math.ceil(characterStats.attack[hitIndex] * characterStats.attackMod);
    defIndex = Math.floor(Math.random() * batStats.defense.length)
    batDef = Math.ceil(batStats.defense[hitIndex]);
    newBatHealth = batStats.health - heroHit + batDef;  
    statusText.textContent = `${characterStats.char} attacks with ${characterStats.megaName}!`
    batStats.health = newBatHealth;
    enemyHealth.textContent = `Health: ${batStats.health}`;
    mega.innerHTML = 'One Time Use!';
    mega.disabled = true;
    attack.disabled = true;
    if (batStats.health <= 0) {
        endGameWin();
    }
    statusText.textContent = 'Bats Turn!'
    setTimeout(function() {
        heroText.textContent = '';
        batAttack();
        setTimeout(function() {
            statusText.textContent = `${characterStats.char} Turn!`;
            attack.disabled = false;
            enemyText.textContent = '';
        }, 3000);
    }, 2000)
})

let result;


let endGameWin = () => {
    result = 'Winner';
    localStorage.setItem('result', result);
    window.location.href = "results.html";
}

let endGameLoss = () => {
    result = 'Loser';
    localStorage.setItem('result', result);
    window.location.href = "results.html";
}