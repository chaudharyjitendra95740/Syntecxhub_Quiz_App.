const questions = [
  {
    question: "Which language runs in a web browser?",
    answers: [
      {text: "java",correct: "false"},
      {text: "C",correct: "false"},
      {text: "Python",correct: "false"},
      {text: "javaScript",correct: "true"},
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      {text:"Cascading Style Sheets",correct:"true"},
      {text:"Central Style Sheets",correct:"false"},
      {text:"Cascading Simpal Sheets",correct:"false"},
      {text:"Central Simpal Sheets",correct:"false"},
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      {text:"Higer Text Markup Langauge",correct:"false"},
      {text:"Hyper Text Markup Langauge",correct:"true"},
      {text:"Hyper Transport Markup Langauge",correct:"false"},
      {text:"Hyper Text Markdown Langauge",correct:"false"},
    ]
  },
  {
    question: "What is HTML by used?",
    answers: [
      {text:"JavaScript is a programming language used to make web pages interactive and dynamic.",correct:"false"},
      {text:"It is used to create and structure web pages.",correct:"true"},
      {text:"Hyper Transport Markup LangaugeIt is used to style and design web pages.",correct:"false"},
      {text:"Hyper Text Markdown Langauge",correct:"false"},
    ]
  },
  {
    question: "What is CSS by used?",
    answers: [
      {text:"JavaScript is a programming language used to make web pages interactive and dynamic.",correct:"false"},
      {text:"It is used to create and structure web pages.",correct:"false"},
      {text:"It is used to style and design web pages.",correct:"true"},
      {text:"Hyper Text Markdown Langauge",correct:"false"},
    ]
  },
  {
    question: "What is JavaScript by used?",
    answers: [
      {text:"JavaScript is a programming language used to make web pages interactive and dynamic.",correct:"true"},
      {text:"It is used to create and structure web pages.",correct:"false"},
      {text:"It is used to style and design web pages.",correct:"false"},
      {text:"Hyper Text Markdown Langauge",correct:"false"},
    ]
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const scoreContainer = document.getElementById("score-container");
const scoreText = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(answer) {
  if (answer.correct) {
    score++;
  }
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = "Quiz Completed!";
  scoreContainer.style.display = "block";
  scoreText.innerHTML = `${score} / ${questions.length}`;
  nextButton.style.display = "none";
  restartButton.style.display = "block";
}

restartButton.addEventListener("click", () => {
  scoreContainer.style.display = "none";
  restartButton.style.display = "none";
  startQuiz();
});

startQuiz();

