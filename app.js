

const container = document.querySelector('#container');
const btn = document.querySelector('#btn');

btn.addEventListener('click',assignColor);

function assignColor(){
    for(let child of container.children){
        randomColor = generateRandomColor();
        child.style.backgroundColor = randomColor;
        child.innerText = randomColor.toUpperCase();
    }
}

assignColor();


function generateRandomColor(){
    let color = '#';
    const codes = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e'];
    for(let i=0;i<6;i++){
        color+=codes[Math.floor(Math.random()*codes.length)];
    }
    console.log(color);
    return color;
}