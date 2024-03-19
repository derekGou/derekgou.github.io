body = document.getElementsByTagName('body')[0];
explore = document.getElementsByClassName('down')[0];
explore.onclick = function(){
    Move(1, 1);
}
function Move(num, current) {
    bool = true
    let id = null;
    let pos = 0;
    let curr = document.body.scrollTop;
    if (curr==0){
        curr = document.documentElement.scrollTop;
    }
    let targ = 0
    if (current!=0){
        targ = current-1
    } else {
        targ = Math.round(curr/$(window).height())
    }
    let target = $(window).height()*(targ+num)
    let inc = target-curr
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == 101) {
            clearInterval(id);
            bool = false
        } else {
            pos++;
            let mult = Math.sin((Math.PI*(pos-50))/100)/2+0.5
            document.body.scrollTop = curr+(inc*mult);
            document.documentElement.scrollTop = curr+(inc*mult);
        }
    }
}

businesshead = document.getElementById("businesshead");
mathhead = document.getElementById("mathhead");
softwarehead = document.getElementById("softwarehead");
educationhead = document.getElementById("educationhead");

explore1 = document.getElementsByClassName('down')[1];
explore1.onclick = function(){
    Move(1, 3);
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