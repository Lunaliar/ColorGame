//DOM Elements
const squares = document.querySelectorAll('.square');
const answerDisplay = document.querySelector('.correct');
const colorDisplay = document.querySelector('h1');
const header = document.querySelector('.header')
const button = document.querySelector('.btn');
const nav = document.querySelector('nav')

let colors = []

generateRandomColor();
assignColors();
checkColor();

function rand(){
  return Math.floor(Math.random()*255)+1;
}

function generateRandomColor(){
    for(let i=0; i<squares.length; i++){
        colors.push(
            `rgb(${rand()},${rand()},${rand()})`
        )
    }
}

function assignColors (){
    colors.forEach((color,index)=>{
        squares[index].style.background = color;
        squares[index].setAttribute('data-color',color)
    })
}

function getWinningColor(){
    const randomColor = colors[Math.floor(Math.random()*colors.length)];
    colorDisplay.innerText = randomColor.toUpperCase();
    return randomColor;
}

function checkColor(){
    squares.forEach(square =>{
        square.addEventListener('click',e=>{
            if(e.target.dataset.color === winningColor){
                answerDisplay.innerText = 'Correct!';
                header.classList.add('correctbg');
                header.classList.remove('wrongbg')
            }else{
                answerDisplay.innerText = 'Wrong!';
                e.target.classList.add("fade")
                header.classList.add('wrongbg');
                header.classList.remove('correctbg')
            }
        })
    })
}

function reset(){
    colors = [];
    answerDisplay.innerText =''
    header.classList.remove('correctbg')
    header.classList.remove('wrongbg')

    squares.forEach((square)=> square.classList.remove('fade'))
    generateRandomColor();
    assignColors();
    checkColor();
    winningColor = getWinningColor();
    
}

let winningColor = getWinningColor();

button.addEventListener('click',reset)