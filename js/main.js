'use strict'

const form = document.querySelector('.form');
const listInput = document.querySelector('#list-input');
const listButton = document.querySelector('#list-button');

console.log(listButton);
console.log(listInput);

listInput.addEventListener('input', () => listButton.classList[listInput.value ? 'add' : 'remove']('form__button_active'));

const lists = [];

function getRandomId() {
    let id = '';
    for(let i = 0; i < 16; i++) {
      id += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9][Math.floor(Math.random() * 10)]
    }
    return id
}


