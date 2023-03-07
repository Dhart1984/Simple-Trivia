// constants 
//apps state (variables) //what data the application of the game needs to render
        //playerScore, rightAnswer
let playerScore;
let skipQuestion;
let wrongScore;
//cached elements 

const pScoreEl = document.querySelector("#p-score");
const sScoreEl = document.querySelector("#s-score");
const wScoreEl = document.querySelector("#w-score");

//event listeners
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
}

//init();