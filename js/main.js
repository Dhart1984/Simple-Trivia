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


//apps state (variables) //what data the application of the game needs to render
//playerScore, rightAnswer
let playerScore;
//let showQuestion; // i added this to see if i could use it to show my questions in the browser -didnt work
let currentQuestion;
let questionCount;

//cached elements 

//cached scores
const pScoreEl = document.querySelector("#p-score");
const questionEl = document.querySelector('#questions')
//cached buttons 
const tbtnEl = document.querySelector('#true-button');
const fbtnEl = document.querySelector('#false-button');
const sbtnEl = document.querySelector('#start-button');
const showQuestEl = document.querySelector('#show-question') // i added this to see if i could use it to show my questions in the browser -didnt work

//event listeners
//removed the for each becaue it wasnt an array per instructor notes
function handleClick(evt) {
    const playerChoice = evt.target.textContent.toLowerCase();
    console.log(playerChoice);
    console.log(currentQuestion);
    // tbtnEl.style.color = green;
    // fbtnEl.style.color = red;
    //let showQuestion = evt.targert.textContent
    checkWinner(playerChoice, currentQuestion);
    currentQuestion = generateQuestion()
    renderColor(evt);
    render();
}
//old skip button - just switch elements -variables
// teh buttons are working fine except true which shows"check winner True on one line, and incorrect on the next"
tbtnEl.addEventListener('click', handleClick)
console.log();

fbtnEl.addEventListener('click', handleClick)


sbtnEl.addEventListener('click', handleClick)
console.log("I'm Ready to Play!");

//functions 

function init() {
    console.log('starting game')
    playerScore = 0;
    questionCount = 0;
    currentQuestion = generateQuestion();
    render();
}

function render() {
    console.log('rendering game')
    renderScores();
    generateQuestion();
    //renderResults();
    // generateQuestion();
}



function renderColor(evt) {
    if (evt.target.textContent === "True") {
        tbtnEl.style.background = 'green';
    } else if (evt.target.textContent === 'False') {
        fbtnEl.style.background = "red"

    } else if (evt.target.textContent === "Start"){
        sbtnEl.style.background = 'blue';

    }
    //return init(); thought this would end the code to return colors back to no-color 


}


function renderScores() {
    //update cached dom elements - scoreEls
    pScoreEl.textContent = playerScore;
    // had this as render text 

    showQuestEl.textContent = currentQuestion.question;
}

function renderResults() {
    // add game logic here too? if the player won or lost // i could addcheck winner / then create anew elelmt that displa whether a player won or lost, then use textContent with the newly created element?
}

function generateQuestion() {
    let currentQuestion = Math.floor(Math.random() * questionList.length);


    return questionList[currentQuestion];

    // showQuestEl.textContent; //= showQuestion; added this to see if i could make the output for generate questions show up 
}
// i understand that choice and cquestion are parameters that we will pass each argument in, but i dont know where orhow we determine what is a player choice, i assumed it would be the button clicks, i need to go back and rewatch the lessons to see what was done.
function checkWinner(playerChoice, currentQuestion) {
    console.log('check winner', playerChoice)
    if (playerChoice === currentQuestion.answer) {
        playerScore += 1;
        console.log("correct")
    } else {
        playerScore -= 1;
        console.log("incorrect")
    };
    gameOver();
}

function gameOver() {
    if (playerScore === 5 || questionCount === 10) alert("play again?");

    //gameOver();
}

init();

//render updates the game
//init starts or initializes the game
//every function that i want to update seems like it should be "called" in the render category