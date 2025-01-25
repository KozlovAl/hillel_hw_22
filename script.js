"use strict";

const buttonContainer = document.getElementById('buttonContainer');

buttonContainer.addEventListener('click', function(event) {

    if (event.target.tagName === 'BUTTON') {
        const buttonText = event.target.textContent;

        alert(`Клікнуто на кнопці: ${buttonText}`);
    }
});