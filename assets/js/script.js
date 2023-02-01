
/**
 * questions for true or false function
 */

let score = 0;
const question = [
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

    var randomQuestion;
    var response;
      
const checkAnswer = (response) => {
    if (response === "true" && randomQuestion.answer === true) {
    score++;
    alert("Correct!");
    } else if {
    (response === "false" && randomQuestion.answer === false) {
    score++;
    alert("Correct!");
    } else {
    alert("Incorrect.");    
    }
};

randomQuestion = questions[Math.floor(math.random() * questions.length)];
response = prompt(randomQuestion.question);
checkAnswer(response);

function true_clicked() {
    var true = document.getElementById("true").value;
    checkAnswer(true);
}

function false_clicked() {
    var false = document.getElementById("false").value;
    checkAnswer(false);
}