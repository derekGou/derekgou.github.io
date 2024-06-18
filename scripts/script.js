var showing = [0, 0, 0];
$('#projects').click(function(){
    clear();
    showing[0] = 1;
    setTimeout(function(){
        projects();
    }, 1000);
});
$('#resume').click(function(){
    clear();
    showing[1] = 1;
    setTimeout(function(){
        resume();
    }, 1000);
});
$('#contact').click(function(){
    clear();
    showing[2] = 1;
    setTimeout(function(){
        contact();
    }, 1000);
});
function update(){
    resume();
    contact();
    projects();
}
function projects(){
    if (showing[0]==0){
        $('#projectHold').animate({
            "opacity": "0"
        }, "slow");
        setTimeout(function(){
            $('#projectHold').css({
                "display": "none"
            });
        }, 1000);
    } else {
        $('#projectHold').css({
            "display": "flex"
        });
        $('#projectHold').animate({
            "opacity": "1"
        }, "slow");
    }
    searchResize();
}
function resume(){
    if (showing[1]==0){
        $('#page1').animate({
            "opacity": "0"
        }, "slow");
        $('#page2').animate({
            "opacity": "0"
        }, "slow");
        $('#page3').animate({
            "opacity": "0"
        }, "slow");
        $('.downloadsHolder').animate({
            "opacity": "0"
        }, "slow");
        setTimeout(function(){
            $('#page1').css({
                "display": "none",
                "opacity": "0"
            });
            $('#page2').css({
                "display": "none",
                "opacity": "0"
            });
            $('#page3').css({
                "display": "none",
                "opacity": "0"
            });
            $('#resumeHold').css({
                "display": "none"
            });
        }, 1000);
    } else {
        $('.page').css({
            "display": "block"
        });
        $('.page').animate({
            "opacity": "1"
        }, "slow");
        $('#resumeHold').css({
            "display": "flex", 
            "height": "100vh", 
            "width": "100vw", 
            "top": "0", 
            "left": "0"
        });
        $('.downloadsHolder').animate({
            "opacity": "1"
        }, "slow");
        $('#resumeHold').animate({
            "opacity": "1"
        }, "slow");
    }
}
function contact(){
    if (showing[2]==0){
        $('#contactHold').animate({
            "opacity": "0"
        }, "slow")
        setTimeout(function(){
            $('#contactHold').css({
                "display": "none"
            })
        }, 1000)
    } else {
        $('#contactHold').css({
            "display": "flex"
        })
        $('#contactHold').animate({
            "opacity": "1"
        }, "slow")
        if ($(window).height()<$(window).width()){
            $('.formwidth').css({
                "width": "80vh"
            })
        } else {
            $('.formwidth').css({
                "width": "80vw"
            })
        }
    }
}
$('.backButton').click(function(){
    unclear();
});
items = ['#page1', '#page2', '#page3'];
function clear(){
    update();
    $('background1').css("display", "block");
    $('.backButton').css("display", "flex");
    $('background1').animate({
        "opacity": "1"
    }, "slow");
    setTimeout(function(){
        $('#canvas').css({
            "opacity": "0",
            "z-index": "11"
        });
        $('#canvas').animate({
            "opacity": "1"
        }, "slow");
        $('.backButton').animate({
            "opacity": "1"
        }, "slow");
    }, 1000);
}
function unclear(){
    showing = [0, 0, 0];
    update();
    $('#canvas').css({
        "opacity": "0",
        "z-index": "-1"
    });
    $('#canvas').animate({
        "opacity": "1"
    }, "slow");
    $('.backButton').animate({
        "opacity": "0"
    }, "slow");
    setTimeout(function(){
        $('background1').animate({
            "opacity": "0"
        }, "slow");
    }, 1000);
    setTimeout(function(){
        $('background1').css("display", "none");
        $('.backButton').css("display", "none");
    }, 1500);
}
function contactLink(){
    if ($(window).width()<$(window).height()){
        document.getElementsByClassName("contactLinks")[0].style.scale = "0.75";
        $(".contactLinks").css({
            "bottom": "2.5vh",
            "right": $(window).width()/2+'px',
            "transform": "translateX(-62.5%)"
        })
    } else {
        document.getElementsByClassName("contactLinks")[0].style.scale = "1";
        $(".contactLinks").css({
            "bottom": "5vh",
            "right": "auto",
            "transform": "translateX(-50%)"
        })
    }
}