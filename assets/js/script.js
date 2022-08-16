// CHARACTER SELECTION
let characterPosition = 0;
characterCarousel(characterPosition);

function nextCharacter(n) {
    characterCarousel(characterPosition += n);
}

function characterCarousel(n) {
    let characters = document.getElementsByClassName("charClass");
    let dots = document.getElementsByClassName("dots");
    if (n == characters.length) {
        characterPosition = 0;
    }
    if (n < 0) {
        characterPosition = characters.length - 1;
    }
    for (let i = 0; i < characters.length; i++) {
        characters[i].style.display = "none";
        dots[characterPosition].classList.remove('active');    
    }
    characters[characterPosition].style.display = "block";
    if (characterPosition == 0) {
        dots[0].classList.add('active');
        dots[1].classList.remove('active');
        dots[2].classList.remove('active');    
    } else if (characterPosition == 1) {
        dots[0].classList.remove('active');
        dots[1].classList.add('active');
        dots[2].classList.remove('active');
    } else {
        dots[0].classList.remove('active');
        dots[1].classList.remove('active');
        dots[2].classList.add('active');
    }
}

// CHARACTER PROPERTIES - MAGE
let mage = {
    health: 80,
    attack: [15,16,17,18,19,20],
    attackMod: 1.5,
    defense: [6,7,8],
    defenseMod: 1.5,
}

let mageHealth = document.getElementById("mageHealth");
let mageAttack = document.getElementById("mageAttack");
let mageAttackMod = document.getElementById("mageAttackMod");
let mageDefense = document.getElementById("mageDefense");
let mageDefenseMod = document.getElementById("mageDefenseMod");
mageHealth.textContent = `Health: ${mage.health}`;
mageAttack.textContent = `Attack: ${mage.attack[0]}-${mage.attack[mage.attack.length - 1]}`;
mageAttackMod.textContent = `Attack Mod: ${mage.attackMod}`;
mageDefense.textContent = `Defense: ${mage.defense[0]}-${mage.defense[mage.defense.length - 1]}`;
mageDefenseMod.textContent = `Defense Mod: ${mage.defenseMod}`;

// CHARACTER PROPERTIES - RANGER
let ranger = {
    health: 60,
    attack: [20,21,22,23,24,25],
    attackMod: 1.75,
    defense: [5,6,7],
    defenseMod: 1.25,
}

let rangerHealth = document.getElementById("rangerHealth");
let rangerAttack = document.getElementById("rangerAttack");
let rangerAttackMod = document.getElementById("rangerAttackMod");
let rangerDefense = document.getElementById("rangerDefense");
let rangerDefenseMod = document.getElementById("rangerDefenseMod");
rangerHealth.textContent = `Health: ${ranger.health}`;
rangerAttack.textContent = `Attack: ${ranger.attack[0]}-${ranger.attack[ranger.attack.length - 1]}`;
rangerAttackMod.textContent = `Attack Mod: ${ranger.attackMod}`;
rangerDefense.textContent = `Defense: ${ranger.defense[0]}-${ranger.defense[ranger.defense.length - 1]}`;
rangerDefenseMod.textContent = `Defense Mod: ${ranger.defenseMod}`;

// CHARACTER PROPERTIES - WARRIOR
let warrior = {
    health: 100,
    attack: [10,11,12,13,14,15],
    attackMod: 1.25,
    defense: [8,9,10],
    defenseMod: 1.75,
}

let warriorHealth = document.getElementById("warriorHealth");
let warriorAttack = document.getElementById("warriorAttack");
let warriorAttackMod = document.getElementById("warriorAttackMod");
let warriorDefense = document.getElementById("warriorDefense");
let warriorDefenseMod = document.getElementById("warriorDefenseMod");
warriorHealth.textContent = `Health: ${warrior.health}`;
warriorAttack.textContent = `Attack: ${warrior.attack[0]}-${warrior.attack[warrior.attack.length - 1]}`;
warriorAttackMod.textContent = `Attack Mod: ${warrior.attackMod}`;
warriorDefense.textContent = `Defense: ${warrior.defense[0]}-${warrior.defense[warrior.defense.length - 1]}`;
warriorDefenseMod.textContent = `Defense Mod: ${warrior.defenseMod}`;