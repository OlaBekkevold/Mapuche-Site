// An array of all the questions, options and answers
const questions = [
    {
        question: "Hvilken verdensdel er opprinnelsen av Mapuchefolket?",
        options: ["Asia", "Africa", "Sør-America", "Europa"],
        answer: "Sør-America"
    },
    {
        question: "Hvem var den spanske governøren som døde i 1598?",
        options: ["Diago Santos", "Pelantaro", "Amigo", "Fernandes"],
        answer: "Pelantaro"
    },
    {
        question: "Når ble Chile selvstendig?",
        options: ["1814", "1818", "1809", "1825"],
        answer: "1818"
    },
    {
        question: "Var det et skriftsystem før spanskene kom?",
        options: ["Ja", "Nei"],
        answer: "Nei"
    },
    {
        question: "Hvilken by gis det morsmålopplæring?",
        options: ["Temyo", "Tokyo", "Temuco", "Yotemu"],
        answer: "Temuco"
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
function reset() {
    iteration = 0;
    score = 0;

    questionTitle.innerHTML = questions[iteration].question;
    scoreCounter.innerHTML = "Din score er " + score + " av " + questions.length;

    for (let i = 0; i < options.length; i++) {
        options[i].innerHTML = questions[iteration].options[i];
    }

}

restartBtn.addEventListener("click", reset);

function updateScore(answer) {
    console.log(answer)
    // Check if the answer is correct
    if (answer === questions[iteration].answer) {
        score++;
        console.log("Riktig svar! Din score er nå: " + score);

    } else {
        console.log("Feil svar! Din score er: " + score);
    }

    // Update the question and options
    iteration++;
    console.log("Iteration: " + iteration);
    // Check if the quiz is finished
    if (iteration >= questions.length) {
        alert("Du har fullført quizen! Din score er: " + score + " av " + questions.length);
        reset();
    } else {
        questionTitle.innerHTML = questions[iteration].question;
        scoreCounter.innerHTML = "Din score er " + score + " av " + questions.length;

        for (let i = 0; i < options.length; i++) {
            options[i].innerHTML = questions[iteration].options[i];
        }
    }

}
