var canvas = document.querySelector('#canvas');
var c = canvas.getContext('2d');
var stars = [];
var num = 0;

function resizeCanvas(){
    num = Math.sqrt(Math.pow(2*$(window).height(), 2)+Math.pow($(window).width()/2, 2));
    canvas.style.top = (2*$(window).height()-num)+"px";
    canvas.style.left = ($(window).width()/2-num)+"px";
    canvas.width = num*2;
    canvas.height = num;
}
resizeCanvas();

function calculate(lst){
    return [lst[0]*Math.cos(lst[1])+num, -1*lst[0]*Math.sin(lst[1])+num];
}

function generate(){
    if (Math.random()>0.98&&phase==1){
        speed = (Math.random()+1)*0.0006;
        dist = Math.pow(Math.random(), 0.75)*(num-$(window).height())+($(window).height());
        stars.push([dist, 0, speed]);
    }
}

function render(){
    c.beginPath();
    c.clearRect(0, 0, num*2, num);
    generate();
    var stars1 = [];
    for (let i=0; i<stars.length; i++){
        c.fillStyle = "white";
        c.fillRect(calculate(stars[i])[0], calculate(stars[i])[1], 2, 2);
        stars[i][1]+=stars[i][2];
        if (stars[i][1]<=Math.PI){
            stars1.push(stars[i]);
        }
    }
    stars = stars1;
    setTimeout(function(){
        requestAnimationFrame(render)
    }, 15);
}

requestAnimationFrame(render);