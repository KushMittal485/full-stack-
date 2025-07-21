const p = document.querySelector('#place');
const btn = document.querySelector('button');
const h3 = document.querySelector('#temp');

const place = async (p)=>{

    const req =await fetch(`https://api.geoapify.com/v1/geocode/search?text=${p}&format=json&apiKey=5222091754e44e2d85a8304f5d21d6a0`);
    const data = await req.json();
    return data;
}

const temp = async (latdata, londata)=>{
    try{
        const req =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latdata}&lon=${londata}&appid=930719cd4c999eaac2d31bac01b3ade3`)
        const data =await req.json();
        return data;
    }catch(e){
        console.log(e);
    }
}

btn.addEventListener('click',async function(e){
    e.preventDefault();
    let placedata = await place(p.value);
    let latdata = placedata.results[0].bbox.lat1;
    let londata = placedata.results[0].bbox.lon1;
    let reqdata = await temp(latdata, londata);
    h3.innerText = (reqdata.main.temp-273.15).toFixed(2)+".c";
    p.value='';
})