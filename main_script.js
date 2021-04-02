const titleChange = function (element) {
    switch (element.id) {
        case 'vfxPaint':
            element.querySelector('span').innerText = 'Paint';
            break;
        case 'vfxComp':
            element.querySelector('span').innerText = 'Compositing';
            break;
        case 'vfxMotionTrack':
            element.querySelector('span').innerText = 'Motion Tracking';
            break;
        case 'vfxRoto':
            element.querySelector('span').innerText = 'RotoScoping';
            break;
        case 'vfxSimulation':
            element.querySelector('span').innerText = 'Simulations';
            break;
        case 'vfx3D':
            element.querySelector('span').innerText = '3D Modeling';
            break;
        case 'graphicsPrint':
            element.querySelector('span').innerText = 'Print Design';
            break;
        case 'graphicsUI':
            element.querySelector('span').innerText = 'UI/Web Design';
            break;
        case 'graphicsMotion':
            element.querySelector('span').innerText = 'Motion Graphics';
            break;
        case 'graphicsVideo':
            element.querySelector('span').innerText = 'Video Editing';
            break;
    }
}

const widthReset = function (element) {
    for (let i = 0; i < element.length; i++) {
        element[i].style.width = '10%';
        element[i].querySelector(".iconsContainer").style.opacity = "0";
        element[i].querySelector(".skillsDesc").style.opacity = "0";
        element[i].querySelector('span').style.fontSize = '0.75rem';
        element[i].querySelector('video').pause();
        switch (element[i].id) {
            case 'vfxPaint':
                element[i].querySelector('span').innerText = 'Pnt';
                break;
            case 'vfxComp':
                element[i].querySelector('span').innerText = 'comp';
                break;
            case 'vfxMotionTrack':
                element[i].querySelector('span').innerText = 'CMM';
                break;
            case 'vfxRoto':
                element[i].querySelector('span').innerText = 'Roto';
                break;
            case 'vfxSimulation':
                element[i].querySelector('span').innerText = 'Sim';
                break;
            case 'vfx3D':
                element[i].querySelector('span').innerText = '3D';
                break;
            case 'graphicsPrint':
                element[i].querySelector('span').innerText = 'Print';
                break;
            case 'graphicsUI':
                element[i].querySelector('span').innerText = 'UI/Web';
                break;
            case 'graphicsMotion':
                element[i].querySelector('span').innerText = 'Motion';
                break;
            case 'graphicsVideo':
                element[i].querySelector('span').innerText = 'Video';
                break;
        }
    };
};

// vfx Skills Events
const wrapper = document.querySelectorAll('.wrapper');

for (let elem of wrapper) {

    elem.addEventListener('mousedown', () => {

        widthReset(wrapper);
        titleChange(elem);
        if (elem.id.substring(0, 3) === "vfx") {
            elem.style.width = "50%";
            document.querySelector('#graphicsPrint').style.width = '70%';
        }
        else if (elem.id.substring(0, 3) === "gra") {
            elem.style.width = "70%";
            document.querySelector('#vfxPaint').style.width = '50%';
        }
            // else if TECH

            // else if PROGRAMMING

        elem.querySelector(".iconsContainer").style.opacity = "1";
        elem.querySelector(".skillsDesc").style.opacity = "1";
        elem.querySelector('span').style.fontSize = '1.25rem';
        elem.querySelector('video').play();
    });
}
// vfx Skills Event - End

const expandWidth = function (selector, group) {
    if (group === 'vfx') {
        selector.style.width = "50%";
    }
    else if (group === 'graphics') {
        selector.style.width = "70%"
    }
}



