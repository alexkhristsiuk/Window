
const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            forms = document.querySelectorAll('[data-modal]');

        trigger.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                forms.forEach(item => {
                    item.style.display='none';
                })

                modal.style.display='block';
                document.body.style.overflow='hidden';
            })
        })

        close.addEventListener('click', () => {
            forms.forEach(item => {
                item.style.display='none';
            })

            modal.style.display='none';
            document.body.style.overflow='';
            clearInterval(showModalByTimer);
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                forms.forEach(item => {
                    item.style.display='none';
                })

                modal.style.display='none';
                document.body.style.overflow='';
            }
        })

        document.addEventListener('keydown', (e) => {
            const computedStyle = getComputedStyle(modal);
            if (e.code === 'Escape' && computedStyle.display==='block') {
                modal.style.display='none';
                document.body.style.overflow='';
            }
        });

        function showModalByTimer(selector, time) {
            setTimeout(() => {
                document.querySelector(selector).style.display='block';
                document.body.style.overflow='hidden';
            }, time)
        }

        /* showModalByTimer('.popup', 60000); */

    }
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
}

function closeModalByTime(selector) {
    setTimeout(() => {
        document.querySelector(selector).style.display='none';
        document.body.style.overflow='';
    }, 3000)
}

export default modals;
export {closeModalByTime};