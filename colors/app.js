let body = document.body;
let button = document.querySelector('button');

// let randomColor = [randomNum1, randomNum2, randomNum3];

function changeColor(){
    let randomNum1 = Math.floor(Math.random()*255)+1;
        let randomNum2 = Math.floor(Math.random()*255)+1;
let randomNum3 = Math.floor(Math.random()*255)+1;
    console.log(`rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`);
    body.style.backgroundColor = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
}

button.addEventListener('click', changeColor);

