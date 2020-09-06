var height = 0;
var width = 0;

function handleScreenDevice() {
    height = window.innerHeight;
    width = window.innerWidth;
    
    console.log(height, width)
}

handleScreenDevice()

function positionRandom() {

    if(document.getElementById('covid')) {
        document.getElementById('covid').remove()
    }

    var positionX = Math.floor(Math.random() * width) - 90;
    var positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    var covid = document.createElement('img');
    covid.src = '../assets/image/virus.svg';
    covid.className = sizeRandom() + ' ' + sideRandom();
    covid.style.left = `${positionX}px`;
    covid.style.top = `${positionY}px`;
    covid.style.position = 'absolute';

    covid.id = 'covid';

    document.body.appendChild(covid)
}

function sizeRandom() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'covid1'

        case 1:
            return 'covid2'

        case 2:
            return 'covid3'
    }
}

function sideRandom() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'sideA'

        case 1:
            return 'sideB'
    }
}