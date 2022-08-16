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
    attackMod: 1.75,
    defense: [6,7,8],
    defenseMod: 1.5,
}

let mageHealth = document.getElementById("mageHealth");
let mageAttack = document.getElementById("mageAttack");
let mageAttackMod = document.getElementById("mageAttackMod");
let mageDefense = document.getElementById("mageDefense");
let mageDefenseMod = document.getElementById("mageDefenseMod");
mageHealth.textContent = `Health: ${mage.health}`;
mageAttack.textContent = `Attack: ${mage.attack[0]} - ${mage.attack[mage.attack.length - 1]}`;
mageAttackMod.textContent = `Attack Mod: ${mage.attackMod}`;
mageDefense.textContent = `Defense: ${mage.defense[0]} - ${mage.defense[mage.defense.length - 1]}`;
mageDefenseMod.textContent = `Defense Mod: ${mage.defenseMod}`;
