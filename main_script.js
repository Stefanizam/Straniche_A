let skillsContainer = document.querySelector("#vfxSkillsContainer");
let skillsDiv = document.querySelectorAll('#vfxSkillsContainer>div');
const skillsHeight = document.querySelector('#vfxSkillsContainer>div').style.height;

let resetDivs = function () {  // For later use
    for (let divche of skillsDiv) {
        divche.style.height = skillsHeight;
        divche.querySelector("p").style.display = "none";
    }
}
for (let divche of skillsDiv) {
    let clickSwitch = 0;
    divche.addEventListener('mouseenter', () => {
        divche.style.height = "240px";
        divche.querySelector("p").style.display = "flex";
        clickSwitch = 1;
    });

    divche.addEventListener('mouseleave', () => {
        divche.style.height = skillsHeight;
        divche.querySelector("p").style.display = "none";
        clickSwitch = 0;
    });

}