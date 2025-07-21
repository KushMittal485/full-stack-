async function starwar(i){
    try {
        
        const req = await fetch(`https://www.swapi.tech/api/people/${i}`);
        const data = await req.json();
        return data.result.properties.name;
    } catch (error) {
        console.log("error",error);
    }
}
const ul = document.querySelector('#starwar');
const btn = document.querySelector('button');
let num = 1;
const people = async function (){
    const data = await starwar(num++);
    let li = document.createElement('li');
    li.append(data);
    ul.append(li);
}
btn.addEventListener('click', people);