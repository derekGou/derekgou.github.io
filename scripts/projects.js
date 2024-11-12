var lst = [
    [
        "Warpz", "https://github.com/derekGou/neodev_project", "neodev.svg", 
        "Built with Vite, React TS, Tailwind, Firebase, ThreeJS, Python, Raspberry Pi, Flask", 
        "🥇@NeoDev WRDSB Summit. An automated photogammetry system, complete with a web app to operate the system.", 
        "Oct. 2024"
    ],[
        "WCI MApp", "https://wcimapp.vercel.app", "wcimapp.svg", 
        "Built with Vite, React TS, Tailwind, MappedIn", 
        "Indoor map and wayfinding web app for WCI, built to increase school accessibility for new staff and students. Built with React, TS, Tailwind, and MappedIn, in conjunction with school administration and MappedIn staff.", 
        "Oct. 2024 - Present"
    ],[
        "Take5", "https://devpost.com/software/placeholder-mw067j", "take5.jpg", 
        "Built with Python, Mediapipe, OpenCV, Pynput, Pystray, PyAutoGUI, Pygame, Groq, AWS", 
        "Tray app designed to aid users develop healthy browsing habits by monitoring the user through webcam monitoring. Submitted to Hack the North 2024.", 
        "Sep. 2024"
    ],[
        "cartaAI", "https://github.com/derekGou/cartaApp", "carta.svg", 
        "Built with NextJS, React JS, Tailwind, Firebase, Gemini, React-pdftotext", 
        "AI flashcards studying app compatible with any subject, including uploaded textbooks. Built for the Headstarter SWE Fellowship.", 
        "Sep. 2024"
    ],[
        "Alonzo", "https://alonzo-one.vercel.app/", "alonzoUsage.jpg", 
        "Built with NextJS, React JS, MUI, Tailwind, Firebase, Gemini", 
        "AI Chatbot aimed to help answer students' questions about postsecondary pathways, complete with custom auth system. Built for the Headstarter SWE Fellowship.", 
        "Aug. 2024"
    ],[
        "Pantry App", "https://pantry-app-phi.vercel.app", "pantry-app.jpg", 
        "Built with NextJS, React JS, MUI, Firebase", 
        "Simple shopping list app. Built for the Headstarter SWE Fellowship.", 
        "Aug. 2024"
    ],[
        "TouchUp", "https://dorahacks.io/buidl/13414", "touchUp.png", 
        "Built with Python, Mediapipe, OpenCV, Pynput, Pystray", 
        "🥇@JamHacks8. Tray app that enables the user to use their device using hand gestures, or attach an additional camera and use their computer as a touch screen.", 
        "Jun. 2024"
    ],[
        "Portfolio Website", "https://github.com/derekGou/derekgou.github.io/", "LogoPFJPG.jpg", 
        "Built with HTML, JS, Font Awesome, jQuery, Tailwind", 
        "The website that you are currently viewing! This is v3. All icons are provided by Font Awesome. All other visuals and components were built from scratch by me.", 
        "Oct. 2023-Present"
    ],[
        "WebStylus", "https://devpost.com/software/webstylus", "webStylus.png", 
        "Built with HTML, CSS, JS, Chrome Developer APIs", 
        "An accessiblility chrome extension allowing users to customize their browsing experience. Submitted to RythmHacks 2023.", 
        "Sep. 2023"
    ],[
        "Hoohle", "https://chromewebstore.google.com/detail/hoohle-search-google-sear/jmjckdfpipjhodceglcomigogkodllbe", "hoohle.jpg", 
        "Built with HTML, CSS, JS, Chrome Developer APIs", 
        "Google-buddy chrome extension, enabling advanced search and advanced image search features from any tab.", 
        "Sep. 2023"
    ],[
        "Emoɉion", "https://devpost.com/software/emo-ion", "emojion.jpg", 
        "Built with HTML, CSS, JS, AssemblyAI WebSocket API, Chrome Developer APIs", 
        "Emotion-recognition and annotation chrome extension. Submitted to Ignition Hacks 2023.", 
        "Aug. 2023"
    ],[
        "Phishy", "https://devpost.com/software/phishy/", "Phishy.jpg", 
        "Built with HTML, CSS, JS, Chrome Developer APIs, Tensorflow", 
        "🏆4th overall + best beginner hack @JamHacks7. Phishing email-flagging chrome extension, complete with custom-trained NLP model with 99.7% accuracy.", 
        "Jun. 2023"
    ],
];

function projects(){
    let root = document.getElementById('projectgrid')
    root.innerHTML = ''
    for (let i = 0; i<lst.length; i++){
        let div1 = document.createElement('div')
        div1.classList.add("projectbox")
        let img = document.createElement('img')
        img.classList.add("projectimg")
        img.src = "images/projects/"+lst[i][2]
        div1.appendChild(img)
        let div2 = document.createElement('div')
        div2.classList.add("projecttext")
        let a = document.createElement('a')
        a.href = lst[i][1]
        let text1 = document.createElement('p')
        text1.innerHTML = lst[i][0]
        a.appendChild(text1)
        div2.appendChild(a)
        let text2 = document.createElement('p')
        text2.innerHTML = lst[i][3]
        div2.appendChild(text2)
        let text3 = document.createElement('p')
        text3.innerHTML = lst[i][4]
        div2.appendChild(text3)
        let text4 = document.createElement('p')
        text4.innerHTML = lst[i][5]
        div2.appendChild(text4)
        div1.appendChild(div2)
        root.appendChild(div1)
    }
}