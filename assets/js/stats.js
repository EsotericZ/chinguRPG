// CHARACTER PROPERTIES
let mage = {
    char: 'Mage',
    health: 80,
    attack: [15,16,17,18,19,20],
    attackName: 'Spell',
    attackMod: 1.5,
    megaName: 'Big Spell',
    defense: [4,5,6],
    defenseMod: 1.5,
    captions: [
        'Taste my magic!',
        'Hurts. Donut?',
        'Mage Rage!'
    ],
}

let ranger = {
    char: 'Ranger',
    health: 60,
    attack: [20,21,22,23,24,25],
    attackName: 'Spell',
    attackMod: 1.75,
    megaName: 'Big Spell',
    defense: [0,1,2,3],
    defenseMod: 1.25,
    captions: [
        'You have my bow',
        'Ranger Danger!',
        'Arrow Funk Ton!'
    ]
}

let warrior = {
    char: 'Warrior',
    health: 100,
    attack: [10,11,12,13,14,15],
    attackName: 'Spell',
    attackMod: 1.25,
    megaName: 'Big Spell',
    defense: [8,9,10],
    defenseMod: 1,
    captions: [
        'You have my sword',
        'I got this sword from a stone!',
        'The pen is NOT mightier!'
    ],
}

let bat = {
    char: 'Bat',
    health: 75,
    attack: [13,14,15,16,17],
    attackName: 'Bite',
    attackMod: 1.25,
    megaName: 'Thrash',
    defense: [6,7,8],
    captions: [
        'My bite IS my bark!',
        'The night time is the right time',
        ':: indecernable bat noises ::'
    ],
}


// you hit 
//timer 
// he hits  
// repeat
// until health == 0
// finish this soon