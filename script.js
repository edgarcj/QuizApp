//Object with elements of quiz
const quizData = [
  {
    question: "How old is Edy",
    a: "10",
    b: "17",
    c: "27",
    d: "110",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Edy",
    b: "Baiden",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "d",
  },
];
//Get id for each element and convert to javascript variable
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
//Counter the add
let currentQuiz = 0;
let score = 0;
//call to load function
loadQuiz();
//Create a load function to charge data for each question
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  //Charge the data in inner text for each Quiz
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
//Function that gets answers
function getSelected() {
  //Answers are

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
  //1:03
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
//Event listener that call
submitBtn.addEventListener("click", () => {
  //Check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //TODO show results
      quiz.innerHTML = `
        <h2> You answered correctly at ${score}/${quizData.length} question.</h2>
        
        <button onclick="location.reload()">Reload</button>`;
    }
  }
});
