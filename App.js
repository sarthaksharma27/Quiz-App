let questions = [
    {
        question: "1. Javascript is an _______ language?",
        options: [
            "a- Object-Oriented",
            "b- Object-Based",
            "c- Procedural",
            "d- None of the above"
        ],
        correctAnswer: "a"
    },
    {
        question: "2. Which of the following keywords is used to define a variable in Javascript?",
        options: [
            "a- var",
            "b- let",
            "c- Both A and B",
            "d- None of the above"
        ],
        correctAnswer: "c"
    },
    {
        question: "3. Which of the following methods is used to access HTML elements using Javascript?",
        options: [
            "a- getElementbyId()",
            "b- getElementsByClassName()",
            "c- Both A and B",
            "d- None of the above"
        ],
        correctAnswer: "c"
    },
    {
        question: "4. Upon encountering empty statements, what does the Javascript Interpreter do?",
        options: [
            "a- Throws an error",
            "b- Ignores the statements",
            "c- Gives a warning",
            "d- None of the above"
        ],
        correctAnswer: "b"
    },
    {
        question: "5. Which of the following methods can be used to display data in some form using Javascript?",
        options: [
            "a- document.write()",
            "b- console.log()",
            "c- window.alert()",
            "d- All of the above"
        ],
        correctAnswer: "d"
    }
];

let startButton = document.querySelector(".start-button");
let timerElement = document.querySelector(".time");
let mainSection = document.querySelector(".main");
let quizContainer = document.querySelector(".quiz-container");
let questionElement = document.querySelector(".question h2");
let optionsElements = document.querySelectorAll(".option");
let currentQuestionIndex = 0;
let score = 0;
let countdown = 50;
let timerInterval;

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    countdown--;
    timerElement.textContent = countdown;

    if (countdown === 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
        resetQuiz();
    }
}

function startQuiz() {
    if (questions.length > 0) {
        showQuestion(currentQuestionIndex);
        mainSection.style.display = "none";
        quizContainer.style.display = "block";
        startTimer();
    } else {
        console.error('No questions loaded.');
    }
}

function showQuestion(index) {
    let currentQuestion = questions[index];
    questionElement.textContent = currentQuestion.question;

    for (let i = 0; i < optionsElements.length; i++) {
        optionsElements[i].textContent = currentQuestion.options[i];
    }
}

function checkAnswer(selectedIndex) {
    let currentQuestion = questions[currentQuestionIndex];
    let correctIndex = currentQuestion.correctAnswer.charCodeAt(0) - 'a'.charCodeAt(0);

    if (selectedIndex === correctIndex) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert("Quiz completed!\nYour score: " + score);
        resetQuiz();
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    countdown = 50;
    mainSection.style.display = "block";
    quizContainer.style.display = "none";
    clearInterval(timerInterval);
    timerElement.textContent = countdown;
}

optionsElements.forEach((optionElement, index) => {
    optionElement.addEventListener('click', () => {
        checkAnswer(index);
    });
});

startButton.addEventListener('click', startQuiz);




