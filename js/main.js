'use strict'

const form = document.querySelector('.form');
const listInput = document.querySelector('#list-input');
const listButton = document.querySelector('#list-button');
const container = document.querySelector('.container');

console.log(listButton);
console.log(listInput);

//Меняю цвет кнопки и класс на button_active
listInput.addEventListener('input', () => listButton.classList[listInput.value ? 'add' : 'remove']('form__button_active'));



const lists = [];

function getRandomId() {
    let id = '';
    for(let i = 0; i < 16; i++) {
      id += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9][Math.floor(Math.random() * 10)]
    }
    return id
}

listButton.addEventListener('click', getCreateList);


//Функции
function getCreateList() {
    //Создаю новый блок list
    const id = getRandomId()
    const list = document.createElement('div');
    list.className = 'main-list';
    list.id = id
    list.textContent = listInput.value
    lists.push({
        id,
        title: listInput.value,
        items: []
    })

    container.appendChild(list)

    //Создаю новый блок 


}