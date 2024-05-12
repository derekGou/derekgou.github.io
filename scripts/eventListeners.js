window.addEventListener("resize", function(){
    document.getElementsByTagName("loader")[0].style.display = "flex";
    resizeMyName();
    $('#introButton').hide();
    setTimeout(function(){
        document.getElementsByTagName("loader")[0].style.display = "none";
    }, 1000);
    setTimeout(function(){
        if (phase==0){
            $('#introButton').fadeIn(2000);
        }
    }, 1000);
    update();
});