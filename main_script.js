// vfx Skills Hover actions
const wrapper = document.querySelectorAll('.wrapper');
const widthReset = function () {
    for (let i = 0; i < wrapper.length; i++) {
        wrapper[i].style.width = '10%';
        wrapper[i].querySelector(".iconsContainer").style.opacity = "0";
        wrapper[i].querySelector(".skillsDesc").style.opacity = "0";
        wrapper[i].querySelector('span').style.fontSize = '0.75rem';
        wrapper[i].querySelector('span').innerText = 'Pnt';
        switch (wrapper[i].id) {
            case 'vfxPaint':
                wrapper[i].querySelector('span').innerText = 'Pnt';
                break;
            case 'vfxComp':
                wrapper[i].querySelector('span').innerText = 'comp';
                break;
            case 'vfxMotionTrack':
                wrapper[i].querySelector('span').innerText = 'CMM';
                break;
            case 'vfxRoto':
                wrapper[i].querySelector('span').innerText = 'Roto';
                break;
            case 'vfxSimulation':
                wrapper[i].querySelector('span').innerText = 'Sim';
                break;
            case 'vfx3D':
                wrapper[i].querySelector('span').innerText = '3D';
                break;
        }
        wrapper[i].querySelector('video').pause();
    };
};

for (let elem of wrapper) {

    elem.addEventListener('mousedown', () => {

    const titleChange = function () {
        switch (elem.id) {
            case 'vfxPaint':
                elem.querySelector('span').innerText = 'Paint';
                break;
            case 'vfxComp':
                elem.querySelector('span').innerText = 'Compositing';
                break;
            case 'vfxMotionTrack':
                elem.querySelector('span').innerText = 'Motion Tracking';
                break;
            case 'vfxRoto':
                elem.querySelector('span').innerText = 'RotoScoping';
                break;
            case 'vfxSimulation':
                elem.querySelector('span').innerText = 'Simulations';
                break;
            case 'vfx3D':
                elem.querySelector('span').innerText = '3D Modeling';
                break;
        }
    }

        widthReset();
        titleChange();
        elem.style.width = "50%";
        elem.querySelector(".iconsContainer").style.opacity = "1";
        elem.querySelector(".skillsDesc").style.opacity = "1";
        elem.querySelector('span').style.fontSize = '1.25rem';
        elem.querySelector('video').play();
    });
}
// vfx Skills Event - End



