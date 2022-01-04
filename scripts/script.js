const counter = document.getElementById('counter');
value = counter.textContent;
let startCounter = parseInt(value);


function decrement(){
    startCounter--
    counter.innerHTML = startCounter;
    changeColor()
}

function increment(){
    startCounter++
    counter.innerHTML = startCounter;
    changeColor()
}

function changeColor(){
    if(startCounter >= 0){
        document.getElementById('counter').style.color=('green');
    }else{
        document.getElementById('counter').style.color=('red');
    }
}