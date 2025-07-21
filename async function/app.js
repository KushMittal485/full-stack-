function FakeRequestCallback(url, success, failure){
    let randomNum = Math.random();
    if(randomNum>0.5){
        failure('connection timeout');
    }else{
        success('heheehe');
    }
}

let url ='heee.com';

FakeRequestCallback(url,(e)=>{
    console.log(e);
    FakeRequestCallback('./hehe.com2',(a)=>{
        console.log(a)
    },(a)=>{
        console.log(a);
    })
},(e)=>{
    console.log(e);
});

// function fakeRequestPromise(){
//    return new Promise ((resolve,reject)=>{
    
//        let randomNum = Math.random();
//        if(randomNum>0.5){
//         reject('ohno');
//        }else{
//         resolve('it works');
//        }
//    }
//    )
// }
// fakeRequestPromise().then((a)=>{
//     console.log(a);
// }).catch(a=>{
//     console.log(a);
// })

// async function login(username, password){
//     if(!username||!password) throw 'missing credential';
//     return 'data';
// }

// login('akdsfj').then(msg=>console.log(msg)).catch(err=>console.log(err));

async function delayedColor(color, delay){
    return setTimeout(()=>document.body.style.backgroundColor = color, delay);
}

async function rainbow(){
    await delayedColor('red',1000).then();
    await delayedColor('orange',1000).then();
}

rainbow();