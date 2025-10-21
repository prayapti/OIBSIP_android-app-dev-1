// Quiz questions
const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Delhi"
    },
    {
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage"
    },
    {
        question: "Which planet is called the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.querySelectorAll(".option-btn");
    const resultEl = document.getElementById("result");
    resultEl.innerHTML = "";
    document.getElementById("next-btn").style.display = "none";

    questionEl.textContent = quizData[currentQuestion].question;
    optionsEl.forEach((btn, index) => {
        btn.textContent = quizData[currentQuestion].options[index];
        btn.disabled = false;
        btn.style.backgroundColor = "#007bff";
    });
}

function checkAnswer(button) {
    const selectedAnswer = button.textContent;
    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        button.style.backgroundColor = "#28a745"; // Green
        document.getElementById("result").textContent = "Correct!";
        score++;
    } else {
        button.style.backgroundColor = "#dc3545"; // Red
        document.getElementById("result").textContent = `Wrong! Correct answer: ${correctAnswer}`;
    }

    document.querySelectorAll(".option-btn").forEach(btn => btn.disabled = true);
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("score").textContent = `Quiz Finished! Your score: ${score}/${quizData.length}`;
    }
}

// Load the first question
loadQuestion();
