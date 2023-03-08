// creating the objects and object arrays 

function gernerateQuestion (){
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


