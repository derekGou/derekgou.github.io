body = document.getElementsByTagName('body')[0]
explore = document.getElementsByClassName('down')[0]
explore.onclick = function(){
    myMove()
};
function myMove() {
    let id = null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 251) {
            clearInterval(id);
        } else {
            pos++;
            document.body.scrollTop = $(window).height()*(1.01*(1/(1+(Math.exp(1)**(-(Math.log(1/40401)/(1000*Math.log(Math.exp(1))))*(-4*pos)+(Math.log(201)/Math.log(Math.exp(1)))))))-0.005);
            document.documentElement.scrollTop = $(window).height()*(1.01*(1/(1+(Math.exp(1)**(-(Math.log(1/40401)/(1000*Math.log(Math.exp(1))))*(-4*pos)+(Math.log(201)/Math.log(Math.exp(1)))))))-0.005);
        }
    }
}

var canvas = document.querySelector('canvas');
canvas.width = $(window).width();
canvas.height = $(window).height();
size = [0, 0];
size[1] = $(window).height()/12;
size[0] = $(window).width()/Math.round($(window).width()/size[1]);
canvas.style.backgroundAttachment = "fixed";
var c = canvas.getContext('2d');
var base = [[56, 123, 55], [20, 151, 189]];
var rands = [];
function fillrands(){
    rands = [];
    for (var y = 0; y<12; y++) {
         var rand = [];
        for (var x = 0; x<($(window).width()/size[0]); x++) {
            rand.push(8*(Math.random()-0.5));
        }
        rands.push(rand);
    }
}
fillrands()
function colour(num1, num2, x, y) {
    return (247/255)*(base[0][num1]+(base[1][num1]-base[0][num1])*num2)+4+rands[y][x];
}
function render(){
    for (var y = 0; y<12; y++) {
        for (var x = 0; x<($(window).width()/size[0]); x++) {
            num = (x+y)/(12+($(window).width()/size[0]));
            c.fillStyle = 'rgb('+(colour(0, num, x, y))+', '+(colour(1, num, x, y))+', '+(colour(2, num, x, y))+')';
            c.fillRect(x*size[0], y*size[1], size[0]+1, size[1]+1);
        }
    }
}
backColor()
render()
window.onresize = function(){
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    size = [0, 0];
    size[1] = $(window).height()/12;
    size[0] = $(window).width()/Math.round($(window).width()/size[1]);
    fillrands();
    render();
};
body.onscroll = function(){
    backColor();
};
function backColor(){
    console.log(base)
    if (document.body.scrollTop<=$(window).height() || document.documentElement.scrollTop<=$(window).height()){
        if (document.body.scrollTop!=0){
            base = [[56-8*(document.body.scrollTop/$(window).height()), 123-75*(document.body.scrollTop/$(window).height()), 55-7*(document.body.scrollTop/$(window).height())], [20+70*(document.body.scrollTop/$(window).height()), 151-61*(document.body.scrollTop/$(window).height()), 189-99*(document.body.scrollTop/$(window).height())]];
        } else {
            base = [[56-8*(document.documentElement.scrollTop/$(window).height()), 123-75*(document.documentElement.scrollTop/$(window).height()), 55-7*(document.documentElement.scrollTop/$(window).height())], [20+70*(document.documentElement.scrollTop/$(window).height()), 151-61*(document.documentElement.scrollTop/$(window).height()), 189-99*(document.documentElement.scrollTop/$(window).height())]];
        }
    } else {
        base = [[78, 78, 78], [120, 120, 120]]
    }
    render()
};