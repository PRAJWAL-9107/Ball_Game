function generateBalls(){
    var ballsHtml="";
    for(var i=1; i<=105; i++){
        var number=Math.floor(Math.random()*10)
        ballsHtml += (`<div class="ball">${number}</div>`);
    }
    document.querySelector(".buble").innerHTML=ballsHtml;
}


var targetNumber=0;
var currentScore=0;
var timeRemaining=60;

function generateTargetNumber(){
    targetNumber=Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent=targetNumber;
}

function startTimer(){
    var timerInterval=setInterval(function(){
        if(timeRemaining>0){
            timeRemaining--;
            document.querySelector(".time").textContent=timeRemaining;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector("#b").innerHTML=
                `<div class="game-over-container">
                    <h1 class="last">Game Over</h1>
                    <table class="score-table">
                        <tr>
                            <th>Metric</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>Final Score</td>
                            <td>${currentScore}</td>
                        </tr>
                        <tr>
                            <td>Time Played</td>
                            <td>${60 - timeRemaining} seconds</td>
                        </tr>
                    </table>
                    <button onclick="location.reload()" class="restart-btn">Play Again</button>
                </div>`;
        }
    },1000)
}

function increaseScore(){
    currentScore+=10;
    document.querySelector(".score").textContent=currentScore;
}

document.querySelector("#b").addEventListener("click",function(event){
    var clickedNumber=Number(event.target.textContent);
    if(clickedNumber===targetNumber){
        increaseScore();
        generateTargetNumber();
        generateBalls();
    }
})

generateBalls();
generateTargetNumber();
startTimer();