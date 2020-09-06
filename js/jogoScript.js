var height = 0;
var width = 0;
var lifes = 1;
var times = 20;

var createCovidTime = 2100;

var level = window.location.search
level = level.replace('?', '')

if(level === 'muito-facil') {
    createCovidTime = 2100;
    times = 10;

} else if(level === 'facil') {
    createCovidTime = 1500;
    times = 15;

} else if(level === 'normal') {
    createCovidTime = 1000;
    times = 20;

} else if(level === 'dificil') {
    createCovidTime = 750;
    times = 25;

} else if(level === 'full-pistola') {
    createCovidTime = 500;
    times = 30;

}

function handleScreenDevice() {
    height = window.innerHeight;
    width = window.innerWidth;    
}

handleScreenDevice()

var stopwatch = setInterval(function() {
    times -= 1

    if(times < 0) {
        clearInterval(stopwatch)
        clearInterval(createCovid)

        window.location.href = '../pages/gameWin.html'
    } else {
        document.getElementById('times').innerHTML = times
    }

}, 1000)

function positionRandom() {

    if(document.getElementById('covid')) {
        document.getElementById('covid').remove()

        if(lifes > 4) {
            window.location.href = '../pages/gameOver.html'
        } else {
            document.getElementById('life' + lifes).src = '../assets/image/coracao_vazio.png';
            
            lifes ++;
        }
    }

    var positionX = Math.floor(Math.random() * width) - 90;
    var positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    var covid = document.createElement('img');
    covid.src = '../assets/image/virus.svg';
    covid.className = sizeRandom() + ' ' + sideRandom();
    covid.style.left = `${positionX}px`;
    covid.style.top = `${positionY}px`;
    covid.style.position = 'absolute';

    covid.id = 'covid';
    covid.onclick = function() {
        this.remove()
    }

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