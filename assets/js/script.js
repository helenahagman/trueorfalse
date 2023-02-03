

/**
 * questions for true or false game
 */

let currentQuestion = 0;
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
 * checks if the answer is correct or incorrect 
 */
            
const checkAnswer = response => {
    if (response === "true" && questions[currentQuestion].answer === true) {
    score++;
    alert("Correct!");
    } else if (response === "false" && questions[currentQuestion].answer === false) {
    score++;
    alert("Correct!");
    } else {
    alert("Incorrect.");    
    }

    const updateScore = () => {
        document.getElementById("score").innerHTML = score;
    };

currentQuestion++;
if (currentQuestion < questions.length) {
displayQuestion();
} 

updateScore();
};

document.getElementById("true").addEventListener("click", function(){
    checkAnswer("true");
});

document.getElementById("false").addEventListener("click", function(){
    checkAnswer("false");
});

displayQuestion();
updateScore();