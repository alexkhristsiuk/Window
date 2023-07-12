'use strict';

import './slider';
import modals from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import pictures from './modules/pictures';

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {};
    const now = new Date();
	const threeDaysLater = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
    
    changeModalState(modalState);
    modals();
    tabs('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
    tabs('.no_click', '.decoration_content > div > div','.decoration_slider', 'after_click');
    tabs('.balcon_icons_img', '.big_img > img','.balcon_icons', 'do_image_more', 'inline-block');
    forms(modalState);
    timer(threeDaysLater);
    pictures();
});