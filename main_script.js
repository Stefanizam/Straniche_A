// Skills Event

const skillsSections = document.querySelectorAll('.skillsSection');
const videoWrapper = document.querySelectorAll('.videoWrapper');
const videoNavBars = document.querySelectorAll('.videoNavBar');

function widthReset(exception, parent) {
    for (let wrapper of parent.parentElement.querySelectorAll(`.videoWrapper:not(#${exception})`)) {
        wrapper.style.width = "10%";
        wrapper.querySelector('video').pause();
    }
};

function widthExpand(element) {
    let videosNum = element.parentElement.querySelectorAll('.videoWrapper').length;
    let calcWidth = ((10 - videosNum) + 1) * 10;
    element.style.width = `${calcWidth}%`;
}

function makeActive(button) {
    for (let btn of document.querySelectorAll('.videoNavBtn')) {
        btn.classList.remove('setActive');
    }
    button.classList.add('setActive');
}

function changeInfo(activeInfo, parent) {

    function switchOffOn() {
        for (let info of parent.querySelectorAll(`.skillInfoGroup`)) {
            info.style.display = "none";
        }
        activeInfo.style.display = "flex";
    }

    function lightsOff() {
        for (let info of parent.querySelectorAll(`.skillInfoGroup`)) {
            info.style.opacity = "0";
        }
    }

    function lightsOn() {
        activeInfo.style.opacity = "1";
    }

    setTimeout(lightsOff, 1)
    setTimeout(switchOffOn, 501)
    setTimeout(lightsOn, 750)
}


function changeOpacity(activeInfo, parent) {
    for (let info of parent.querySelectorAll(`.skillInfoGroup`)) {
        info.style.opacity = "0";
    }
    // activeInfo.style.opacity = "1";
}


for (let videoNavBar of videoNavBars) {
    for (let videoNavBtn of videoNavBar.querySelectorAll('.videoNavBtn')) {
        videoNavBtn.addEventListener('mousedown', () => {

            // Video Stuff
            let videoID = videoNavBtn.dataset.skill;
            let theVideo = document.querySelector(`#${videoID}>video`);
            let videoContainer = document.querySelector(`#${videoID}`);

            makeActive(videoNavBtn);
            widthReset(videoID, videoContainer);
            widthExpand(videoContainer);
            theVideo.play();

            // Info Text change
            let infoTextID = document.querySelector(`#${videoNavBtn.dataset.info}`);
            let parentOfInfo = infoTextID.parentElement;

            changeInfo(infoTextID, parentOfInfo);
        })
    }
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
        let scrolledBkg = window.pageYOffset;
        // let sB = document.getElementById('sB');
        // sB.style.transform = `translate(0px, ${scrolledBkg / 10}px)`;

        let pageContainer = document.getElementById('pageContainer');
        pageContainer.style.backgroundPosition = `0px ${scrolledBkg / 1.5}px`;
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





