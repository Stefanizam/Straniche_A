// vfx Skills Hover actions
let skillsContainer = document.querySelector("#vfxSkillsContainer");
let skillsDiv = document.querySelectorAll('#vfxSkillsContainer>div');
const skillsHeight = document.querySelector('#vfxSkillsContainer>div').style.height;

for (let divche of skillsDiv) {
    divche.addEventListener('mouseenter', () => {

        divche.style.height = "240px";
        divche.querySelector("p").style.display = "flex";
        divche.querySelector(".iconsContainer").style.display = "flex";        
        divche.querySelector("p").style.animation = "0.5s linear 0s 1 opacityAppear";

        divche.querySelector(".wrapper").style.backgroundImage = "unset";
        divche.querySelector('video').style.height = "unset";
        divche.querySelector('video').play();
    });

    divche.addEventListener('mouseleave', () => {

        divche.style.height = skillsHeight;
        divche.querySelector("p").style.display = "none";
        divche.querySelector(".iconsContainer").style.display = "none";

        let hideVideo = function (image) {
            divche.querySelector(".wrapper").style.backgroundImage = `url(../Straniche_A/Images/${image})`;
            divche.querySelector('video').style.height = "0px";
            divche.querySelector('video').pause();
        }

        switch (divche.id) {
            case "vfxPaint":
                hideVideo("vfxPaint.jpg");
                break;
            case "vfxComp":
                hideVideo("vfxComp.jpg");
                break;
            case "vfxMotionTrack":
                hideVideo("vfxCMM.jpg");
                break;
            case "vfxRoto":
                hideVideo("vfxRoto.jpg");
                break;
            case "vfxSimulation":
                hideVideo("vfxSim.jpg");
                break;
            case "vfx3D":
                hideVideo("vfx3D.jpg");
                break;
        }
    });
}
// vfx Skills Hover - End