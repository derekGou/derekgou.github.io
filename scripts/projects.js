var lst = [
    ["SproutHacks", "https://sprouthacks.ca", "images/Sprouthacks Logo PNG Transparent.jpg", ["hackathon", "finance", "nonprofit", "event org"], "As <b>co-founder and co-lead</b>, I have <b class = 'cool'>raised over $1,300</b> for the event, while also aiding with <b>graphic design</b>, <b>web-dev</b>, and <b>logistics</b>."],
    ["RythmHacks", "https://rythmhacks.ca", "images/rythm.jpg", ["hackathon", "finance", "nonprofit", "event org"], "As <b>finance team lead</b>, I manage RythmHacks's finance team in seeking sponsorships, budgeting, and applying for grants."],
    ["WRSSCC", "https://wrsscc.vercel.app/", "images/WRSSCC.jpg", ["chess", "finance", "event org"], "I am the <b>co-founder and finance director</b> of <b class = 'cool'>Waterloo's biggest high school chess tournament</b>. I'm responsible for managing sponsorships for the event."],
    ["WCI Math Team", "https://cemc.uwaterloo.ca/contests/ctmc.html", "images/ctmc.jpg", ["math"], "As a member of Waterloo Collegiate Institute's Math Team, I helped my team to a <b class = 'cool'>fourth-place finish nationally</b> at the <b>Canadian Team Mathematics Contest</b> this past year."],
    ["Portfolio Website", "https://github.com/derekGou/derekgou.github.io/", "images/LogoPFJPG.jpg", ["html+css", "js", "jquery", "webdev", "project"], "The <b class = 'cool'>website you're viewing</b> right now! Built from scratch with <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>, <b>jQuery</b>, and <b>Web3Forms</b>. All icons and canvases are <b class = 'cool'>designed by me</b>."],
    ["WebStylus", "https://devpost.com/software/webstylus", "images/webstylus.jpg", ["html+css", "js", "hackathon", "extension", "project"], "A <b>QOL Chrome Extension</b> with features such as Dark/Light Mode and AI alt-text generation. Submitted to RythmHacks 2023."],
    ["Emoɉion", "https://devpost.com/software/emo-ion", "images/emojion.jpg", ["html+css", "js", "hackathon", "extension", "project"], "A <b>speech-to-text Chrome extension</b> that <b>annotates the speaker's emotion</b> through an animated emoji."],
    ["Phishy", "https://devpost.com/software/phishy/", "images/Phishy.jpg", ["html+css", "js", "hackathon", "extension", "project", "ai"], "A <b>ML-powered Chrome Extension</b> that detects and flags phishing emails. Winner of <b><b class = 'cool'>Best Beginner Hack</b> and <b class = 'cool'>4th overall</b> at JamHacks7</b>."]
];
var searchTags = [];
function proj(input){
    let [name, url, logo, tags, description] = input
    let project = document.createElement("div");
    project.classList.add("project");
    let h3 = document.createElement("h3");
    let nodeh3 = document.createTextNode(name);
    h3.appendChild(nodeh3);
    h3.classList.add("notop");
    project.appendChild(h3);
    let wrap = document.createElement("a");
    wrap.classList.add("aprologo")
    wrap.style.textDecoration = "none";
    wrap.href = url;
    wrap.target = "_blank";
    let logoItem = document.createElement("img");
    logoItem.classList.add("prologo");
    logoItem.src = logo;
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
    searchTags.concat(tags);
}

for (let i = 0; i<lst.length; i++){
    proj(lst[i]);
}
$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".projectholder .project").filter(function() {
        $(this).toggle($(this).attr("filter").toLowerCase().indexOf(value) > -1);
    });
});