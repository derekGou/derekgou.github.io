body = document.getElementsByTagName('body')[0];
explore = document.getElementsByClassName('down')[0];
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

hold = document.getElementsByClassName("hold");
function updateHold(){
    for (i=0; i<hold.length; i++){
        hold[i].style.height = $(window).height()-(0.2*$(window).width()) + 'px';
        hold[i].style.width = 0.8*$(window).width() + 'px';
    }
}
updateHold();


window.onresize = function(){
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    size = [0, 0];
    size[1] = $(window).height()/50;
    size[0] = $(window).width()/Math.round($(window).width()/size[1]);
    render();
    setup();
    updateHold();
};
