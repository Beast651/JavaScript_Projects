const questions = [
  {
    question: " Which of the following is not a fundamental data type in C++?",
    answers: [
      { text: "int", correct: false },
      { text: "string", correct: true },
      { text: "char", correct: false },
      { text: "float", correct: false },
    ],
  },

  {
    question: "What does the (volatile) keyword in C++ signify?",
    answers: [
      {
        text: "It indicates that a variable is constant and cannot be modified.",
        correct: false,
      },
      {
        text: " It instructs the compiler to avoid optimizations involving the variable.",
        correct: true,
      },
      {
        text: "It specifies the visibility of variables in different scopes.",
        correct: false,
      },
      {
        text: "It denotes a variable that can only be accessed by certain functions.",
        correct: false,
      },
    ],
  },

  {
    question: "Which operator is used for dynamic memory allocation in C++?",
    answers: [
      { text: "alloc", correct: false },
      { text: "malloc", correct: false },
      { text: "alloc_mem", correct: false },
      { text: "new", correct: true },
    ],
  },
  {
    question:
      "Identify the correct function from which the execution of C++ program starts?",
    answers: [
      { text: "new()", correct: false },
      { text: "start()", correct: false },
      { text: "pow()", correct: false },
      { text: "main()", correct: true },
    ],
  },
  {
    question:
      "Using which of the following keywords can an exception be generated?",
    answers: [
      { text: "threw", correct: false },
      { text: "throws", correct: false },
      { text: "throw", correct: true },
      { text: "catch", correct: false },
    ],
  },

  {
    question:
      "Which of the following loops is best when we know the number of iterations?",
    answers: [
      { text: "While loop", correct: false },
      { text: "Do while", correct: false },
      { text: "For loop", correct: true },
      { text: "All of the above", correct: false },
    ],
  },

  {
    question: "goto can be classified into?",
    answers: [
      { text: "label", correct: true },
      { text: "variable", correct: false },
      { text: "operator", correct: false },
      { text: "function", correct: false },
    ],
  },

  {
    question: "What is the function of the (typeid) operator in C++?",
    answers: [
      {
        text: "It determines the type of a variable or an expression.",
        correct: true,
      },
      { text: "It checks the memory address of a variable.", correct: false },
      {
        text: "It converts a variable from one data type to another.",
        correct: false,
      },
      { text: "It allocates memory dynamically.", correct: false },
    ],
  },

  {
    question: "Which statement is true about C++ references?",
    answers: [
      {
        text: "References can be re-assigned to refer to different variables after initialization.",
        correct: false,
      },
      { text: " References cannot be null.", correct: true },
      {
        text: "References occupy additional memory space compared to pointers.",
        correct: false,
      },
      {
        text: "References are used for dynamic memory allocation.",
        correct: false,
      },
    ],
  },

  {
    question:
      "Under which pillar of OOPS does base class and derived class relationship come?",
    answers: [
      { text: "Polymorphism", correct: false },
      { text: "Encapsulation", correct: false },
      { text: "Inheritance", correct: true },
      { text: "Abstraction", correct: false },
    ],
  },
];

const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

let currQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currQuestionIndex];
  let questionNo = currQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currQuestionIndex++;
  if (currQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
