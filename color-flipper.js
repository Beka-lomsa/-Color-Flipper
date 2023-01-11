const button = document.querySelector('.button');
const container = document.getElementById('container');
const colors = ["red","orange","lightblue","yellow","slateblue"];
let count = 0;

function colorChanger(){
    const colorlist = Math.floor(Math.random() * colors.length)
    container.style.background = colors[count++];
    button.style.backgroundColor = colors[colorlist];
    button.style.fontSize = "2rem"
    if(count > colors.length - 1){
        count = 0;
    };
}

button.addEventListener('click', function(){
    colorChanger();
})