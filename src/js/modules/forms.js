import checkNumInput from "./checkNumInputs";
import { closeModalByTime } from "./modal";

const forms = (state) => {
    const forms = document.querySelectorAll('form');

        checkNumInput('input[name="user_phone"]');

    const message = {
        loading: 'Идет отправка...',
        success: 'Отправлено!',
        error: 'Ошибка!'
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        })
        return await result.json();
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            form.append(statusMessage);
            statusMessage.classList.add('status');
        
            const formData = new FormData(form);
            if (form.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
            postData('https://jsonplaceholder.typicode.com/posts', json)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.error)
                .finally(() => {
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                    closeModalByTime('.popup_engineer');
                    closeModalByTime('.popup_calc_end');
                    closeModalByTime('.popup');
                    state = {};
                    console.log(state);
                })
        })

    })
}

export default forms;