var bool = false
var canvas = document.querySelector('canvas');
canvas.width = $(window).width();
canvas.height = $(window).height();
size = [0, 0];
size[1] = $(window).height()/40;
size[0] = $(window).width()/Math.round($(window).width()/size[1]);

var phase = 0
var blinks = []

function setup(){
    for (var y = 0; y<$(window).height()/size[1]; y++) {
        var blinks1 = []
        for (var x = 0; x<($(window).width()/size[0]); x++) {
            blinks1.push(0)
        }
        blinks.push(blinks1)
    }
}
setup()

canvas.style.backgroundAttachment = "fixed";
var c = canvas.getContext('2d');
var base = [25, 75];
function colour(num2) {
    return (base[0]+(base[1]-base[0])*num2);
}

function fill(x, y){
    num = (x+y)/($(window).height()/size[1]+($(window).width()/size[0]));
    var colour1 = colour(num)+(100*Math.sin(blinks[y][x]))
    c.fillStyle = 'rgb('+(colour1)+', '+(colour1)+', '+(colour1)+')';
    c.fillRect(x*size[0], y*size[1], size[0]+1, size[1]+1);
}

function blink(){
    if (phase==0) {
        for (var y = 0; y<$(window).height()/size[1]; y++) {
            for (var x = 0; x<($(window).width()/size[0]); x++) {
                var rand = Math.random()
                if ((rand<0.00005 || blinks[y][x]!=0) && bool==false){
                    if (blinks[y][x]<=Math.PI){
                        blinks[y][x]+=0.25
                    } else {
                        blinks[y][x]=0
                    }
                    fill(x, y)
                    if (x>0){
                        if (y>0){
                            fill(x-1, y)
                            fill(x-1, y-1)
                            fill(x, y-1)
                        }
                        if ((y+1)<$(window).height()/size[1]){
                            fill(x-1, y+1)
                            fill(x, y+1)
                        }
                    }
                    if ((x+1)<$(window).width()/size[0]){
                        if (y>0){
                            fill(x+1, y)
                            fill(x+1, y-1)
                            fill(x, y-1)
                        }
                        if ((y+1)<$(window).height()/size[1]){
                            fill(x+1, y+1)
                            fill(x, y+1)
                        }
                    }
                }
            }
        }
        phase=1
    } else if (phase==2){
        phase=0
    } else {
        phase+=1
    }
    requestAnimationFrame(blink)
}

function render(){
    for (var y = 0; y<$(window).height()/size[1]; y++) {
        for (var x = 0; x<($(window).width()/size[0]); x++) {
            fill(x, y)
        }
    }
}
render()

requestAnimationFrame(blink)