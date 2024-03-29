loader = document.getElementsByTagName("loader")[0];
setTimeout(function(){loader.remove()}, 1000);
docList = ["hero", "about", "project0", "project1", "project2", "hobby0", "hobby1", "award0", "award1", "award2", "award3", "footer"]
sectList = ["hero", "about", "project0", "hobby0", "award0"];
body = document.getElementsByTagName('body')[0];

navs = document.getElementsByClassName("nav");
for (let i = 0; i<navs.length; i++){
    navs[i].addEventListener("click", function(){
        console.log(sectList[i])
        document.getElementById(sectList[i]).scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
}

function tops(){
    let t = document.body.scrollTop;
    if (!t){
        t = document.documentElement.scrollTop;
    }
    return t
}

function Move(num) {
    curr = Math.round(2*(tops()/$(window).height()))/2;
    if (curr%1){
        num=(num/Math.abs(num))*(Math.abs(num)-0.5)
    }
    document.getElementById(docList[parseInt((curr+num))]).scrollIntoView({ behavior: 'smooth', block: 'center' });
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
if (tops()>=($(document).height()-1.25*$(window).height())){
    $(".hold").hide();
    $(".perma").hide();
}

substance = document.getElementsByClassName("substance");
face = document.getElementsByClassName("face")[0];
proLo = document.getElementsByClassName("proLo");
p = document.getElementsByTagName("p");
li = document.getElementsByTagName("li");
hr = document.getElementsByTagName("hr");
footer = document.getElementById("footer");
holder = document.getElementsByClassName("holder")[0];
function updateIntro(){
    if ($(window).height()>$(window).width()){
        holder.style.flexDirection = "column";
        face.style.width = "20dvh";
        face.style.margin = "-2dvh 1dvh 2dvh 1dvh";
        for (let i=0; i<proLo.length; i++){
            proLo[i].style.width = "20dvh";
            proLo[i].style.margin = "0 1dvh 4dvh 1dvh";
        }
        for (let i=0; i<substance.length; i++){
            substance[i].style.flexDirection = "column";
        }
        for (let i=0; i<p.length; i++){
            p[i].style.textAlign = "center";
        }
        for (let i=0; i<li.length; i++){
            li[i].style.textAlign = "center";
        }
        for (let i=0; i<hr.length; i++){
            hr[i].style.width = (0.8*$(window).width())-(0.2*$(window).height()) + 'px';
        }
    } else {
        holder.style.flexDirection = "row";
        face.style.width = "30dvh";
        face.style.margin = "0 4dvh 6dvh 0";
        for (let i=0; i<proLo.length; i++){
            proLo[i].style.width = "30dvh";
            proLo[i].style.margin = "4dvh 4dvh 4dvh 0";
        }
        for (let i=0; i<substance.length; i++){
            substance[i].style.flexDirection = "row";
        }
        for (let i=0; i<p.length; i++){
            p[i].style.textAlign = "left";
        }
        for (let i=0; i<li.length; i++){
            li[i].style.textAlign = "left";
        }
        for (let i=0; i<hr.length; i++){
            hr[i].style.width = (0.8*$(window).width())-(0.2*$(window).height()) + 'px';
        }
    }
}
updateIntro()

window.onscroll = function(){
    
    windowTop = tops()
    if (windowTop<0.5*$(window).height()){
        $(".perma").fadeOut(600);
        $(".hold").fadeIn(600);
    } else if (windowTop>=($(document).height()-1.25*$(window).height())){
        $(".perma").fadeOut(600);
        $(".hold").fadeOut(600);
    } else {
        $(".perma").fadeIn(600);
        $(".hold").fadeIn(600);
    }
}
window.onresize = function(){
    windowTop = tops()
    if (windowTop<0.5*$(window).height()){
        $(".perma").fadeOut(600);
        $(".hold").fadeIn();
    } else if (windowTop>=($(document).height()-1.5*$(window).height())){
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