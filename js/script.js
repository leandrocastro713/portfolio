let bkgSkills = document.getElementById("skills");
let skillHtml = document.getElementById("html-skill");
let skillCss = document.getElementById("css-skill");
let skillJs = document.getElementById("js-skill");
let skillPhotoshop = document.getElementById("photoshop-skill");
let skillAfter = document.getElementById("after-skill");
let skillPremiere = document.getElementById("premiere-skill");

// console.log(bkgSkills)

skillHtml.addEventListener("mouseenter",()=> {
    console.log('passou no skill html');
    bkgSkills.style.backgroundBlendMode="lighten";
    bkgSkills.style.backgroundImage="linear-gradient(180deg,#143752, #3aaaff) ,url('./img/html-5.png')";
    console.log(bkgSkills.classList);
})
skillHtml.addEventListener("mouseleave",()=> {
    console.log('saiu do html');
    bkgSkills.classList.add("skills-over");
    bkgSkills.style.backgroundImage="linear-gradient(180deg,#143752, var(--v-backgroung-color))";
    console.log(skillHtml.classList)
})

skillCss.addEventListener("mouseenter",()=> {
    console.log('passou no skill cs');
    bkgSkills.classList.add("skills-change-html");
    bkgSkills.style.backgroundBlendMode="lighten";
    bkgSkills.style.backgroundImage="linear-gradient(180deg,#143752, #3aaaff) ,url('./img/css-3.png')";
})
skillCss.addEventListener("mouseleave",()=> {
    console.log('saiu do css');
    bkgSkills.style.backgroundImage="linear-gradient(180deg,#143752, var(--v-backgroung-color))";
})

skillJs.addEventListener("mouseenter",()=> {
    console.log('passou no skill js');
    bkgSkills.style.backgroundBlendMode="lighten";
    bkgSkills.style.backgroundImage="linear-gradient(180deg,#143752, #3aaaff) ,url('./img/js.webp')";
})
skillJs.addEventListener("mouseleave",()=> {
    console.log('saiu do js');
    bkgSkills.style.backgroundImage="linear-gradient(180deg,#143752, var(--v-backgroung-color))";
})

skillPhotoshop.addEventListener("mouseenter",()=> {
    console.log('passou no skill html');
    bkgSkills.style.backgroundBlendMode="lighten";
    bkgSkills.style.backgroundImage="linear-gradient(180deg,#143752, #3aaaff) ,url('./img/photoshop.png')";
})
skillPhotoshop.addEventListener("mouseleave",()=> {
    console.log('saiu do html');
    bkgSkills.style.backgroundImage="linear-gradient(180deg,#143752, var(--v-backgroung-color))";
})

skillAfter.addEventListener("mouseenter",()=> {
    console.log('passou no after html');
    bkgSkills.style.backgroundBlendMode="lighten";
    bkgSkills.style.backgroundImage="linear-gradient(180deg,#143752, #3aaaff) ,url('./img/after.jpg')";
    // bkgSkills.style.backgroundImage="linear-gradient(180deg,#143752, #3aaaff), url('./img/after.jpg')";
})
skillAfter.addEventListener("mouseleave",()=> {
    console.log('saiu do after');
    bkgSkills.style.backgroundImage="linear-gradient(180deg,#143752, var(--v-backgroung-color))";
})

skillPremiere.addEventListener("mouseenter",()=> {
    console.log('passou no premiere');
    bkgSkills.style.backgroundBlendMode="lighten";
    bkgSkills.style.backgroundImage="linear-gradient(180deg,#143752, #3aaaff) ,url('./img/premiere.webp')";
})
skillPremiere.addEventListener("mouseleave",()=> {
    console.log('saiu do premiere');
    bkgSkills.style.backgroundImage="linear-gradient(180deg,#143752, var(--v-backgroung-color))";

})