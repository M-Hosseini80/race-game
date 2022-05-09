let car = { left: 0, right: 0 }
let car_css_value = document.querySelector(':root');
let lines__step = 0;
let lines = document.querySelectorAll('.lines');
let enemy = document.querySelectorAll('.enemy');
let enemy__po = { left: Math.floor(Math.random() * 4), eq: Math.floor(Math.random() * 3) }

function lose() {


}
function make__enemy() {

    clearInterval(t);
    enemy.forEach(function (i) {


        // i.classList.remove("hide");
        enemy__po.left = Math.floor(Math.random() * 4)
        i.style.setProperty('--en-top-plus', enemy__po.left + 2 + 's');
        if (enemy__po.left == 0) { enemy__po.left = 25 }
        if (enemy__po.left == 1) { enemy__po.left = 40 }
        if (enemy__po.left == 2) { enemy__po.left = 52 }
        if (enemy__po.left == 3) { enemy__po.left = 65 }
        i.setAttribute("Yposition", i.getBoundingClientRect().left)
        // enemy__po.top = Math.floor(Math.random() * 20) + 20
        i.style.setProperty('--en-left', enemy__po.left + '%');
        i.style.setProperty('--en-top', enemy__po.top + '%');
        // console.log(enemy__po.left)
        // car_css_value.style.setProperty('--left', enemy__po.left + '%');
    });

}
clearInterval(t);
var t = setInterval(make__enemy, 3000);

document.addEventListener('keydown', function (e) {
    // console.log(enemy)

    switch (e.key) {
        case "ArrowLeft":
            if (car.right <= 15) {
                car.left -= 5;
                car.right += 5;
                // console.log(car.right)
                car_css_value.style.setProperty('--left', car.left + '%');
                car_css_value.style.setProperty('--right', car.right + '%');

            }
            break;
        case "ArrowRight":

            if (car.left <= 15) {
                car.left += 5;
                car.right -= 5;
                // console.log(car.right)
                car_css_value.style.setProperty('--left', car.left + '%');
                car_css_value.style.setProperty('--right', car.right + '%');
            }
            break;
    }


});



