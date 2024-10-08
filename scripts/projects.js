var lst = [
    ["cartaAI", "https://github.com/derekGou/cartaApp", "carta.svg", ["js", "react", "nextjs", "tailwind", "firebase", "webdev", "ai", "react-pdf"], "<b>AI study buddy</b> that creates simple lessons on any topic imaginable, based on prompt, or an uploaded pdf. Built with NextJS, Firebase, Gemini, and Tailwind. Currently under development, hosted version is not updated due to use of Node 22.x (not lts). ", "Sep. 2024"],
    ["react-pdftotext", "https://github.com/derekGou/react-pdftotext", "npm.png", ["ts", "node", "react-pdf"], "Created temporary <b>package to patch script injection</b> bug for react-pdftotext. Changes were merged into current package.", "Sep. 2024"],
    ["Alonzo", "https://alonzo-one.vercel.app/", "alonzoUsage.jpg", ["js", "react", "nextjs", "mui", "firebase", "webdev", "ai"], "A <b>custom built AI chatbot</b> to provide advice for secondary students in Ontario regarding their futures. Built with NextJS, Firebase, Gemini and MUI for the <b class = 'cool'>Headstarter SWE Fellowship</b>.", "Aug. 2024"],
    ["Pantry App", "https://pantry-app-phi.vercel.app", "pantry-app.jpg", ["js", "react", "nextjs", "mui", "firebase", "webdev"], "A pantry app project that <b>tracks items and amounts and saves them to a database</b>. Built with NextJS, Firebase, and MUI for the <b class = 'cool'>Headstarter SWE Fellowship</b>.", "Aug. 2024"],
    ["TouchUp", "https://dorahacks.io/buidl/13414", "touchUp (1).png", ["python", "hackathon", "project", "ai"], "A project that can <b>turn any computer into a touch-screen</b>, or let users to <b>control their device using hand gestures</b>. Placed <b class = 'cool'>First Overall at JamHacks8</b>.", "Jun. 2024"],
    ["Portfolio Website", "https://github.com/derekGou/derekgou.github.io/", "LogoPFJPG.jpg", ["html+css", "js", "jquery", "webdev", "project"], "The <b class = 'cool'>website you're viewing</b> right now! Built from scratch with <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>, <b>jQuery</b>, and <b>Web3Forms</b>. All icons and canvases are <b class = 'cool'>designed by me</b>.", "Oct. 2023-Present"],
    ["WebStylus", "https://devpost.com/software/webstylus", "webStylus.png", ["html+css", "js", "hackathon", "extension", "project"], "A <b>QOL Chrome Extension</b> with features such as Dark/Light Mode and AI alt-text generation. Submitted to RythmHacks 2023.", "Sep. 2023"],
    ["Hoohle", "https://chromewebstore.google.com/detail/hoohle-search-google-sear/jmjckdfpipjhodceglcomigogkodllbe", "hoohle.jpg", ["html+css", "js", "extension", "project"], "An <b>advanced search chrome extension</b>, which also allows for advanced image and file search.", "Sep. 2023"],
    ["Emoɉion", "https://devpost.com/software/emo-ion", "emojion.jpg", ["html+css", "js", "hackathon", "extension", "project"], "A <b>speech-to-text Chrome extension</b> that <b>annotates the speaker's emotion</b> through an animated emoji.", "Aug. 2023"],
    ["Phishy", "https://devpost.com/software/phishy/", "Phishy.jpg", ["html+css", "js", "hackathon", "extension", "project", "ai"], "A <b>ML-powered Chrome Extension</b> that detects and flags phishing emails. Winner of <b><b class = 'cool'>Best Beginner Hack</b> and <b class = 'cool'>4th overall</b> at JamHacks7</b>.", "Jun. 2023"]
];

var tagStore = [];

function renderTags(textInput){
    let root = document.getElementsByClassName("myInput")[0];
    let div = document.createElement("div");
    div.classList.add("tagHolder");
    let h4 = document.createElement("h4");
    h4.innerHTML = textInput;
    h4.classList.add("ttag");
    h4.classList.add("searchItem");
    div.appendChild(h4);
    let closeButton = document.createElement("div");
    closeButton.classList.add("closeButton");
    closeButton.setAttribute("valeur", textInput);
    closeButton.innerHTML = "×";
    closeButton.addEventListener("click", function(){
        const index = tagStore.indexOf(this.getAttribute("valeur"));
        if (index!=-1){
            tagStore.splice(index, 1);
        }
        this.parentElement.remove();
    })
    div.appendChild(closeButton);
    root.append(div);
    tagStore.push(textInput);
}

