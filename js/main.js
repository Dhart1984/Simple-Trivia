                                // constants 
//apps state (variables) //what data the application of the game needs to render
        //playerScore, rightAnswer
let playerScore;
let skipQuestion;
let wrongScore;
                                //cached elements 

//cached scores
const pScoreEl = document.querySelector("#p-score");
const sScoreEl = document.querySelector("#s-score");
const wScoreEl = document.querySelector("#w-score");

//cached buttons 
const btnEls = document.querySelectorAll("button");

                                //event listeners

function handleClick(evt) {
    console.log(evt.target.textContent)
};

btnEls.forEach(function (btn){

    btn.addEventListener('click', handleClick)

    console.log(btn);
})

                                //functions 

function init(){
    console.log('starting game')
    playerScore = 0;
    skipQuestion = 0;
    wrongScore = 0;

    render();
}

function render(){
    console.log('rendering game')
    renderScores();
}

function renderScores(){
    //update cached dom elements - scoreEls
    pScoreEl.textContent = playerScore;
    sScoreEl.textContent = skipQuestion;
    wScoreEl.textContent = wrongScore;
}

function renderResults(){
    //update results - reult els 
}

init();