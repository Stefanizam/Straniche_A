let skillsContainer = document.querySelector("#vfxSkillsContainer");
let skillsDiv = document.querySelectorAll('#vfxSkillsContainer>div');
const skillsHeight = document.querySelector('#vfxSkillsContainer>div').style.height;

for (let divche of skillsDiv) {
    divche.addEventListener('mouseenter', () => {

        divche.style.height = "240px";
        divche.querySelector("p").style.display = "flex";
        divche.querySelector("p").style.animation = "0.5s linear 0s 1 opacityAppear";

        switch (divche.id) {
            case "vfxPaint":
                divche.querySelector(".wrapper").style.backgroundImage = "url(../Straniche_A/Images/pntGIF.gif)"
                break;

            default:
                divche.querySelector(".wrapper").style.backgroundImage = "unset";
                divche.querySelector('video').style.height = "unset";
                divche.querySelector('video').play();
        }

    });

    divche.addEventListener('mouseleave', () => {

        divche.style.height = skillsHeight;
        divche.querySelector("p").style.display = "none";

        let hideVideo = function (image) {
            divche.querySelector(".wrapper").style.backgroundImage = `url(../Straniche_A/Images/${image})`;
            divche.querySelector('video').style.height = "0px";
            divche.querySelector('video').pause();
        }

        switch (divche.id) {
            case "vfxPaint":
                hideVideo("vfxPaintImage.jpg");
                break;
            case "vfxComp":
                hideVideo("compImage.jpg");
                break;
            case "vfxMotionTrack":
                hideVideo("motionTrackImage.jpg");
                break;
            case "vfxRoto":
                hideVideo("vfxRoto.jpg");
                break;
            case "vfxSimulation":
                hideVideo("motionTrackImage.jpg");
                break;
            case "vfx3D":
                hideVideo("vfxRoto.jpg");
                break;
        }
    });
}