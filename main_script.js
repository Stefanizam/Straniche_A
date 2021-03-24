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
        divche.querySelector("p").style.display = "inline";
        divche.querySelector("p").style.animation = "0.5s linear 0s 1 opacityAppear";
        divche.querySelector("p").style.backgroundImage = "../Images/pntImageB.jpg"
    });

    divche.addEventListener('mouseleave', () => {
        divche.style.height = skillsHeight;
        divche.querySelector("p").style.display = "none";
    });

}