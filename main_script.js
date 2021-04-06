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
        case 'techRepair':
            element.querySelector('span').innerText = 'Computer Repair';
            break;
        case 'techSystems':
            element.querySelector('span').innerText = 'System Admisitration';
            break;
        case 'progFront':
            element.querySelector('span').innerText = 'Front-End';
            break;
        case 'progGames':
            element.querySelector('span').innerText = 'Game Development';
            break;
        case 'progSoftware':
            element.querySelector('span').innerText = 'Software Development';
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
            case 'techRepair':
                element[i].querySelector('span').innerText = 'Repair';
                break;
            case 'techSystems':
                element[i].querySelector('span').innerText = 'Systems';
                break;
            case 'progFront':
                element[i].querySelector('span').innerText = 'Front';
                break;
            case 'progGames':
                element[i].querySelector('span').innerText = 'Game Dev';
                break;
            case 'progSoftware':
                element[i].querySelector('span').innerText = 'Software';
                break;
        }
    };
};

const expandWidth = function (element) {
    if (element.id.substring(0, 3) === "vfx") {
        element.style.width = "50%";
        // document.querySelector('#vfxPaint').style.width = '50%';
        document.querySelector('#graphicsUI').style.width = '70%';
        document.querySelector('#techRepair').style.width = '90%';
        document.querySelector('#progFront').style.width = '80%';
    }
    else if (element.id.substring(0, 3) === "gra") {
        element.style.width = "70%";
        document.querySelector('#vfxPaint').style.width = '50%';
        // document.querySelector('#graphicsUI').style.width = '70%';
        document.querySelector('#techRepair').style.width = '90%';
        document.querySelector('#progFront').style.width = '90%';
    }
    else if (element.id.substring(0, 3) === "tec") {
        element.style.width = "90%";
        document.querySelector('#vfxPaint').style.width = '50%';
        document.querySelector('#graphicsUI').style.width = '70%';
        // document.querySelector('#techRepair').style.width = '90%';
        document.querySelector('#progFront').style.width = '90%';
    }
    else if (element.id.substring(0, 3) === "pro") {
        element.style.width = "90%";
        document.querySelector('#vfxPaint').style.width = '50%';
        document.querySelector('#graphicsUI').style.width = '70%';
        document.querySelector('#techRepair').style.width = '90%';
        // document.querySelector('#progFront').style.width = '90%';
    }
}

// Skills Event
const wrapper = document.querySelectorAll('.wrapper');

for (let div of wrapper) {

    div.addEventListener('mousedown', () => {

        widthReset(wrapper);
        titleChange(div);
        expandWidth(div);

        div.querySelector(".iconsContainer").style.opacity = "1";
        div.querySelector(".skillsDesc").style.opacity = "1";
        div.querySelector('span').style.fontSize = '1.25rem';
        div.querySelector('video').play();
    });
}
// Skills Event - End


// link hover effect
const aLink = document.querySelectorAll('a');

for (let a of aLink) {
    a.addEventListener('mouseenter', () => {
        a.style.color = 'lightgrey';
    })
    a.addEventListener('mouseleave', () => {
        a.style.color = 'white';
    })
}

// navBar Skills Menu
const navButton = document.querySelector("#skillsBtn");
const subNavContent = document.querySelector("#subNavContent");

navButton.addEventListener('mouseenter', () => {
    subNavContent.style.display = 'flex';
    subNavContent.style.transform = 'scaleY(1)';
})

subNavContent.addEventListener('mouseleave', () => {
    subNavContent.style.display = 'none';
})




// Anchor click event
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });







