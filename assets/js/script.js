let characterPosition = 0;
characterCarousel(characterPosition);

function nextCharacter(n) {
    characterCarousel(characterPosition += n);
}

function characterCarousel(n) {
    let characters = document.getElementsByClassName("charClass");
    if (n == characters.length) {
        console.log("hit")
    }
    if (n < 0) {
        characterPosition = characters.length - 1;
    }
    for (let i = 0; i < characters.length; i++) {
        characters[i].style.display = "none";
    }
    characters[characterPosition].style.display = "block";
}