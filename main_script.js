let skillsContainer = document.querySelector("#vfxSkillsContainer");
let skillsDiv = document.querySelectorAll('#vfxSkillsContainer>div');

for (let divche of skillsDiv) {
    divche.addEventListener('mouseenter', () => {
        divche.style.height = "200px";
        divche.querySelector("p").style.display = "flex";
    });
}

for (let divche of skillsDiv) {
    divche.addEventListener('mouseleave', () => {
            divche.style.height = "80px";
            divche.querySelector("p").style.display = "none";
        });
}