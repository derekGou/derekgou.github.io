window.addEventListener("resize", function(){
    resizeMyName();
    update();
    $('#myInputautocomplete-list').css({
        "wdith": $('#myInput').width()+"px"
    });
    searchResize();
    contactLink();
    renderSkills();
});