const questions = [
    {
        question: "What is the rarest blood type in the world?",
        answers: [
            { text: "AB negative", correct: true },
            { text: "O positive", correct: false },
            { text: "A positive", correct: false },
            { text: "B negative", correct: false },
        ]
    },
    {
        question: "Which element has the highest melting point?",
        answers: [
            { text: "Tungsten", correct: true },
            { text: "Carbon", correct: false },
            { text: "Iron", correct: false },
            { text: "Platinum", correct: false },
        ]
    },
    {
        question: "What is the only continent without a desert?",
        answers: [
            { text: "Europe", correct: true },
            { text: "South America", correct: false },
            { text: "North America", correct: false },
            { text: "Australia", correct: false },
        ]
    },
    {
        question: "Which country has the most volcanoes?",
        answers: [
            { text: "Indonesia", correct: true },
            { text: "Japan", correct: false },
            { text: "Italy", correct: false },
            { text: "United States", correct: false },
        ]
    }
];

const $questionElement = document.getElementById("question");
const $answerButtons = document.getElementById("answer-buttons");
const $nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    $nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion () {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    $questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        $answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState () {
    $nextButton.style.display = "none";
    while ($answerButtons.firstChild) {
        $answerButtons.removeChild($answerButtons.firstChild);
    }
}

function selectAnswer (e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from($answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    $nextButton.style.display = "block";
}

function handleNextButton () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore () {
    resetState();
    $questionElement.innerHTML = `Your scored ${score} out of ${questions.length}`;
    $nextButton.innerHTML = "Play Again";
    $nextButton.style.display = "block";
}

$nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();