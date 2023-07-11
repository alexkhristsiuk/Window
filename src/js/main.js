'use strict';

import './slider';
import modals from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {};
    
    changeModalState(modalState);
    modals();
    tabs('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
    tabs('.no_click', '.decoration_content > div > div','.decoration_slider', 'after_click');
    tabs('.balcon_icons_img', '.big_img > img','.balcon_icons', 'do_image_more', 'inline-block');
    forms(modalState);
})