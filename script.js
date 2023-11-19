const container = document.querySelector('.container');
const card = document.querySelector('.card').innerHTML;
const btn = document.querySelector('.card__form__btn');
const input = document.querySelector('.card__form__input');
const resetInput = window.onload = input.value = '';
const image = document.querySelector('.card__img');

function successMessage() {
    const button = document.createElement('a');
    button.innerText = 'Dismiss message';
    button.classList.add('card__success__btn');
    button.href = window.location.href;
    const cardEl = document.createElement('div');
    cardEl.classList.add('card__success');
    cardEl.innerHTML = `
    <img src="./assets/images/icon-success.svg" class="card__icon">
    <div class="card__success__text">
        <h1 class="card__success__header">Thanks for subscribing!</h1>
        <p class="card__success__body">A confirmation email has been sent to <span class="card__success__email">${input.value}</span>. Please open it and click the button inside to confirm your subscription.</p>
    </div>`;
    cardEl.appendChild(button);
    container.innerHTML = '';
    container.appendChild(cardEl);
}

function formVal() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const errorLabel = document.querySelector('.card__error__label');
    const form = document.querySelector('.card__form');

    input.addEventListener('input', () => {
        if (input.value.match(pattern)) {
            input.style.background = 'var(--clr-success)';
            input.style.border = '1px solid green';
            input.style.color = 'green';
        } else {
            input.style.background = '#fff';
            input.style.border = '1px solid #cdcdcd';
            input.style.color = '#000';
        }
    })

    form.addEventListener('submit', (e) => {
        if (!input.value.match(pattern)) {
            e.preventDefault();
            errorLabel.style.display = 'inline-block';
            input.style.background = 'var(--clr-error)';
            input.style.border = '1px solid red';
            input.style.color = 'red';
        } else {
            e.preventDefault();
            successMessage();
        }
    })
}

function imgDisplay() {
    if (window.innerWidth <= 768) {
        image.setAttribute('src', 'assets/images/illustration-sign-up-mobile.svg');
    } else {
        image.setAttribute('src', 'assets/images/illustration-sign-up-desktop.svg');
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            image.setAttribute('src', 'assets/images/illustration-sign-up-desktop.svg');
        } else {
            image.setAttribute('src', 'assets/images/illustration-sign-up-mobile.svg');
        }
    });
}

const app = () => {
    formVal();
    imgDisplay();
}

app();
