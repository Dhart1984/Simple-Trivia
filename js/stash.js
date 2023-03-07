// creating the objects and object arrays 

function gernerateQuestion (){
    const questionList = ['q1', 'q2', 'q3', 'q4', 'q5']
    const randomQuestion = Math.floor(Math.random()*questionList.length);
    return questionList[randomQuestion]
}