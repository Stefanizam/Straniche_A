// Skills Events


const skillsSections = document.querySelectorAll('.skillsSection');
const videoWrapper = document.querySelectorAll('.videoWrapper');
const allVideos = document.querySelectorAll('video');
const videoNavBars = document.querySelectorAll('.videoNavBar');

function createVideoOverlays() {

    for (let wrapper of videoWrapper) {
        let overlayDiv = document.createElement('div');
        overlayDiv.classList.add('videoOverlay');
        wrapper.prepend(overlayDiv);
    }
}

createVideoOverlays();

function playVideo(currentVideo) {
    for (let otherVideos of document.querySelectorAll('video')) {
        otherVideos.pause();
    }
    setTimeout(() => { currentVideo.play() }, 750);
}
function widthReset(exception, parent) {
    for (let wrapper of parent.parentElement.querySelectorAll(`.videoWrapper:not(#${exception})`)) {
        wrapper.style.width = "10%";
        setTimeout(() => {
            wrapper.style.transform = 'translate(0,0)';
            setTimeout(() => {
                wrapper.querySelector('.videoOverlay').style.opacity = '1';
                setTimeout(() => {
                    wrapper.style.zIndex = '1';
                    setTimeout(() => {
                        wrapper.classList.remove('setActiveVideo');
                    }, 50)
                }, 50)
            }, 50)
        }, 200)
    }
};

function widthExpand(wrapper) {
    let videosNum = wrapper.parentElement.querySelectorAll('.videoWrapper').length;
    let calcWidth = ((10 - videosNum) + 1) * 10;
    wrapper.style.width = `${calcWidth}%`;
    wrapper.querySelector('.videoOverlay').style.opacity = '0';
    setTimeout(() => {
        wrapper.style.transform = 'translate(0,-16px)';
        setTimeout(() => {
            wrapper.style.zIndex = '2';
            setTimeout(() => {
                wrapper.classList.add('setActiveVideo')
            }, 50)
        }, 50)
    }, 200)
}

function makeActive(button, parent) {
    for (let btn of parent.querySelectorAll('.videoNavBtn')) {
        btn.classList.remove('setActive');
    }
    button.classList.add('setActive');
}

function changeInfo(activeInfo, parent) {

    let delay = 150;
    lightsOff(); // Calls first

    function lightsOff() {
        for (let info of parent.querySelectorAll(`.skillInfoGroup`)) {
            info.style.opacity = "0";
        }
        setTimeout(switchOffOn, delay); // Calls next
    }

    function switchOffOn() {
        for (let info of parent.querySelectorAll(`.skillInfoGroup`)) {
            info.style.display = "none";
        }
        activeInfo.style.display = "flex";
        setTimeout(lightsOn, delay); // Calls next
    }

    function lightsOn() {
        activeInfo.style.opacity = "1";
    } // Last function
}

// videoNavBar clicks
for (let videoNavBar of videoNavBars) {
    for (let videoNavBtn of videoNavBar.querySelectorAll('.videoNavBtn')) {
        videoNavBtn.addEventListener('mousedown', () => {

            let videoID = videoNavBtn.dataset.skill;
            let theVideo = document.querySelector(`#${videoID}>video`);
            let videoContainer = document.querySelector(`#${videoID}`);


            if (!(videoNavBtn.classList.contains('setActive'))) {
                let infoTextID = document.querySelector(`#${videoNavBtn.dataset.info}`);
                let parentOfInfo = infoTextID.parentElement;
                changeInfo(infoTextID, parentOfInfo);
            }

            makeActive(videoNavBtn, videoNavBar);
            widthReset(videoID, videoContainer);
            theVideo.load(widthExpand(videoContainer));
            playVideo(theVideo);
        })
    }
}

// Video clicks
for (let video of allVideos) {
    video.parentElement.addEventListener('mousedown', () => {
        let videoID = video.parentElement.id;
        let videoNavBtn = document.querySelector(`[data-skill='${videoID}']`);
        let videoNavBar = videoNavBtn.parentElement;

        if (!(videoNavBtn.classList.contains('setActive'))) {
            let infoTextID = document.querySelector(`#${videoNavBtn.dataset.info}`);
            let parentOfInfo = infoTextID.parentElement;
            changeInfo(infoTextID, parentOfInfo);
        }

        makeActive(videoNavBtn, videoNavBar);
        widthReset(videoID, video.parentElement);
        video.load(widthExpand(video.parentElement));
        playVideo(video);
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


// navBar Stuff
const subNavContent = document.querySelector("#subNavContent");
const subNavElements = document.querySelectorAll('#subNavContent>a');

const navBarBtns = document.querySelectorAll('.navBtn, .subNavBtn');

const screenS = window.matchMedia('(max-width: 800px)');
const screenXS = window.matchMedia('(max-width: 532px)');


function removeActive() {
    for (let navBtn of navBarBtns) {
        navBtn.classList.remove('setActiveNav');
    }
}

for (let navBtn of navBarBtns) {
    navBtn.addEventListener('mousedown', () => {
        if (navBtn.id === "skillsBtn") {
            subNavContent.style.visibility = "visible";
            if (screenXS.matches) {
                subNavContent.style.height = "10.5rem";
            }
            else {
                subNavContent.style.height = "10";
            }
            setTimeout(() => { subNavContent.style.opacity = "1"; }, 350)

            subNavContent.addEventListener('mouseleave', () => {
                subNavContent.style.visibility = "hidden";
                subNavContent.style.height = "0";
                subNavContent.style.opacity = "0";
            })
        }
    })
}


// CV Tooltip Hover
const buttonCV = document.getElementById('downloadCV');
const tooltipCV = document.getElementById('tooltipText');

buttonCV.addEventListener('mouseenter', () => {
    tooltipCV.style.opacity = '1';
})
buttonCV.addEventListener('mouseleave', () => {
    tooltipCV.style.opacity = '0';
})


// Background Parallax  -- Problematic on different devices -- OMMITED
// function bkgParallax() {
//     window.addEventListener('scroll', () => {
//         let scrolledBkg = window.pageYOffset;

//         let pageContainer = document.getElementById('pageContainer');
//         pageContainer.style.backgroundPosition = `0px ${scrolledBkg / 1.5}px`;
//     })
// }
// window.requestAnimationFrame(bkgParallax);



// Software Affinity stuff
craftIcons(); // uses Icon_Crafter.js


// Software Affinity - xpBars Animation
(function () {
    let xpFill;
    let windowHeight;
    let softContainer;

    function init() {
        xpFill = document.querySelectorAll('.xpFill');
        softContainer = document.querySelectorAll('.softContainer');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (let xpFillBar of xpFill) {
            let positionFromTop = xpFillBar.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                xpFillBar.classList.add('xpSlideAnimator');
            }
        }
        for (let container of softContainer) {
            let positionFromTop = container.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                container.classList.add('xpOpacityAppear');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();


// Form Submit stuff

let contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
})