var searchTags = [];
function proj(input){
    let [name, url, logo, tags, description, date] = input;
    let project = document.createElement("div");
    project.classList.add("project");
    let h3 = document.createElement("h3");
    let nodeh3 = document.createTextNode(name);
    h3.appendChild(nodeh3);
    h3.classList.add("nomarg");
    project.appendChild(h3);
    let wrap = document.createElement("a");
    wrap.classList.add("aprologo");
    wrap.style.textDecoration = "none";
    wrap.href = url;
    wrap.target = "_blank";
    let h3Date = document.createElement("h3");
    h3Date.classList.add("notop")
    let hl4 = document.createElement("hl4");
    let nodehl4 = document.createTextNode(date)
    hl4.appendChild(nodehl4)
    h3Date.appendChild(hl4)
    project.appendChild(h3Date)
    let logoItem = document.createElement("img");
    logoItem.classList.add("prologo");
    logoItem.src = "images/projects/"+logo;
    wrap.appendChild(logoItem);
    project.appendChild(wrap);
    let tagsList = document.createElement("div");
    tagsList.classList.add("tags");
    for (let i=0; i<tags.length; i++){
        let tag = document.createElement("div");
        tag.classList.add("tag");
        let h4 = document.createElement("h4");
        h4.innerHTML = tags[i];
        h4.classList.add("ttag");
        tag.appendChild(h4);
        tagsList.appendChild(tag);
    }
    project.appendChild(tagsList);
    let h5 = document.createElement("h5");
    h5.innerHTML = description;
    project.appendChild(h5);
    project.setAttribute("filter", [name].concat(tags, [description]).flat().toString().replaceAll("<b>", "").replaceAll("<b class = 'cool'>").replaceAll("</b>", ""));
    document.getElementsByClassName("projectholder")[0].appendChild(project);
    searchTags.push(...tags);
    project.setAttribute("searchTags", tags);
}

for (let i = 0; i<lst.length; i++){
    proj(lst[i]);
}
$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    if ($("#searchMenu")[0].value == "0"){
        $(".projectholder .project").filter(function() {
            const all = (arr, fn = Boolean) => arr.every(fn);
            let tempTags = tagStore.slice();
            tempTags.push(document.getElementById("myInput").value);
            let myBool = all(tempTags.map((x) => $(this).attr("searchTags").toString().indexOf(x)>-1));
            $(this).toggle(myBool);
        });
    } else {
        $(".projectholder .project").filter(function() {
            $(this).toggle($(this).attr("filter").toLowerCase().indexOf(value) > -1);
        });
    }
});

function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        if ($("#searchMenu")[0].value == "0"){
            var a, b, i, val = this.value;
            closeAllLists();
            if (!val) {
                return false;
            }
            currentFocus = -1;
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(a);
            for (i = 0; i < arr.length; i++) {
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    b = document.createElement("DIV");
                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    b.addEventListener("click", function(e) {
                        closeAllLists();
                        renderTags(this.getElementsByTagName("input")[0].value);
                        inp.value = "";
                    });
                    a.appendChild(b);
                }
            }
        }
    });
    inp.addEventListener("keydown", function(e) {
        if ($("#searchMenu")[0].value == "0"){
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                currentFocus++;
                addActive(x);
            } else if (e.keyCode == 38) {
                currentFocus--;
                addActive(x);
            } else if (e.keyCode == 13) {
                e.preventDefault();
                if (currentFocus > -1) {
                    if (x) x[currentFocus].click();
                }
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        $('#myInput').keyup();
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

function searchResize(){
    if ($(window).width()>$(window).height()){
        $('.searchHolder').css({
            "flex-direction": "row",
            "align-items": "center"
        });
        $('.select').css({
            "width": "25vh",
            "margin-right": "3vh"
        });
        $('.select-selected').css({
            "width": "23vh"
        });
    } else {
        $('.searchHolder').css({
            "flex-direction": "column",
            "align-items": "flex-start"
        });
        $('.select').css({
            "flex-grow": "1",
            "margin-right": "0"
        });
        $('.select-selected').css({
            "width": ($('.myInput').width()-0.03*$(window).height()+3.5)+"px",
        });
    }
}

autocomplete(document.getElementById("myInput"), [...new Set(searchTags)]);
searchResize();