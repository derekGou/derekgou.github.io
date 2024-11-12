window.addEventListener("resize", function(){
    $('#home').css('height', 'auto')
    $('#profile').css('height', 'auto')
    $('#projects').css('height', 'auto')
    $('#socials').css('height', 'auto')
    heights = [
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
    document.getElementById('introButton').style.left = $('#name').offset().left+'px';
    document.getElementById('introButton').style.top = $('#name').offset().top+'px';
});

$('#close').click(function(){close()})
$('#openProjects').click(function(){
    $('gridcontainer').css('display', 'flex')
    document.getElementById('gridtitle').innerHTML = 'Projects'
    $('#myProjects').css('display', 'flex')
})
$('#openSkills').click(function(){
    $('gridcontainer').css('display', 'flex')
    document.getElementById('gridtitle').innerHTML = 'Skills'
    $('#mySkills').css('display', 'flex')
})