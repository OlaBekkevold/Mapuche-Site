// An array of all the questions, options and answers
const questions = [
    {
        question: "Hvor mange folk består Mapuche folket av?",
        options: ["1,9 millioner", "1,7 millioner", "2 millioner", "1,5 millioner"],
        answer: "1,9 millioner"
    },
    {
        question: "What is the capital of Germany?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Berlin"
    },
    {
        question: "What is the capital of Italy?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Rome"
    },
    {
        question: "What is the capital of England?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "London"
    }
];


// Define global variables
const questionTitle = document.getElementById("question");
const options = document.querySelectorAll(".answerBtn");
const scoreCounter = document.getElementById("scoreCount");
const restartBtn = document.getElementById("restartBtn");
let score = 0;
let iteration = 0;

// Display the first question
questionTitle.innerHTML = questions[iteration].question;

for (let i = 0; i < options.length; i++) {
    options[i].innerHTML = questions[iteration].options[i];
}

// Add event listener to each option which will register the answer and update the score
options.forEach(option => {
    option.addEventListener("click", () => {
        const answer = option.innerHTML;

        updateScore(answer)
    })
})

// Restart the quiz
restartBtn.addEventListener("click", () => {
    iteration = 0;
    score = 0;

    questionTitle.innerHTML = questions[iteration].question;
    scoreCounter.innerHTML = "Din score er " + score + " av " + questions.length;

    for (let i = 0; i < options.length; i++) {
        options[i].innerHTML = questions[iteration].options[i];
    }
})

function updateScore(answer) {
    console.log(answer)
    if (answer === questions[iteration].answer) {
        score++;
        console.log("Riktig svar! Din score er nå: " + score);

    } else {
        console.log("Feil svar! Din score er: " + score);
    }

    iteration++;
    console.log("Iteration: " + iteration);

    questionTitle.innerHTML = questions[iteration].question;
    scoreCounter.innerHTML = "Din score er " + score + " av " + questions.length;

    for (let i = 0; i < options.length; i++) {
        options[i].innerHTML = questions[iteration].options[i];
    }
}
