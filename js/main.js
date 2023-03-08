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
const btnEls = document.querySelectorAll("#q-button");
//new add - const tbtnEl = document.querySelector('#true-button')

                                //event listeners

function handleClick(evt) {
    const playerChoice = evt.target.textContent
    const newQuestion = generateQuestion();
    console.log(playerChoice, newQuestion)
}

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

function generateQuestion (){
    const questionList = [
        "True or False: The largest country in the world by land area is Russia.",
        "True or False: The capital of France is Paris.",
        "True or False: The continent of South America is located entirely in the Southern Hemisphere.",
        "True or False: The Great Barrier Reef is located off the coast of Australia.",
        "True or False: The highest mountain in North America is Denali (formerly known as Mount McKinley).",
    ]
    const randomQuestion = Math.floor(Math.random()*questionList.length);
    return questionList[randomQuestion]
}

init();