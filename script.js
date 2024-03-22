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
    if ($(window).height()>$(window).width()){
        for (i=0; i<hold.length; i++){
            hold[i].style.height = 0.8*$(window).height() + 'px';
            hold[i].style.width = $(window).width()-(0.2*$(window).height()) + 'px';
        }
    } else {
        for (i=0; i<hold.length; i++){
            hold[i].style.height = $(window).height()-(0.2*$(window).width()) + 'px';
            hold[i].style.width = 0.8*$(window).width() + 'px';
        }
    }
}
updateHold();

substance = document.getElementsByClassName("substance");
face = document.getElementsByClassName("face")[0];
proLo = document.getElementsByClassName("proLo")[0];
p = document.getElementsByTagName("p");
hr = document.getElementsByTagName("hr");
function updateIntro(){
    if ($(window).height()>$(window).width()){
        face.style.width = "20vh";
        face.style.margin = "0vh 1vh 4vh 1vh";
        proLo.style.width = "20vh";
        proLo.style.margin = "0 1vh 4vh 1vh";
        for (i=0; i<substance.length; i++){
            substance[i].style.flexDirection = "column";
        }
        for (i=0; i<p.length; i++){
            p[i].style.textAlign = "center";
        }
        for (i=0; i<hr.length; i++){
            hr[i].style.width = (0.8*$(window).width())-(0.2*$(window).height()) + 'px';
        }
    } else {
        face.style.width = "30vh";
        face.style.margin = "0 4vh 6vh 0";
        proLo.style.width = "30vh";
        proLo.style.margin = "4vh 4vh 4vh 0";
        for (i=0; i<substance.length; i++){
            substance[i].style.flexDirection = "row";
        }
        for (i=0; i<p.length; i++){
            p[i].style.textAlign = "left";
        }
        for (i=0; i<hr.length; i++){
            hr[i].style.width = (0.8*$(window).width())-(0.2*$(window).height()) + 'px';
        }
    }
}
updateIntro()

window.onresize = function(){
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    size = [0, 0];
    size[1] = $(window).height()/50;
    size[0] = $(window).width()/Math.round($(window).width()/size[1]);
    render();
    setup();
    updateHold();
    updateIntro()
};