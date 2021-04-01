// vfx Skills Hover actions
const skillsDiv = document.querySelectorAll('.wrapper');

for (let elem of skillsDiv) {

    elem.addEventListener('mouseenter', () => {

        elem.querySelector(".iconsContainer").style.opacity = "1";
        elem.querySelector(".skillsDesc").style.opacity = "1";
        elem.querySelector('.wrapperBkg').style.backgroundColor = "rgba(0,0,0,0.3)"
        elem.querySelector('video').play();

    });

    elem.addEventListener('mouseleave', () => {

        elem.querySelector(".iconsContainer").style.opacity = "0";
        elem.querySelector(".skillsDesc").style.opacity = "0";
        elem.querySelector('.wrapperBkg').style.backgroundColor = "rgba(0,0,0,0)"
        elem.querySelector('video').pause();
    });
}
// vfx Skills Hover - End



