var underButton = document.getElementById("under");
var SB1 = document.getElementById("b1");
var SB2 = document.getElementById("b2");
var SB3 = document.getElementById("b3");
var SB4 = document.getElementById("b4");
var overButton = document.getElementById("over");
var main = document.getElementById("main");
var id1 = null;
var text = document.getElementById("textholder1");
function fadein() {
    var transparency = 0;
    clearInterval(id1);
    id = setInterval(yum, 5);
    function yum() {
        if (transparency >= 0.5) {
            clearInterval(id1);
        } else {
            transparency+=0.01;
            overButton.style.opacity = transparency;
        }
    }
}
var id2 = null;
function fadeout() {
    var untransparency = 0.5;
    clearInterval(id2);
    id = setInterval(yuck, 5);
    function yuck() {
        if (untransparency <= 0) {
            clearInterval(id1);
        } else {
            untransparency-=0.01;
            overButton.style.opacity = untransparency;
        }
    }
}
function noOver() {
    overButton.style.display = "none";
}
under.addEventListener("click", underclick);
function underclick() {
    if (overButton.style.display!='grid'){
        overButton.style.display = "grid";
        fadein();
        setTimeout(function1B, 800)
        setTimeout(flyin1, 900);
        setTimeout(flyin2, 1000);
        setTimeout(flyin3, 1100);
        setTimeout(flyin4, 1200);
    }
}
main.onclick = function (event) {
    var myBox = document.getElementById('under');
    if (event.target != myBox) {
        if (overButton.style.display!='none'){
            setTimeout(flyout4, 100);
            setTimeout(flyout3, 200);
            setTimeout(flyout2, 300);
            setTimeout(flyout1, 400);
            setTimeout(function1A, 700);
            setTimeout(fadeout, 800);
            setTimeout(noOver, 1300);
        }
    }
}
var idA1 = null;
function flyin1() {
    var bottom = 40;
    var left = 0;
    clearInterval(idA1);
    id = setInterval(A1, 1.5);
    function A1() {
        if (bottom >= 67.71638598 && left >= 11.48050297) {
            clearInterval(idA1);
        } else {
            bottom+=0.5543277196;
            left+=0.2296100594;
            SB1.style.bottom = bottom + 'vh';
            SB1.style.left = left + 'vh';
        }
    }
}
var idA2 = null;
function flyin2() {
    var bottom = 40;
    var left = 0;
    clearInterval(idA2);
    id = setInterval(A2, 1.5);
    function A2() {
        if (bottom >= 51.48050297 && left >= 27.71638598) {
            clearInterval(idA2);
        } else {
            bottom+=0.2296100594;
            left+=0.5543277196;
            SB2.style.bottom = bottom + 'vh';
            SB2.style.left = left + 'vh';
        }
    }
}
var idA3 = null;
function flyin3() {
    var bottom = 40;
    var left = 0;
    clearInterval(idA3);
    id = setInterval(A3, 1.5);
    function A3() {
        if (bottom <= 28.51949703 && left >= 27.71638598) {
            clearInterval(idA3);
        } else {
            bottom-=0.2296100594;
            left+=0.5543277196;
            SB3.style.bottom = bottom + 'vh';
            SB3.style.left = left + 'vh';
        }
    }
}
var idA4 = null;
function flyin4() {
    var bottom = 40;
    var left = 0;
    clearInterval(idA4);
    id = setInterval(A4, 1.5);
    function A4() {
        if (bottom <= 12.28361402 && left >= 11.48050297) {
            clearInterval(idA4);
        } else {
            bottom-=0.5543277196;
            left+=0.2296100594;
            SB4.style.bottom = bottom + 'vh';
            SB4.style.left = left + 'vh';
        }
    }
}
var idB1 = null;
function flyout1() {
    var bottom = 67.71638598;
    var left = 11.48050297;
    clearInterval(idB1);
    id = setInterval(B1, 1.5);
    function B1() {
        if (bottom <= 40 && left <= 0) {
            clearInterval(idB1);
        } else {
            bottom-=0.5543277196;
            left-=0.2296100594;
            SB1.style.bottom = bottom + 'vh';
            SB1.style.left = left + 'vh';
        }
    }
}
var idB2 = null;
function flyout2() {
    var bottom = 51.48050297;
    var left = 27.71638598;
    clearInterval(idB2);
    id = setInterval(B2, 1.5);
    function B2() {
        if (bottom <= 40 && left <= 0) {
            clearInterval(idB2);
        } else {
            bottom-=0.2296100594;
            left-=0.5543277196;
            SB2.style.bottom = bottom + 'vh';
            SB2.style.left = left + 'vh';
        }
    }
}
var idB3 = null;
function flyout3() {
    var bottom = 28.51949703;
    var left = 27.71638598;
    clearInterval(idB3);
    id = setInterval(B3, 1.5);
    function B3() {
        if (bottom >= 40 && left <= 0) {
            clearInterval(idB3);
        } else {
            bottom+=0.2296100594;
            left-=0.5543277196;
            SB3.style.bottom = bottom + 'vh';
            SB3.style.left = left + 'vh';
        }
    }
}
var idB4 = null;
function flyout4() {
    var bottom = 12.28361402;
    var left = 11.48050297;
    clearInterval(idB4);
    id = setInterval(B4, 1.5);
    function B4() {
        if (bottom >= 40 && left <= 0) {
            clearInterval(idB4);
        } else {
            bottom+=0.5543277196;
            left-=0.2296100594;
            SB4.style.bottom = bottom + 'vh';
            SB4.style.left = left + 'vh';
        }
    }
}
function function1A() {
    SB1.style.display = "none";
    SB2.style.display = "none";
    SB3.style.display = "none";
    SB4.style.display = "none";
}
function function1B() {
    SB1.style.display = "block";
    SB2.style.display = "block";
    SB3.style.display = "block";
    SB4.style.display = "block";
}
function visitPage1(){
    window.location='https://chrome.google.com/webstore';
}
function visitPage2(){
    window.location='https://chrome.google.com/webstore';
}
function visitPage3(){
    window.location='https://chrome.google.com/webstore';
}
function visitPage4(){
    window.location='https://chrome.google.com/webstore';
}
function visitPage5(){
    window.location='https://chrome.google.com/webstore';
}
overButton.addEventListener("click", visitPage1);
SB1.addEventListener("click", visitPage2);
SB2.addEventListener("click", visitPage3);
SB3.addEventListener("click", visitPage4);
SB4.addEventListener("click", visitPage5);
