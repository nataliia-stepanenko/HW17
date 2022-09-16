"use strict"

const ul = document.getElementById('list');
const form = document.forms[0];
const input = form.elements[0];
const errorMessage = document.createElement('div');

form.addEventListener('submit', handleSubmit);
input.addEventListener('focus', removeError);
ul.addEventListener('click', removeToDo);

function addToDo (){
    const li = document.createElement('li');
    li.innerHTML = input.value;
    li.classList.add('task');
    ul.append(li);
    input.value = '';
    input.focus();

    const delBtn = document.createElement('button');
    delBtn.innerHTML = 'Delete';
    delBtn.classList.add('del-button');
    li.append(delBtn);
}

function handleSubmit(event) {
    event.preventDefault();
    if (input.value.trim() === "") {
        input.classList.add('error');
        errorMessage.classList.add('error-message');
        errorMessage.innerHTML = 'Please, enter a valid task';
        form.append(errorMessage);
        return;
    }
    addToDo();
}

function removeError() {
     if (input.classList.contains('error')) {
         input.classList.remove('error');
         errorMessage.innerHTML = '';
    }
}

function removeToDo (event) {
    let isRemoveButton = event.target.className === 'del-button';
    if (isRemoveButton){
    let li = event.target.closest('.task');
    li.remove();
}}
