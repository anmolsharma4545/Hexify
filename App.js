const colors = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , "A" , "B" , "C" , "D" , "E" , "F"];

const btn = document.querySelector('.btn');
const color = document.querySelector('#value');

btn.addEventListener('click' , function(){
    let hex = "#";
    for(let i = 0; i < 6; i++){
        hex += colors[getRandomNumber()];
    }
    color.innerHTML = hex;
    document.body.style.backgroundColor = hex;
});


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}