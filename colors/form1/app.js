const form = document.querySelector('form');
const list = document.querySelector("#list");
const input = document.querySelector('#product');
const quant = document.querySelector('#qty');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let newInput = input.value ;
    let newquant = quant.value;
    let li =  document.createElement('li');
    li.innerText = newquant + " " + newInput;
    list.append(li);
    input.value = '';
    quant.value = '';


})