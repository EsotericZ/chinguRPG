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