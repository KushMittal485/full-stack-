const p1 = document.querySelector('#player1');
const p2 = document.querySelector('#player2');
const btn1 = document.querySelectorAll('button')[0];
const btn2 = document.querySelectorAll('button')[1];
const btn3 = document.querySelectorAll('button')[2];
const rounds = document.querySelector('#rounds');
let count1=0;
console.log(rounds.value);
let count2 = 0;
btn1.addEventListener('click',function(e){
    e.preventDefault();
    p1.innerText = count1++;
    if(count1===parseInt(rounds.value)+1){
            p1.classList.add('winner');
            p2.classList.add('loser');
            btn1.setAttribute("disabled","");
            btn2.setAttribute("disabled","");
        }

});
btn2.addEventListener('click',function(e){
    e.preventDefault();
    p2.innerText = count2++;
    if(count2===parseInt(rounds.value)+1){
            p1.classList.add('loser');
            p2.classList.add('winner');
            btn1.setAttribute("disabled","");
            btn2.setAttribute("disabled","");
            
        }
});

btn3.addEventListener('click', function(e){
    e.preventDefault();
    count1=0;
    count2=0;
    p1.innerText = '0';
    p2.innerText ='0';
    p1.classList.value ='';
    p2.classList.value =' ';
    btn1.removeAttribute("disabled");
    btn2.removeAttribute("disabled");
})