body = document.getElementsByTagName('body')[0];
explore = document.getElementsByClassName('down')[0];
subt = document.getElementsByClassName('subT')[0];
subt.style.fontSize = ((0.02*$(window).height())+(0.02*$(window).width()))+'px';
explore.onclick = function(){
    myMove();
}
explore.onmouseover = function(){

}
function myMove() {
    bool = true
    let id = null;
    let pos = 0;
    let inc = document.body.scrollTop;
    if (inc==0){
        inc = document.documentElement.scrollTop;
    }
    inc = $(window).height()-inc;
    let init = document.body.scrollTop;
    if (init==0){
        init = document.documentElement.scrollTop;
    }
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 101) {
            clearInterval(id);
            bool = false
        } else {
            pos++;
            document.body.scrollTop = init+inc*(pos/100);
            document.documentElement.scrollTop = init+inc*(pos/100);
        }
    }
}

businesshead = document.getElementById("businesshead");
mathhead = document.getElementById("mathhead");
softwarehead = document.getElementById("softwarehead");
educationhead = document.getElementById("educationhead");

explore1 = document.getElementsByClassName('down')[1];
explore1.onclick = function(){
    myMove1();
}
function myMove1() {
    let id = null;
    let pos = 0;
    let inc = document.body.scrollTop;
    if (inc==0){
        inc = document.documentElement.scrollTop;
    }
    inc = 4*$(window).height()-inc;
    let init = document.body.scrollTop;
    if (init==0){
        init = document.documentElement.scrollTop;
    }
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 101) {
            clearInterval(id);
        } else {
            pos++;
            document.body.scrollTop = $(window).height()+init+inc*(pos/100)-(1*$(window).height());
            document.documentElement.scrollTop = $(window).height()+init+inc*(pos/100)-(1*$(window).height());
        }
    }
}

h2 = document.getElementsByTagName("h2");
function updateFont(){
    for (i=0; i<h2.length; i++){
        h2[i].style.fontSize = (0.02*($(window).height()+$(window).width()))+'px';
    }
}
updateFont()

me = document.getElementsByClassName('me')[0];
box1 = document.getElementById("box1");
box2 = document.getElementById("box2");
box3 = document.getElementById("box3");
box4 = document.getElementById("box4");
aba = document.getElementById("aba");
abb = document.getElementById("abb");
contents = document.getElementsByClassName("content");
h4 = document.getElementsByTagName("h4");
blocks = document.getElementsByClassName("block");
rects = document.getElementsByClassName("rect");
business = document.getElementById("business");
math = document.getElementById("math");
software = document.getElementById("software");
education = document.getElementById("education");
lis = document.getElementsByTagName("li");
rows = document.getElementsByClassName("row");
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
        for (i=0; i<blocks.length; i++) {
            blocks[i].style.height = '0vh';
        }
    }
}
updateBox();

pdfholder = document.getElementById("pdfHolder");
certT = document.getElementsByClassName("certT");
embeds = document.getElementsByClassName("certjpg");
certsHold = document.getElementById("certsHold");
function updateCert(){
    pdfholder.style.width = ($(window).width()-(0.05*$(window).height()))+'px';
    for (i=0; i<embeds.length; i++) {
        wide = ($(window).width()-(0.2*$(window).height()))
        height = 0.8*$(window).height()
        if ((wide/height)>=(11/8.5)){
            embeds[i].style.width = ((height/8.5)*11)+'px';
            embeds[i].style.height = height+'px';
        } else {
            embeds[i].style.width = wide+'px';
            embeds[i].style.height = ((wide/11)*8.5)+'px';
        }
    }
    for (i=0; i<rows.length; i++) {
        rows[i].style.width = ($(window).width()-0.02*$(window).height())+'px';
    }
}
updateCert();

hold = document.getElementsByClassName("hold");
function updateHold(){
    for (i=0; i<hold.length; i++){
        hold[i].style.height = $(window).height()-(0.2*$(window).width()) + 'px';
        hold[i].style.width = 0.8*$(window).width() + 'px';
    }
}
updateHold();

function opac() {
    bool = true
    let id = null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 101) {
            pdfHolder.style.opacity = 1;
            bool = false
            clearInterval(id);
        } else {
            pos++;
            pdfHolder.style.opacity = pos/100;
        }
    }
}

document.getElementById("tab").onclick = function(){
    open("tab");
}
document.getElementById("web").onclick = function(){
    open("web");
}
document.getElementById("abi").onclick = function(){
    open("abi");
}
document.getElementById("pa").onclick = function(){
    open("pa");
}
document.getElementById("dev").onclick = function(){
    open("dev");
}
document.getElementById("css").onclick = function(){
    open("css");
}
document.getElementById("py").onclick = function(){
    open("py");
}
document.getElementById("ai").onclick = function(){
    open("ai");
}
document.getElementById("js").onclick = function(){
    open("js");
}
document.getElementById("sql").onclick = function(){
    open("sql");
}
document.getElementById("html").onclick = function(){
    open("html");
}
document.getElementById("dat").onclick = function(){
    open("dat");
}
document.getElementById("min").onclick = function(){
    open("min");
}
document.getElementById("pbi").onclick = function(){
    open("pbi");
}

document.getElementById("pdfHolder");
function open(str){
    pdfHolder.style.display = "flex";
    opac();
    myString = str+'cert';
    document.getElementById(myString).style.display = "block";
}

document.getElementById("closer").onclick = function(){
    pdfHolder.style.opacity = 0;
    pdfHolder.style.display = "none";
    certjpg = document.getElementsByClassName("certjpg");
    for (i=0; i<certjpg.length; i++){
        certjpg[i].style.display = "none";
    }
}

window.onresize = function(){
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    size = [0, 0];
    size[1] = $(window).height()/50;
    size[0] = $(window).width()/Math.round($(window).width()/size[1]);
    render();
    setup();
    updateBox();
    updateHold();
    updateFont();
    updateCert();
};