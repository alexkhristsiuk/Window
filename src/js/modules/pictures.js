const pictures = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.append(imgPopup);

    imgPopup.style.cssText = `
                        display: none;
                        justify-content: center;
                        align-items: center;
                    `

    bigImage.style.cssText =` 
                    width: 740px;
                    height: 550px;
                `

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.matches('.preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.overflow='hidden';
        }

        if (target === imgPopup) {
            imgPopup.style.display='none';
            document.body.style.overflow='';
        }
    })
};

export default pictures;