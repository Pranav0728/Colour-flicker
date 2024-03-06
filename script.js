const getColor = ()=>{
    const randomNum = Math.floor(Math.random()*16777125);
    const randomCode = "#" + randomNum.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color").innerHTML = randomCode;
}

document.getElementById("btn").addEventListener(
    'click',getColor
);

getColor();