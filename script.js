body = document.getElementsByTagName('body')[0];
explore = document.getElementsByClassName('down')[0];
explore.onclick = function(){
    myMove();
};
subt = document.getElementsByClassName('subT')[0];
subt.style.fontSize = ((0.02*$(window).height())+(0.02*$(window).width()))+'px';
function myMove() {
    let id = null;
    let pos = 0;
    let inc = document.body.scrollTop;
    if (inc==0){
        inc = document.documentElement.scrollTop;
    }
    inc = $(window).height()-inc
    let init = document.body.scrollTop;
    if (init==0){
        init = document.documentElement.scrollTop;
    }
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 251) {
            clearInterval(id);
        } else {
            pos++;
            document.body.scrollTop = init+inc*(1.01*(1/(1+(Math.exp(1)**(-(Math.log(1/40401)/(1000*Math.log(Math.exp(1))))*(-4*pos)+(Math.log(201)/Math.log(Math.exp(1)))))))-0.005);
            document.documentElement.scrollTop = init+inc*(1.01*(1/(1+(Math.exp(1)**(-(Math.log(1/40401)/(1000*Math.log(Math.exp(1))))*(-4*pos)+(Math.log(201)/Math.log(Math.exp(1)))))))-0.005);
        }
    }
}

me = document.getElementsByClassName('me')[0];


