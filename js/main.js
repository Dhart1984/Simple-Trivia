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
    { question: "True or False: The primary colors are red, yellow, and blue.", answer: "true" },
    { question: "True or False: The largest country in the world by land area is Russia.", answer: "true" },
    { question: "True or False: The continent of South America is located entirely in the Southern Hemisphere.", answer: "true" },
    { question: "True or False: The currency of Japan is the yen.", answer: "true" },
    { question: "True or False: The Nile River is the longest river in the world.", answer: "false" },
    { question: "True or False: The Statue of Liberty was a gift from France to the United States.", answer: "true" },
    { question: "True or False: The largest ocean in the world is the Atlantic Ocean.", answer: "false" },
    { question: "True or False: The smallest country in the world by land area is Monaco.", answer: "true" },
    { question: "True or False: The first human to walk on the moon was Neil Armstrong.", answer: "true" },
    { question: "True or False: The country of Egypt is located in South America.", answer: "false" },
    { question: "True or False: The country of Canada has two official languages, English and French.", answer: "true" },
    { question: "True or False: The Great Wall of China is visible from space.", answer: "false" },
    { question: "True or False: The national animal of Scotland is the unicorn.", answer: "true" },
    { question: "True or False: The Amazon rainforest is the largest rainforest in the world.", answer: "true" },
    { question: "True or False: The Eiffel Tower is located in London.", answer: "false" },
    { question: "True or False: The word 'sushi' refers to raw fish.", answer: "false" },
    { question: "True or False: The planet Venus rotates clockwise.", answer: "false" },
    { question: "True or False: The Great Sphinx of Giza has a woman's face.", answer: "false" },
    { question: "True or False: The world's largest desert is the Sahara Desert.", answer: "false" },
    { question: "True or False: The famous physicist Albert Einstein failed math in school.", answer: "false" },
    { question: "True or False: The tallest mammal in the world is the giraffe.", answer: "true" },
    { question: "True or False: The human brain stops growing after age 5.", answer: "false" },
    { question: "True or False: The smallest bird in the world is the hummingbird.", answer: "true" },
    { question: "True or False: The element gold is more dense than lead.", answer: "false" },
    { question: "True or False: The Mona Lisa is a self-portrait.", answer: "false" },
    { question: "True or False: The human body contains more bacterial cells than human cells.", answer: "true" },
    { question: "True or False: The world's largest iceberg was larger than the country of Belgium.", answer: "true" },
    { question: "True or False: The Great Wall of China is the longest wall in the world.", answer: "false" },
    { question: "True or False: The longest river in Europe is the Danube River.", answer: "true" },
    { question: "True or False: The study of linguistics focuses solely on the analysis of language structure.", answer: "false" },
    { question: "True or False: In physics, energy is always conserved in a closed system.", answer: "true" },
    { question: "True or False: The sum of the angles of a triangle is always 180 degrees.", answer: "true" },
    { question: "True or False: A monocotyledon plant has only one cotyledon or seed leaf.", answer: "true" },
    { question: "True or False: In computer science, an algorithm is a step-by-step procedure for solving a problem.", answer: "true" },
    { question: "True or False: In chemistry, an acid increases the concentration of hydrogen ions in a solution.", answer: "true" },
    { question: "True or False: The highest mountain peak in North America is Mount Everest.", answer: "false" },
    { question: "True or False: In psychology, the unconscious mind has no influence on behavior.", answer: "fals,e" },
    { question: "True or False: The primary function of the cerebellum is to regulate breathing.", answer: "false" },
    { question: "True or False: The theory of evolution by natural selection was proposed by Charles Darwin.", answer: "true" },
    { question: "True or False: All mammals have hair or fur.", answer: "true" },
    { question: "True or False: The element carbon is essential for life.", answer: "true" },
    { question: "True or False: The square root of a negative number is always a complex number.", answer: "true" },
    { question: "True or False: The film 'Rashomon' was directed by Akira Kurosawa.", answer: "true" },
    { question: "True or False: The 'Big Bang' theory explains the origin of the universe.", answer: "true" },
    { question: "True or False: The novel 'To Kill a Mockingbird' was written by Harper Lee.", answer: "true" },
    { question: "True or False: The study of economics focuses solely on the production and distribution of goods and services.", answer: "false" },
    { question: "True or False: The political ideology of socialism advocates for private ownership of the means of production.", answer: "false" },
    { question: "True or False: The ancient Greek philosopher Plato was a student of Socrates.", answer: "true" },
    { question: "True or False: The majority of the Earth's surface is covered by water.", answer: "true" },
    { question: "True or False: The equation E=mc^2 is a fundamental principle of modern physics.", answer: "true" },
    { question: "True or False: The 'Uncanny Valley' is a psychological concept that describes the discomfort people feel when they encounter robots or other artificial beings that look almost, but not quite, human.", answer: "true" },
    { question: "True or False: The study of anthropology focuses solely on the history and cultures of human societies.", answer: "false" },
    { question: "True or False: The primary function of red blood cells is to carry oxygen from the lungs to the body's tissues.", answer: "true" },

];


let playerScore;
let currentQuestion;
let questionCount;
let playerResult;


const pScoreEl = document.querySelector("#p-score");
const tbtnEl = document.querySelector('#true-button');
const fbtnEl = document.querySelector('#false-button');
const sbtnEl = document.querySelector('#start-button');
const showQuestEl = document.querySelector('#show-question')
const pWinResultEl = document.querySelector('#playerwin-result');
const pLossResultEl = document.querySelector('#playerloss-result');


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

    init();
    // cb();


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
    playerResult = "Good Luck";
    render();
}

function render() {
    renderElements();

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
    setTimeout(function () {
        evt.target.style.background = ""
    }, 800);
}

function renderElements() {
    pScoreEl.textContent = playerScore;
    showQuestEl.textContent = currentQuestion.question;
}

function cb() {

    currentQuestion = generateQuestion();
    gameOver();
    render();
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
    if (playerScore === 5 || questionCount === 10) {
        
        init();
    }
}

//function startGame(){}

//init();

