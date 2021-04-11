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
        element[i].querySelector(".wrapperBkg").style.backgroundColor = "rgba(0,0,0,0)";
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
                element[i].querySelector('span').innerText = 'Front-End';
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

    div.addEventListener('mouseenter', () => {

        widthReset(wrapper);
        setTimeout(titleChange(div), 350)
        

        expandWidth(div);

        div.querySelector(".wrapperBkg").style.backgroundColor = "rgba(0, 0, 0, .75)"
        div.querySelector(".iconsContainer").style.opacity = "1";
        div.querySelector(".skillsDesc").style.opacity = "1";
        div.querySelector('span').style.fontSize = '1.25rem';
        div.querySelector('video').play();
    })
}
// Skills Event - End


// link hover effect
const aLink = document.querySelectorAll('a');

for (let a of aLink) {
    a.addEventListener('mouseenter', () => {
        a.style.color = 'white';
    })
    a.addEventListener('mouseleave', () => {
        a.style.color = '#cccccc';
    })
}


// navBar Skills Menu
const navButton = document.querySelector("#skillsBtn");
const subNavContent = document.querySelector("#subNavContent");
const subNavElements = document.querySelectorAll('#subNavContent>a');

navButton.addEventListener('mousedown', () => {
    subNavContent.style.visibility = "visible";
    subNavContent.style.opacity = "1";
    subNavContent.style.transform = "translateY(0em)";
})

subNavContent.addEventListener('mouseleave', () => {
    subNavContent.style.visibility = "hidden";
    subNavContent.style.opacity = "0";
    subNavContent.style.transform = "translateY(-12em)";
})


// CV Tooltip Hover
const buttonCV = document.getElementById('downloadCV');
const tooltipCV = document.getElementById('tooltipText');

buttonCV.addEventListener('mouseenter', () => {
    tooltipCV.style.opacity = '1';
})
buttonCV.addEventListener('mouseleave', () => {
    tooltipCV.style.opacity = '0';
})


// Background Parallax  -- Problematic on different devices -- Needs improvement
function bkgParallax() {
    window.addEventListener('scroll', () => {
        let pageContainer = document.getElementById('pageContainer');
        let sB = document.getElementById('sB');

        let scrolledBkg = window.pageYOffset;

        pageContainer.style.backgroundPosition = `0px ${scrolledBkg / 1.5}px`;
        sB.style.transform = `translate(0px, ${scrolledBkg / 10}px)`;
    })
}
window.requestAnimationFrame(bkgParallax);


// Software Affinity stuff

// Icon Creator
let softContainer = document.querySelectorAll('.softContainer');

for (let container of softContainer) {

    // Pull name and percentage from HTML dataset
    let pullName = container.dataset.name;
    let pullPercentage = container.dataset.percentage;

    // Create Image Tag and Link it
    let imgTag = document.createElement('img');
    imgTag.src = `Images/Icons/ico_${pullName}.svg`;
    imgTag.alt = pullName;
    container.appendChild(imgTag);

    // Create and Append Software Name
    let softInfoDiv = document.createElement('div');
    softInfoDiv.classList.add('softInfo');
    let nameP = document.createElement('p');
    let softName = document.createTextNode(`${pullName}`);
    nameP.appendChild(softName);
    softInfoDiv.appendChild(nameP);
    container.appendChild(softInfoDiv);

    // Create and Append XP Bar
    let xpBarBkg = document.createElement('div');
    xpBarBkg.classList.add('xpBkg');
    softInfoDiv.appendChild(xpBarBkg);
    let xpBarFill = document.createElement('div');
    xpBarFill.classList.add('xpFill', 'font-XS');
    xpBarFill.style.width = `${pullPercentage}%`;
    let percentageP = document.createElement('p');
    let percentageNum = document.createTextNode(pullPercentage);
    percentageP.appendChild(percentageNum);
    xpBarFill.appendChild(percentageP);
    xpBarBkg.appendChild(xpBarFill);
}

// xpBars Animation
(function () {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.xpFill');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('xpSlide');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();




