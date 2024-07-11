var skills = [
    ["Python", 90],
    ["HTML", 95],
    ["CSS", 90],
    ["Javascript", 80],
    ["Typescript", 50],
    ["Processing", 60],
    ["C++", 10],
    ["ChartJS", 80],
    ["React", 70],
    ["Scrapy", 50],
    ["Tailwind", 10],
]
function renderSkills(){
    let root = document.getElementById("skillsList");
    root.replaceChildren(...[]);
    let num = 24
    if ($(window).width()<=900){
        num = 36
    }
    for (let i = 0; i<skills.length; i++){
        skillContent = skills[i];
        let skill = document.createElement("div");
        skill.classList.add("skill");
        let h3 = document.createElement("h3");
        h3.innerHTML = skillContent[0];
        h3.classList.add("infoSub");
        h3.classList.add("skillName");
        let pBar = document.createElement("div");
        pBar.classList.add("pBar");
        let pBarWhite = document.createElement("div");
        pBarWhite.classList.add("pBar");
        pBarWhite.classList.add("White");
        pBarWhite.style.width = (num*skillContent[1]/100)+'vw';
        pBar.appendChild(pBarWhite);
        skill.appendChild(h3);
        skill.appendChild(pBar);
        root.appendChild(skill);
    }
}
renderSkills();