box1 = document.getElementById("box1");
box2 = document.getElementById("box2");
box3 = document.getElementById("box3");
box4 = document.getElementById("box4");
aba = document.getElementById("aba");
abb = document.getElementById("abb");
contents = document.getElementsByClassName("content");
h4 = document.getElementsByTagName("h4");
businesshead = document.getElementById("businesshead");
mathhead = document.getElementById("mathhead");
softwarehead = document.getElementById("softwarehead");
educationhead = document.getElementById("educationhead");
blocks = document.getElementsByClassName("block");
rects = document.getElementsByClassName("rect");
business = document.getElementById("business");
math = document.getElementById("math");
software = document.getElementById("software");
education = document.getElementById("education");
lis = document.getElementsByTagName("li");
function updateBox(){
    if ($(window).width()>$(window).height()){
        me.style.position = "absolute";
        box1.style.width = (0.395*$(window).width())+'px';
        box1.style.right = (0.49*$(window).width())+'px';
        box1.style.top = (1*$(window).height())+'px';
        box1.style.borderTop = ((0.35*$(window).height())-(0.03*$(window).width()))+'px solid rgba(126, 20, 135, 0.4)';
        box1.style.borderLeft = (0.075*$(window).width())+'px solid rgba(126, 20, 135, 0.4)';
        box1.style.height = (0.15*$(window).height()-0.01*$(window).width())+'px';
        box2.style.width = (0.395*$(window).width())+'px';
        box2.style.left = (0.49*$(window).width())+'px';
        box2.style.top = (1*$(window).height())+'px';
        box2.style.borderTop = ((0.35*$(window).height())-(0.03*$(window).width()))+'px solid rgba(102, 232, 78, 0.4)';
        box2.style.borderRight = (0.075*$(window).width())+'px solid rgba(102, 232, 78, 0.4)';
        box2.style.height = (0.15*$(window).height()-0.01*$(window).width())+'px';
        box3.style.width = (0.395*$(window).width())+'px';
        box3.style.right = (0.49*$(window).width())+'px';
        box3.style.top = (1.5*$(window).height())+'px';
        box3.style.borderBottom = ((0.35*$(window).height())-(0.03*$(window).width()))+'px solid rgba(50, 125, 250, 0.4)';
        box3.style.borderLeft = (0.075*$(window).width())+'px solid rgba(50, 125, 250, 0.4)';
        box3.style.height = (0.15*$(window).height()-0.01*$(window).width())+'px';
        box4.style.width = (0.395*$(window).width())+'px';
        box4.style.left = (0.49*$(window).width())+'px';
        box4.style.top = (1.5*$(window).height())+'px';
        box4.style.borderBottom = ((0.35*$(window).height())-(0.03*$(window).width()))+'px solid rgba(250, 160, 56, 0.4)';
        box4.style.borderRight = (0.075*$(window).width())+'px solid rgba(250, 160, 56, 0.4)';
        box4.style.height = (0.15*$(window).height()-0.01*$(window).width())+'px';
        me.style.width = (0.77*$(window).width())+'px';
        aba.style.height = (0.15*$(window).height()-0.01*$(window).width())+'px';
        abb.style.height = (0.15*$(window).height()-0.01*$(window).width())+'px';
        for (i=0; i<contents.length; i++) {
            contents[i].style.height = ((0.35*$(window).height())-(0.03*$(window).width()))+'px';
        }
        for (i=0; i<h4.length; i++) {
            h4[i].style.writingMode = 'vertical-rl';
        }
        for (i=0; i<blocks.length; i++) {
            blocks[i].style.height = '15vh';
        }
        businesshead.style.rotate = "180deg";
        softwarehead.style.rotate = "180deg";
        business.style.flexDirection = "row";
        math.style.flexDirection = "row-reverse";
        software.style.flexDirection = "row";
        education.style.flexDirection = "row-reverse";
        businesshead.style.width = "7.5vw";
        mathhead.style.width = "7.5vw";
        softwarehead.style.width = "7.5vw";
        educationhead.style.width = "7.5vw";
        businesshead.style.height = "inherit";
        mathhead.style.height = "inherit";
        softwarehead.style.height = "inherit";
        educationhead.style.height = "inherit";
        for (i=0; i<lis.length; i++) {
            lis[i].style.fontSize = (0.01*$(window).width()+0.005*$(window).height())+'px';
        }
    } else {
        me.style.width = (0.94*$(window).width())+'px';
        me.style.position = "static";
        box1.style.width = (0.47*$(window).width())+'px';
        box1.style.right = (0.49*$(window).width())+'px';
        box1.style.top = (1*$(window).height())+'px';
        box1.style.borderTop = ((0.35*$(window).height())-(0.03*$(window).width()))+'px solid rgba(126, 20, 135, 0.4)';
        box1.style.borderLeft = '0px';
        box1.style.height = (0.15*$(window).height()-0.01*$(window).width())+'px';
        box2.style.width = (0.47*$(window).width())+'px';
        box2.style.left = (0.49*$(window).width())+'px';
        box2.style.top = (1*$(window).height())+'px';
        box2.style.borderTop = ((0.35*$(window).height())-(0.03*$(window).width()))+'px solid rgba(102, 232, 78, 0.4)';
        box2.style.borderRight = '0px';
        box2.style.height = (0.15*$(window).height()-0.01*$(window).width())+'px';
        box3.style.width = (0.47*$(window).width())+'px';
        box3.style.right = (0.49*$(window).width())+'px';
        box3.style.top = (1.5*$(window).height())+'px';
        box3.style.borderBottom = ((0.35*$(window).height())-(0.03*$(window).width()))+'px solid rgba(50, 125, 250, 0.4)';
        box3.style.borderLeft = '0px';
        box3.style.height = (0.15*$(window).height()-0.01*$(window).width())+'px';
        box4.style.width = (0.47*$(window).width())+'px';
        box4.style.left = (0.49*$(window).width())+'px';
        box4.style.top = (1.5*$(window).height())+'px';
        box4.style.borderBottom = ((0.35*$(window).height())-(0.03*$(window).width()))+'px solid rgba(250, 160, 56, 0.4)';
        box4.style.borderRight = '0px';
        box4.style.height = (0.15*$(window).height()-0.01*$(window).width())+'px';
        for (i=0; i<contents.length; i++) {
            contents[i].style.height = ((0.35*$(window).height())-(0.03*$(window).width()))+'px';
        }
        for (i=0; i<h4.length; i++) {
            h4[i].style.writingMode = 'horizontal-tb';
        }
        for (i=0; i<blocks.length; i++) {
            blocks[i].style.height = '0';
        }
        businesshead.style.rotate = "0deg";
        softwarehead.style.rotate = "0deg";
        aba.style.height = (0.10*$(window).height()-0.01*$(window).width())+'px';
        abb.style.height = (0.10*$(window).height()-0.01*$(window).width())+'px';
        business.style.flexDirection = "column";
        math.style.flexDirection = "column";
        software.style.flexDirection = "column-reverse";
        education.style.flexDirection = "column-reverse";
        businesshead.style.width = "100%";
        mathhead.style.width = "100%";
        softwarehead.style.width = "100%";
        educationhead.style.width = "100%";
        businesshead.style.height = "7.5vh";
        mathhead.style.height = "7.5vh";
        softwarehead.style.height = "7.5vh";
        educationhead.style.height = "7.5vh";
        for (i=0; i<lis.length; i++) {
            lis[i].style.fontSize = '1.5vh';
        }
    }
}
updateBox()

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
fillrands();
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
backColor();
render();
window.onresize = function(){
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    size = [0, 0];
    size[1] = $(window).height()/12;
    size[0] = $(window).width()/Math.round($(window).width()/size[1]);
    fillrands();
    render();
    updateBox();
    subt.style.fontSize = ((0.02*$(window).height())+(0.02*$(window).width()))+'px';
};
body.onscroll = function(){
    backColor();
};
function backColor(){
    if (document.body.scrollTop<=$(window).height() || document.documentElement.scrollTop<=$(window).height()){
        if (document.body.scrollTop!=0){
            base = [[56-8*(document.body.scrollTop/$(window).height()), 123-75*(document.body.scrollTop/$(window).height()), 55-7*(document.body.scrollTop/$(window).height())], [20+70*(document.body.scrollTop/$(window).height()), 151-61*(document.body.scrollTop/$(window).height()), 189-99*(document.body.scrollTop/$(window).height())]];
        } else {
            base = [[56-8*(document.documentElement.scrollTop/$(window).height()), 123-75*(document.documentElement.scrollTop/$(window).height()), 55-7*(document.documentElement.scrollTop/$(window).height())], [20+70*(document.documentElement.scrollTop/$(window).height()), 151-61*(document.documentElement.scrollTop/$(window).height()), 189-99*(document.documentElement.scrollTop/$(window).height())]];
        }
    } else {
        base = [[78, 78, 78], [120, 120, 120]];
    }
    render();
};