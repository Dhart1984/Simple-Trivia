***Step 1**
-   create basic elements in html and outline of main components for the structure of the game in JS .
***Step 2**
-   define the pieces of state tied to the win condition 
    -   playerscore - pScore
    -   wrongAnswer - wScore
    -   skipQuesion - sScore
-   Inititalize Variable 

***Step 3**
-   create variables to cache element references 
    -   pScore
    -   wAnswer
    -   skipQuestion
        -   use document.queryselector to attache node element to JS 
        -   remember the # tag when using queryselector to attach elements with ID's (dont need pound sign if use getelementbyID)
***Step 4**
-   Initialize State Values 
    -   under functions in JS outline: Create init function 
        -   set initial state for our H1's(staevariables) 
        -   what should the state of the game when the game starts?
            -   player score will = 0 
            -   skips will = 0 
            -   wrong answeres (strikes) will also = 0 
    -   Define Render function 
        -   call render function 
    -   Invoke the Init Function 
***Step 5**
-   Add aditional render functions 
    -   render scores & render results 
        -   renderscores 
            -   attach the cached elements created from the state variables to the render scores function using textContent = and directing them back to the variables that show the state of the game when it starts 
                -   pScoreEl.textContent = playerScore
                    -   we defined what playerScore is = too above in the init function.
                        -   when tehe game renders, itwillshow the state of the game in the init function .
***Step 6**
-   Adding Click Events 
    -   under event listeners in the outline, define a handleClick function 
        -   function handleClick(evt){
            console.log(evt.target.textContent)
        }
***Step 7**
-   cache the buttons in a new variable. Since there are no id's on the option buttons, use queryselctor all, and in the ("use the name of the element in html - in this butons")
***Step 8**
-   attach/bind handleclick to each of the button
***Step 9**
***Step 10**
***Step 11**
***Step 12**
***Step 13**
***Step 14**
***Step 15**
***Step 16**
***Step 17**
***Step 18**
***Step 19**
***Step 20**
***Step 21**
***Step 22**
***Step 23**
***Step 24**
***Step 25**
