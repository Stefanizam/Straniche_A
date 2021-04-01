// vfx Skills Hover actions
const wrapper = document.querySelectorAll('.wrapper');
const widthReset = function () {
    for (let i = 0 ; i < wrapper.length ; i++) {
        wrapper[i].style.width = '10%'; 
    };
};

for (let elem of wrapper) {
    elem.addEventListener('mouseenter', () => {

        widthReset();
        elem.style.width = "50%";
        elem.querySelector(".iconsContainer").style.opacity = "1";
        elem.querySelector(".skillsDesc").style.opacity = "1";
        elem.querySelector('video').play();

    });

    elem.addEventListener('mouseleave', () => {

        elem.querySelector(".iconsContainer").style.opacity = "0";
        elem.querySelector(".skillsDesc").style.opacity = "0";
        elem.querySelector('video').pause();
    });
}
// vfx Skills Hover - End



