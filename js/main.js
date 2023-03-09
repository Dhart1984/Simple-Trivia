// constants 



//apps state (variables) //what data the application of the game needs to render
        //playerScore, rightAnswer
let playerScore;
let skipQuestion;
let strikeScore;
let currentQuestion = generateQuestion();
                                //cached elements 

//cached scores
const pScoreEl = document.querySelector("#p-score");
const skpScoreEl = document.querySelector("#skip-score");
const strScoreEl = document.querySelector("#strike-score");
const questionEl = document.querySelector('#questions')

//cached buttons 
const skipBtnEl = document.querySelector("#skip-button");
const tbtnEl = document.querySelector('#true-button');
const fbtnEl = document.querySelector('#false-button');
const sbtnEl = document.querySelector('#start-button');


                                //event listeners

function handleClick(evt) {
    const playerChoice = evt.target.textContent
    checkWinner(playerChoice, currentQuestion)
}

skipBtnEl.addEventListener('click', handleClick)
    console.log();



tbtnEl.addEventListener('click', function(){
    console.log("this is true");
 
})

fbtnEl.addEventListener('click', function(){
    console.log("This is False");
})

sbtnEl.addEventListener('click', function(){
    console.log("I'm Ready to Play!");
})
                                //functions 

function init(){
    console.log('starting game')
    playerScore = 0;
    skipQuestion = 2;
    strikeScore = 3;
    currentQuestion = "ready to play";

    render();
}

function render(){
    console.log('rendering game')
    renderText();
    //renderResults();
   // generateQuestion();
}

function renderText(){
    //update cached dom elements - scoreEls
    pScoreEl.textContent = playerScore;
    skpScoreEl.textContent = skipQuestion;
    strScoreEl.textContent = strikeScore;
   
    
}

function renderResults(){
    // add game logic here too? if the player won or lost // i could addcheck winner / then create anew elelmt that displa whether a player won or lost, then use textContent with the newly created element?
}

function generateQuestion (){
    const questionList = [
        { question: "True or False: The largest country in the world by land area is Russia.", answer: "true" },
        { question: "True or False: The capital of France is Paris.", answer: "true" },
        { question: "True or False: The continent of South America is located entirely in the Southern Hemisphere.", answer: "true" },
        { question: "True or False: The Great Barrier Reef is located off the coast of Australia.", answer: "true" },
        { question: "True or False: The highest mountain in North America is Denali (formerly known as Mount McKinley).", answer: "true" },
        { question: "True or False: The Earth is flat.", answer: "false" },
        { question: "True or False: A tomato is a fruit.", answer: "true" },
        { question: "True or False: George Washington was the first President of the United States.", answer: "true" },
        { question: "True or False: The human body has five senses.", answer: "true" },
        { question: "True or False: Water boils at 100 degrees Fahrenheit.", answer: "false" },
        { question: "True or False: The Statue of Liberty is located in Los Angeles.", answer: "false" },
        { question: "True or False: An octagon has six sides.", answer: "false" },
        { question: "True or False: The planet Mars is closer to the Sun than Earth.", answer: "false" },
        { question: "True or False: The Great Wall of China is visible from space.", answer: "false" },
        { question: "True or False: The primary colors are red, yellow, and blue.", answer: "true" }

    ];

const currentQuestion = Math.floor(Math.random()*questionList.length);
return questionList[currentQuestion]
}

function checkWinner (playerChoice, currentQuestion) {
    console.log('check winner', playerChoice)
    if(playerChoice === currentQuestion.answer) {
        playerScore += 1;
    } else {
        playerScore -= 1;
    }
}

function gameOver (){
    if(playerScore === 5 || questionCount === 10);
    //gameOver();
}

init();

//render updates the game
//init starts or initializes the game
//every function that i want to update seems like it should be "called" in the render category