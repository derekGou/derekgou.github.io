window.addEventListener("resize", function(){
    widths = [
        $('#home').width(),
        $('#profile').width(),
        $('#projects').width(),
        $('#socials').width()
    ]
    document.getElementById('introButton').style.left = $('#name').offset().left+'px';
    document.getElementById('introButton').style.top = $('#name').offset().top+'px';
});