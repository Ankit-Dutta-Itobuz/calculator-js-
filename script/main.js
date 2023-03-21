// const ac = document.getElementById('ac');
// const equals = document.getElementById('equals');


//selector
const keys = document.querySelectorAll("button");
const answer = document.getElementById('answer');
//eventlistener
keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerText;
    if(buttonText==="AC"){
        answer.innerText = "";
        return;
    }

    if(buttonText === "DEL"){
        answer.textContent = answer.textContent.slice(0,-1);
        return;
    }

    if(buttonText === "="){
        answer.innerText = eval(answer.innerText);
    }

    else{
        answer.textContent += buttonText;
        return;
    }
    // if(buttonText === '*'|| buttonText === '/' || buttonText === '+' || buttonText === '-' || buttonText === '=') {

    // }
  
}