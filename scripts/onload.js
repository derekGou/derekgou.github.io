document.getElementById('introButton').style.left = $('#name').offset().left+'px';
document.getElementById('introButton').style.top = $('#name').offset().top+'px';
skillgrid()
projects()
close()
$('#home').css('height', 'auto')
$('#profile').css('height', 'auto')
$('#projects').css('height', 'auto')
$('#socials').css('height', 'auto')
var heights = [
    $('#home').height()+parseFloat(getComputedStyle(document.documentElement).fontSize)*3,
    $('#profile').height(),
    $('#projects').height(),
    $('#socials').height()
]
$('#home').css('height', '0px')
$('#profile').css('height', '0px')
$('#projects').css('height', '0px')
$('#socials').css('height', '0px')
setPage(page)
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
