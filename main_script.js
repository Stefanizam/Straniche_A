let skillsContainer = document.querySelector("#vfxSkillsContainer");
let skillsDiv = document.querySelectorAll('#vfxSkillsContainer>div');
const skillsHeight = document.querySelector('#vfxSkillsContainer>div').style.height;

for (let divche of skillsDiv) {
    divche.addEventListener('mouseenter', () => {

        divche.style.height = "240px";
        divche.querySelector("p").style.display = "flex";
        divche.querySelector("p").style.animation = "0.5s linear 0s 1 opacityAppear";

        divche.querySelector(".wrapper").style.backgroundImage = "unset";
        divche.querySelector('video').style.height = "unset";
        divche.querySelector('video').play();
    });

    divche.addEventListener('mouseleave', () => {

        divche.style.height = skillsHeight;
        divche.querySelector("p").style.display = "none";

        let hideVideo = function () {
            divche.querySelector('video').style.height = "0px";
            divche.querySelector('video').pause();
        }

        switch (divche.id) {
            case "vfxPaint":
                divche.querySelector(".wrapper").style.backgroundImage = "url(../Straniche_A/Images/pntImage.jpg";
                hideVideo();
                break;
            case "vfxComp":
                divche.querySelector(".wrapper").style.backgroundImage = "url(../Straniche_A/Images/compImage.jpg";
                hideVideo();
                break;
            case "vfxMotionTrack":
                divche.querySelector(".wrapper").style.backgroundImage = "url(../Straniche_A/Images/motionTrackImage.jpg"
                hideVideo();
                break;
            case "vfxRoto":
                divche.querySelector(".wrapper").style.backgroundImage = "url(../Straniche_A/Images/vfxRoto.jpg"
                hideVideo();
                break;
            case "vfxSimulation":
                divche.querySelector(".wrapper").style.backgroundImage = "url(../Straniche_A/Images/motionTrackImage.jpg"
                hideVideo();
                break;
            case "vfx3D":
                divche.querySelector(".wrapper").style.backgroundImage = "url(../Straniche_A/Images/motionTrackImage.jpg"
                hideVideo();
                break;
        }
    });
}