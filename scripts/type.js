var descs = ['', 'Student', 'Software Developer', 'Community Leader'];
var currentIndex = 0;
var currentCharacter = 1;
var step = 0;
var currentLength = 0;
var typer = document.getElementById('typer');
var home = document.getElementById('home');
typer.innerHTML = 'I\'m a '+'_';
function animateTyper(){
    currentLength = descs[currentIndex].length;
    if (step==0){
        typer.innerHTML = 'I\'m a '+descs[currentIndex].slice(0, currentCharacter)+'_';
        currentCharacter += 1;
        if (currentCharacter>currentLength){
            step = 1;
            setTimeout(()=>{requestAnimationFrame(animateTyper)}, 100);
            return
        }
        setTimeout(()=>{requestAnimationFrame(animateTyper)}, 100);
        return
    } else if (step==1){
        step+=1;
        setTimeout(()=>{requestAnimationFrame(animateTyper)}, 2000);
        return
    } else if (step==2){
        typer.innerHTML = 'I\'m a '+descs[currentIndex].slice(0, currentCharacter)+'_';
        currentCharacter -= 1;
        if (currentCharacter==0){
            step = 0;
            currentIndex +=1;
            if (currentIndex==descs.length){
                currentIndex = 1;
            }
            setTimeout(()=>{requestAnimationFrame(animateTyper)}, 100);
            return
        }
        setTimeout(()=>{requestAnimationFrame(animateTyper)}, 100);
        return
    }
}
animateTyper();
