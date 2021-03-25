let skillsContainer = document.querySelector("#vfxSkillsContainer");
let skillsDiv = document.querySelectorAll('#vfxSkillsContainer>div');
const skillsHeight = document.querySelector('#vfxSkillsContainer>div').style.height;

let resetDivs = function () {  // Ignore for now, for later use
    for (let divche of skillsDiv) {
        divche.style.height = skillsHeight;
        divche.querySelector("p").style.display = "none";
    }
}


for (let divche of skillsDiv) {
    divche.addEventListener('mouseenter', () => {
        divche.style.height = "240px";
        divche.querySelector("p").style.display = "flex";
        divche.querySelector("p").style.animation = "0.5s linear 0s 1 opacityAppear";
        switch (divche.id) {
            case "vfxPaint":
                divche.querySelector(".wrapper").style.backgroundImage = "url(../Straniche_A/Images/pntGIF.gif)";
                break;
            case "vfxComp":
                divche.querySelector(".wrapper").style.backgroundImage = "url(../Straniche_A/Images/compGIF.gif)";
                break;
            case "vfxMotionTrack":
                divche.querySelector('video').style.height = "auto";
                // divche.querySelector('video').style.zIndex = "1";
                divche.querySelector('video').play();
                break;
        }
    });

    divche.addEventListener('mouseleave', () => {
        divche.style.height = skillsHeight;
        divche.querySelector("p").style.display = "none";
        switch (divche.id) {
            case "vfxPaint":
                divche.querySelector(".wrapper").style.backgroundImage = "url(../Straniche_A/Images/pntImage.jpg";
                break;
            case "vfxComp":
                divche.querySelector(".wrapper").style.backgroundImage = "url(../Straniche_A/Images/compImage.jpg)";
                break;
            case "vfxMotionTrack":
                divche.querySelector('video').style.height = "0px";
                // divche.querySelector('video').style.zIndex = "-1";
                divche.querySelector('video').pause();
                break;
        }
    });
}