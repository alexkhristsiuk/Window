const tabs = (tabSelector, contentSelector, headerSelector, activeClass, display='block') => {
    const tabs = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector),
        header = document.querySelector(headerSelector);
    
    const hideTabsContent = () => {
        content.forEach(item => {
            item.style.display = 'none';
        })

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        })
    }

    const showTabsContent = (i = 0) => {
        content[i].style.display = display;
        tabs[i].classList.add(activeClass);
    } 

    hideTabsContent();
    showTabsContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tabs.forEach((tab, i) => {
                if (target == tab || target.parentNode == tab) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            })
        }
    })
}

export default tabs;