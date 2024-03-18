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

let score = 0;
function increaseScore() {
    score++;
    console.log("Riktig svar! Din score er nå: " + score);
}


let answer = "";

answer = prompt(questions[0].question + "Svaralternativ: " + questions[0].options + "Skriv inn ditt svaralternativ");


if (answer === questions[0].answer) {
    increaseScore();

} else {
    console.log("Feil svar! Din score er: " + score);
}




