docList = [document.getElementById("hero"), document.getElementById("about"), document.getElementById("project0"), document.getElementById("project1"), document.getElementById("project2"), document.getElementById("hobby0"), document.getElementById("hobby1"), document.getElementById("footer")]
body = document.getElementsByTagName('body')[0];

function tops(){
    let t = document.body.scrollTop;
    if (!t){
        t = document.documentElement.scrollTop;
    }
    return t
}

function Move(num) {
    bool = true
    curr = Math.round(2*(tops()/$(window).height()))/2;
    if (curr%1){
        num=(num/Math.abs(num))*(Math.abs(num)-0.5)
    }
    docList[parseInt((curr+num))].scrollIntoView({ behavior: 'smooth', block: 'center' });
    bool = false
}
explore = document.querySelectorAll(".down");
explore.forEach(function(elem) {
    elem.addEventListener("click", function() {
        Move(1);
    });
});
upArrow = document.getElementById("upA");
upArrow.onclick = function(){
    Move(-1);
}
downArrow = document.getElementById("downA");
downArrow.onclick = function(){
    Move(1);
}

perma = document.getElementsByClassName("perma")[0];

if (tops()<0.5*$(window).height()){
    $(".perma").hide();
}
if (tops()>=($(document).height()-1.5*$(window).height())){
    $(".hold").hide();
    $(".perma").hide();
}

function redo(){
    if (tops()<0.5*$(window).height()){
        $(".perma").fadeOut(600);
        $(".hold").fadeIn();
    } else if (tops()>=($(document).height()-1.5*$(window).height())){
        $(".perma").fadeOut(600);
        $(".hold").fadeOut();
    } else {
        $(".perma").fadeIn(600);
        $(".hold").fadeIn();
    }
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    size = [0, 0];
    size[1] = $(window).height()/40;
    size[0] = $(window).width()/Math.round($(window).width()/size[1]);
    render();
    setup();
    updateIntro();
}

substance = document.getElementsByClassName("substance");
face = document.getElementsByClassName("face")[0];
proLo = document.getElementsByClassName("proLo");
p = document.getElementsByTagName("p");
hr = document.getElementsByTagName("hr");
function updateIntro(){
    if ($(window).height()>$(window).width()){
        face.style.width = "20dvh";
        face.style.margin = "-2dvh 1dvh 2dvh 1dvh";
        for (i=0; i<proLo.length; i++){
            proLo[i].style.width = "20dvh";
            proLo[i].style.margin = "0 1dvh 4dvh 1dvh";
        }
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
        face.style.width = "30dvh";
        face.style.margin = "0 4dvh 6dvh 0";
        for (i=0; i<proLo.length; i++){
            proLo[i].style.width = "30dvh";
            proLo[i].style.margin = "4dvh 4dvh 4dvh 0";
        }
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

window.onscroll = function(){
    redo()
}
window.onresize = function(){
    redo()
}
