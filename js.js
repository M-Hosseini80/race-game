let car = {
    left: 27
}
let carVal = document.getElementById('car');
let enemy = document.getElementById('enemy');
let enemy__po = {
    left: Math.floor(Math.random() * 4),
    eq: Math.floor(Math.random() * 3)
}

// Code for Chrome, Safari and Opera
enemy.addEventListener("webkitAnimationIteration", myRepeatFunction);

// Standard syntax
enemy.addEventListener("animationiteration", myRepeatFunction);

// Enemies movements
function myRepeatFunction() {
    enemy__po.left = Math.floor(Math.random() * 4)
    if (enemy__po.left == 0) {
        enemy__po.left = 27
    }
    if (enemy__po.left == 1) {
        enemy__po.left = 39
    }
    if (enemy__po.left == 2) {
        enemy__po.left = 51
    }
    if (enemy__po.left == 3) {
        enemy__po.left = 63
    }
    enemy.style.setProperty('--en-left', enemy__po.left + '%');
}

// Game over Result
function lose() {
    if (enemy.offsetTop + 150 >= carVal.offsetTop && enemy.offsetLeft == carVal.offsetLeft) {
        // Game over Results

        document.getElementById("carHome").classList.add('hide');
        document.getElementById("over").classList.remove('hide');
    }
}

// Check user lose
setInterval(function () {
    lose();
}, 10);

// Keyboard detector
document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case "ArrowLeft":
            if (car.left - 12 > 15) {
                car.left -= 12;
                carVal.style.setProperty('--left', car.left + '%');
            }
            break;
        case "ArrowRight":
            if (car.left + 12 <= 63) {
                car.left += 12;
                carVal.style.setProperty('--left', car.left + '%');
            }
            break;
    }
});