// Icon Crafter 1.0

function craftIcons() {

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
        let softName = document.createTextNode(pullName);
        nameP.appendChild(softName);
        softInfoDiv.appendChild(nameP);
        container.appendChild(softInfoDiv);

        // Create and Append XP Bar0
        let xpBarBkg = document.createElement('div');
        xpBarBkg.classList.add('xpBkg');
        softInfoDiv.appendChild(xpBarBkg);
        let xpBarFill = document.createElement('div');
        xpBarFill.classList.add('xpFill', 'font-XS');
        xpBarFill.style.width = `${pullPercentage}%`;
        // let percentageP = document.createElement('p');
        // let percentageNum = document.createTextNode(pullPercentage);
        // percentageP.appendChild(percentageNum);
        // xpBarFill.appendChild(percentageP);
        xpBarBkg.appendChild(xpBarFill);
    }
}