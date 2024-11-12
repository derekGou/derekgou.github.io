var skillList = [
    ["ChartJS", "chartjs.png"],
    ["Clerk", "clerk.png"],
    ["CSS3", "css.png"],
    ["Firebase", "firebase.png"],
    ["Gemini", "gemini.webp"],
    ["Git", "git.png"],
    ["GitHub", "github.png"],
    ["HTML5", "html.png"],
    ["Javascript", "javascript.png"],
    ["jQuery", "jquery.svg"],
    ["Keras", "keras.png"],
    ["Material UI", "MUI.png"],
    ["Matplotlib", "matplotlib.png"],
    ["Mediapipe", "mediapipe.png"],
    ["NextJS", "next.png"],
    ["NodeJS", "node.png"],
    ["Numpy", "numpy.png"],
    ["OpenCV", "opencv.png"],
    ["Processing", "processing.png"],
    ["Pygame", "pygame.png"],
    ["Python", "python.png"],
    ["Pytorch Lightning", "pytorchlightning.png"],
    ["React", "react.svg"],
    ["React-PDF", "reactpdf.png"],
    ["Scrapy", "scrapy.png"],
    ["Stripe", "stripe.webp"],
    ["TailwindCSS", "tailwind.png"],
    ["Tensorflow", "tensorflow.png"],
    ["ThreeJS", "three.png"],
    ["Typescript", "typescript.png"],
    ["Vite", "vite.png"],
    ["Vercel", "vercel.svg"],
    ["VSCode", "vscode.png"],
]

function skillgrid(){
    let root = document.getElementById('skillgrid')
    root.innerHTML = '';
    for (let i = 0; i<skillList.length; i++){
        let div = document.createElement("div");
        div.classList.add("skillcontainer")
        let img = document.createElement("img");
        img.title = skillList[i][0]
        img.src = "images/skills/"+skillList[i][1]
        img.classList.add("skill")
        div.appendChild(img)
        root.appendChild(div)
    }
}