/**
 * questions for true or false game
 */


let currentQuestion = 0;
let score = 0;
var questions = [{
        question: "New York City is composed of between 36 and 42 islands",
        answer: true
    },
    {
        question: "The Tour de France always finishes in Italy",
        answer: false
    },
    {
        question: "Galapagos tortoises sleep up to 16 hours a day",
        answer: true
    },
    {
        question: "Pepperoni is the most popular pizza topping in the US",
        answer: true
    },
    {
        question: "Every golf ball has the same number of dimples",
        answer: false
    },
    {
        question: "China has the longest coastline in the world",
        answer: false
    },
    {
        question: "The human body is about 60% water",
        answer: true
    },
    {
        question: "An astronaut has played golf on the moon",
        answer: true
    },
    {
        question: "Humans lose more than 80% of heat from their feet",
        answer: false
    },
    {
        question: "The Chinese New Year is celebrated on the same day every year",
        answer: false
    },
    {
        question: "The largest living frog is the Goliath frog of West Africa.",
        answer: true
    },
    {
        question: "The letter “T” is the most common in the English Language.",
        answer: false
    },
    {
        question: "Toy Story was the first movie Pixar made.",
        answer: true
    },
    {
        question: "An astronaut has played golf on the moon.",
        answer: true
    },
    {
        question: "There are 30 NFL teams.",
        answer: false
    },
    {
        question: "The New York Marathon is the largest in the world.",
        answer: true
    },
    {
        question: "The Chinese New Year is celebrated on the same day every year.",
        answer: false
    },
    {
        question: "Caesar Salad originates from Italy.",
        answer: false
    },
    {
        question: "Infants have more bones than adults.",
        answer: true
    },
    {
        question: "Bats are blind.",
        answer: false
    },
    {
        question: "The song “We Don't Talk About Bruno” from Encanto is the first Disney song to hit #1 on the Billboard Hot 100 chart in 29 years.",
        answer: true
    },
];

/**
 * Displays five random questions for the game
 */

let randomQuestions = [];
for (let i = 0; i < 5; i++){
    let randomIndex = Math.floor(Math.random() * questions.length);
    randomQuestions.push(questions[randomIndex]);
    questions.splice(randomIndex, 1);
}

questions = randomQuestions;

const displayQuestion = () => {
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
};

/**
 * checks if the answer is correct or incorrect and increments the score accordingly
 */

function checkAnswer(response) {
    if (response === "true" && questions[currentQuestion].answer === true) {
        score++;
       /**code from sweet alert examples */
        Swal.fire({
            title: "Correct!",
            text: "Well done!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
        });
        incrementScore();
    } else if (response === "false" && questions[currentQuestion].answer === false) {
        score++;
        /**code from sweet alert examples */
        Swal.fire({
            title: "Correct!",
            text: "Well done!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
        });
        incrementScore();
    } else {
       /**code from sweet alert examples */
        Swal.fire({
            title: "Incorrect",
            text: "Ooops..not the right answer.",
            icon: "error",
            timer: 1500,
            showConfirmButton: false
        });
        incrementIncorrectAnswer();
    }

/**
 * Adds a pop up with the total score and askes if the user wants to play again 
 * */
    currentQuestion++;
    if (currentQuestion === questions.length) {
        /**code from sweet alert examples */
        Swal.fire({
            title: "How did you do?",
            text: "You got " + score + " out of " + questions.length,
            icon: "info",
            confirmButtonText: "Play again?"
        }).then((result) => {
            if (result.value) {
                currentQuestion = 0;
                score = 0;
                randomQuestions = [];
                for (let i = 0; i < 5; i++){
                    let randomIndex = Math.floor(Math.random() * questions.length);
                    randomQuestions.push(questions[randomIndex]);
                    questions.splice(randomIndex, 1);
                }
                
                questions = randomQuestions;
                displayQuestion();
            }
        });
        
    }

    displayQuestion();
    updateScore();
}

/**
 * updates the score after the questions have been answered
 */

const updateScore = () => {
    document.getElementById("score").innerHTML = score;
};

document.getElementById("true").addEventListener("click", function () {
        checkAnswer("true");
});


document.getElementById("false").addEventListener("click", function () {
        checkAnswer("false");
});


displayQuestion();
updateScore();


/**
 * gets the current correct answers score and increments it by 1
 */

function incrementScore() {
    document.getElementById("correct").innerHTML = parseInt(document.getElementById("correct").innerHTML) + 1;
}


/**
 * gets the current incorrect answers score and increments it by 1
 */
function incrementIncorrectAnswer() {
    document.getElementById("incorrect").innerHTML = parseInt(document.getElementById("incorrect").innerHTML) + 1;
}

