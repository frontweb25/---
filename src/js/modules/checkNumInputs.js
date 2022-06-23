const checkNumInputs = (selector) => { // функция для ввода в инпут только цифры
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

};

export default checkNumInputs;