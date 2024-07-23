$('#name').hide();
$('#introButton').hide();
setTimeout(function(){
    document.getElementsByTagName("loader")[0].style.display = "none";
}, 1000);
setTimeout(function(){
    $('#name').fadeIn(2000);
    $('#introButton').fadeIn(2000);
}, 1000);
for (let i=0; i<50; i++){
    speed = (Math.random()+1)*0.0006;
    dist = Math.pow(Math.random(), 0.75)*(num-$(window).height())+($(window).height());
    stars.push([dist, Math.PI*Math.random(), speed]);
}
searchResize();
contactLink();
$('#scroller').click(function(){
    for (let i=0; i<$(window).height(); i++){
        setTimeout(function(){window.scrollTo(0, i);}, i)
    }
})