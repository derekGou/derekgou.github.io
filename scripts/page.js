var page = "landing"
loaded = true

function setPage(pageName){
    if (loaded){
        loaded = false
        page = pageName
        switch (pageName){
            case "landing":
                $('#moon1').animate({opacity: "0"}, "slow");
                $('#moon2').animate({opacity: "0"}, "slow");
                $('#moon3').animate({opacity: "0"}, "slow");
                $('#moon4').animate({opacity: "0"}, "slow");
    
                setTimeout(
                    function(){
                        $('#home').animate({height: heights[0]+'px'}, "slow")
                        loaded = true
                    }, 1000)
                $('#profile').animate({height: "0"}, "slow")
                $('#projects').animate({height: "0"}, "slow")
                $('#socials').animate({height: "0"}, "slow")
                break
            case "home":
                requestAnimationFrame(animateTyper)
                $('#moon1').animate({opacity: "0.6"}, "slow");
                $('#moon2').animate({opacity: "0.2"}, "slow");
                $('#moon3').animate({opacity: "0.2"}, "slow");
                $('#moon4').animate({opacity: "0.2"}, "slow");
    
                setTimeout(
                    function(){
                        $('#home').animate({height: heights[0]+'px'}, "slow")
                        loaded = true
                    }, 1000)
                $('#profile').animate({height: "0"}, "slow")
                $('#projects').animate({height: "0"}, "slow")
                $('#socials').animate({height: "0"}, "slow")
                break
            case "profile":
                $('#moon1').animate({opacity: "0.2"}, "slow");
                $('#moon2').animate({opacity: "0.6"}, "slow");
                $('#moon3').animate({opacity: "0.2"}, "slow");
                $('#moon4').animate({opacity: "0.2"}, "slow");
    
                $('#home').animate({height: "0"}, "slow")
                setTimeout(
                    function(){
                        $('#profile').animate({height: heights[1]+'px'}, "slow")
                        loaded = true
                    }, 1000)
                $('#projects').animate({height: "0"}, "slow")
                $('#socials').animate({height: "0"}, "slow")
                break
            case "projects":
                $('#moon1').animate({opacity: "0.2"}, "slow");
                $('#moon2').animate({opacity: "0.2"}, "slow");
                $('#moon3').animate({opacity: "0.6"}, "slow");
                $('#moon4').animate({opacity: "0.2"}, "slow");
    
                $('#home').animate({height: "0"}, "slow")
                $('#profile').animate({height: "0"}, "slow")
                setTimeout(
                    function(){
                        $('#projects').animate({height: heights[2]+'px'}, "slow")
                        loaded = true
                    }, 1000)
                $('#socials').animate({height: "0"}, "slow")
                break
            case "socials":
                $('#moon1').animate({opacity: "0.2"}, "slow");
                $('#moon2').animate({opacity: "0.2"}, "slow");
                $('#moon3').animate({opacity: "0.2"}, "slow");
                $('#moon4').animate({opacity: "0.6"}, "slow");
    
                $('#home').animate({height: "0"}, "slow")
                $('#profile').animate({height: "0"}, "slow")
                $('#projects').animate({height: "0"}, "slow")
                setTimeout(
                    function(){
                        $('#socials').animate({height: heights[3]+'px'}, "slow")
                        loaded = true
                    }, 1000)
                break
            default:
                $('#moon1').animate({opacity: "0.2"}, "slow");
                $('#moon2').animate({opacity: "0.2"}, "slow");
                $('#moon3').animate({opacity: "0.2"}, "slow");
                $('#moon4').animate({opacity: "0.2"}, "slow");
    
                setTimeout(
                    function(){$('#home').animate({height: heights[0]+'px'}, "slow")
                    loaded = true
                }, 1000)
                $('#profile').animate({height: "0"}, "slow")
                $('#projects').animate({height: "0"}, "slow")
                $('#socials').animate({height: "0"}, "slow")
                break
        }
    }
}

$('#moon1').click(function(){
    setPage("home")
})
$('#moon2').click(function(){
    setPage("profile")
})
$('#moon3').click(function(){
    setPage("projects")
})
$('#moon4').click(function(){
    setPage("socials")
})