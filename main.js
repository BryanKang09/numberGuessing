let computerNum =0;
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5
let gameOver = false
let chancesArea=document.getElementById("chance-area")
let history=[]
let mainText = document.querySelector("h1")

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){
    userInput.value=""
})
window.addEventListener('scroll',function(){
    let value = window.scrollY
    console.log("scrollY",value);

    if (value>400){
        mainText.style.animation="disappear 1s ease-out forwards"
    }else{
        mainText.style.animation=`slide 1s ease-out`
    }
});

function pickRanNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("answer", computerNum)
}

function play(){
    let userValue = userInput.value

    if (userValue < 0 || userValue >100) {
        resultArea.textContent="enter between 1-100"
        return; 
    }

    if (history.includes(userValue)){
        resultArea.textContent="Try different number"
        return;
    }

    chances--; 
    chancesArea.textContent = `remaining chances: ${chances}`;

    if(userValue < computerNum){
        resultArea.textContent = "up"
    }else if (userValue > computerNum){
        resultArea.textContent = "down"
    }else{
        resultArea.textContent = "well done"
    }

    history.push(userValue)
    console.log(history)

    if (chances <1){
        gameOver = true
    }

    if (gameOver == true){
        playButton.disabled = true
    }
}

function reset() {
    userInput.value = "";
    pickRanNum();
    playButton.disabled = false
    gameOver = false
    chances = 5
    history=[]
    chancesArea.textContent = `remaining chances: ${chances}`;
    resultArea.textContent = "Result here"
}

pickRanNum()