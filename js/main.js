// constants 
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


let playerScore;
let currentQuestion;
let questionCount;

const pScoreEl = document.querySelector("#p-score");
const tbtnEl = document.querySelector('#true-button');
const fbtnEl = document.querySelector('#false-button');
const sbtnEl = document.querySelector('#start-button');
const showQuestEl = document.querySelector('#show-question')


function handleClick(evt) {
    const playerChoice = evt.target.textContent.toLowerCase();
    console.log(playerChoice);
    console.log(currentQuestion);
    // tbtnEl.style.color = green;
    // fbtnEl.style.color = red;
    //let showQuestion = evt.targert.textContent
    checkWinner(playerChoice, currentQuestion);
   
    renderColor(evt);
    cb();
    //render();
}

function startClick(evt) {
    let playerChoiceStart = evt.target.textContent.toLowerCase();
    //console.log(playerChoiceStart);
    currentQuestion = generateQuestion()
    cb();
    
    init();
}

tbtnEl.addEventListener('click', handleClick)
console.log();

fbtnEl.addEventListener('click', handleClick)


sbtnEl.addEventListener('click', startClick);
    
  


function init() {
    console.log('starting game')
    playerScore = 0;
    questionCount = 0;
    currentQuestion = generateQuestion();
    render();
}

function render() {
    console.log('rendering game')


}

function renderColor(evt) {
    if (evt.target.textContent === "True") {
        tbtnEl.style.background = 'green';
    } else if (evt.target.textContent === 'False') {
        fbtnEl.style.background = "red"
    } else if (evt.target.textContent === "Start") {
        sbtnEl.style.background = 'blue';

    }
}

function renderElements() {
    pScoreEl.textContent = playerScore;
    showQuestEl.textContent = currentQuestion.question;
}

function cb() {
    renderElements();
    generateQuestion();
    gameOver();
}

function generateQuestion() {
    let currentQuestion = Math.floor(Math.random() * questionList.length);
    return questionList[currentQuestion];
}

function checkWinner(playerChoice, currentQuestion) {
    console.log('check winner', playerChoice)
    if (playerChoice === currentQuestion.answer) {
        playerScore += 1;
        console.log("correct")
    } else {
        playerScore -= 1;
        console.log("incorrect")
    };

}

function gameOver() {
    if (playerScore === 5 || questionCount === 10) alert("play again?");
}

function startGame() {

}

init();

