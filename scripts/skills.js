var skills = [
    ["Github", "github.png"],
    ["VSCode", "vscode.png"],
    ["HTML", "html.png"],
    ["CSS", "css.png"],
    ["Javascript", "javascript.png"],
    ["jQuery", "jquery.svg"],
    ["Typescript", "typescript.png"],
    ["Vite", "vite.png"],
    ["React", "logo_dark.svg"],
    ["Next", "next.png"],
    ["Tailwind", "tailwind.png"],
    ["MUI", "mui.png"],
    ["Firebase", "firebase.png"],
    ["Python", "python.png"],
    ["Processing", "processing.png"],
    ["ChartJS", "chartjs.png"],
    ["OpenCV", "opencv.png"],
    ["Mediapipe", "mediapipe.png"],
    ["Tensorflow", "tensorflow.png"],
    ["Keras", "keras.png"],
    ["Scrapy", "scrapy.png"],
    ["Gemini", "gemini.webp"],
    ["Git", "git.png"],
    ["Node.js", "node.png"],
    ["Pygame", "pygame.png"],
    ["Stripe", "stripe.webp"],
    ["Clerk", "clerk.png"],
    ["react-pdf", "reactpdf.png"],
]

function renderSkills(){
    let root = document.getElementsByClassName("skillGrid")[0];
    root.innerHTML = '';
    for (let i=0; i<skills.length; i++){
        let [name, image] = skills[i]
        let skill = document.createElement("div")
        skill.classList.add("skill")
        let img = document.createElement("img")
        img.classList.add("skillImage")
        img.src = "images/skills/"+image;
        skill.appendChild(img)
        let skillName = document.createElement("div")
        skillName.classList.add("skillName")
        let p = document.createElement("p")
        p.innerHTML = name
        skillName.appendChild(p)
        skill.appendChild(skillName)
        root.appendChild(skill)
    }
}

renderSkills()