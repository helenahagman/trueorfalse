

/**
 * questions for true or false game
 */


let currentQuestion = 0;
let score = 0;
const questions = [
    {
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
    }
];

    const displayQuestion = () => {
        document.getElementById("question").innerHTML = questions[currentQuestion].question;
    };

/**
 * checks if the answer is correct or incorrect and increments the score accordingly
 */
            
function checkAnswer(response) {
    if (response === "true" && questions[currentQuestion].answer === true) {
        score++;
        alert("Correct!");
        incrementScore();
    } else if (response === "false" && questions[currentQuestion].answer === false) {
        score++;
        alert("Correct!");
        incrementScore();
    } else {
        alert("Incorrect.");
        incrementIncorrectAnswer();
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    }

    updateScore();
}

const updateScore = () => {
    document.getElementById("score").innerHTML = score;
};

function true_clicked() {
    checkAnswer("true");

    document.getElementById("true").addEventListener("click", function(){
    checkAnswer("true");
});
}

function false_clicked() {
    checkAnswer("false");

    document.getElementById("false").addEventListener("click", function(){
    checkAnswer("false");
});
}

displayQuestion();
updateScore();


/**
 * get the current correct answers score and increments it by 1
 */
function incrementScore() {
    document.getElementById("correct").innerHTML = parseInt(document.getElementById("correct").innerHTML) + 1;
}


/**
 * get the current incorrect answers score and increments it by 1
 */
function incrementIncorrectAnswer() {
    document.getElementById("incorrect").innerHTML = parseInt(document.getElementById("incorrect").innerHTML) + 1;
}
