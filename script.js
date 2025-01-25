const rightArrowUp = document.getElementById("rightUp");
const leftArrowUp = document.getElementById("leftUp");
let barUp = document.getElementById("barUp");
let currentLeftUp = 0;



const rightArrowDown = document.getElementById("rightDown");
const leftArrowDown = document.getElementById("leftDown");
let barDown = document.getElementById("barDown");
let currentLeftDown = 0;



document.addEventListener("DOMContentLoaded", function () {
    rightArrowUp.addEventListener("click", function () {
        const barWidth = 100;
        let orangeBarLeft = 33.4;

        if(orangeBarLeft + currentLeftUp <= barWidth){
            barUp.style.left = (currentLeftUp += orangeBarLeft) + "%";
        }
    });

    leftArrowUp.addEventListener("click", function(){
        const barLeftStart = 0;
        let orangeBarLeft = 33.4;

        if(currentLeftUp - orangeBarLeft >= barLeftStart){
            barUp.style.left = (currentLeftUp -= orangeBarLeft) + "%";
        }
    });

    rightArrowDown.addEventListener("click", function () {
        const barWidth = 100;
        let orangeBarLeft = 33.4;

        if(orangeBarLeft + currentLeftDown <= barWidth){
            barDown.style.left = (currentLeftDown += orangeBarLeft) + "%";
        }
    });

    leftArrowDown.addEventListener("click", function(){
        const barLeftStart = 0;
        let orangeBarLeft = 33.4;

        if(currentLeftDown - orangeBarLeft >= barLeftStart){
            barDown.style.left = (currentLeftDown -= orangeBarLeft) + "%";
        }
    });

});
