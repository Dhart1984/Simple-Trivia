// constants 



//apps state (variables) //what data the application of the game needs to render
        //playerScore, rightAnswer
let playerScore;
let skipQuestion;
let strikeScore;
                                //cached elements 

//cached scores
const pScoreEl = document.querySelector("#p-score");
const skpScoreEl = document.querySelector("#skip-score");
const strScoreEl = document.querySelector("#strike-score");

//cached buttons 
const btnEls = document.querySelectorAll("#q-button");
const tbtnEl = document.querySelector('#true-button');
const fbtnEl = document.querySelector('#false-button');
const sbtnEl = document.querySelector('#start-button');
const qbtnEl = document.querySelector('#questions')

                                //event listeners

function handleClick(evt) {
    const playerChoice = evt.target.textContent
    const newQuestion = generateQuestion();
    //trueChoice();
    checkWinner(playerChoice, newQuestion)
}

btnEls.forEach(function (btn){
    btn.addEventListener('click', handleClick)
    console.log(btn);
})

//let trueChoice =
tbtnEl.addEventListener('click true', function(){
    console.log("this is true");
})

fbtnEl.addEventListener('click false', function(){
    console.log("This is False");
})

sbtnEl.addEventListener('click start', function(){
    console.log("I'm Ready to Play!");
})
                                //functions 

function init(){
    console.log('starting game')
    playerScore = 0;
    skipQuestion = 2;
    strikeScore = 3;

    render();
}

function render(){
    console.log('rendering game')
    renderScores();
}

function renderScores(){
    //update cached dom elements - scoreEls
    pScoreEl.textContent = playerScore;
    skpScoreEl.textContent = skipQuestion;
    strScoreEl.textContent = strikeScore;
}

function renderResults(){
    //update results - reult els 
}

function generateQuestion (){
    const questionList = [
        { question: "True or False: The largest country in the world by land area is Russia.", answer: "true" },
        { question: "True or False: The capital of France is Paris.", answer: "true" },
        { question: "True or False: The continent of South America is located entirely in the Southern Hemisphere.", answer: "true" },
        { question: "True or False: The Great Barrier Reef is located off the coast of Australia.", answer: "true" },
        { question: "True or False: The highest mountain in North America is Denali (formerly known as Mount McKinley).", answer: "true" }
    ];

const randomQuestion = Math.floor(Math.random()*questionList.length);
return questionList[randomQuestion]
}

function checkWinner (p1, p2) {
    console.log('check winner', p1, p2)
}

init();