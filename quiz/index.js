const quizData = [
  {
      question: "The side length of an equilateral triangle is 12cm. Find its area.",
      a: "62.35",
      b: "60",
      c: "39.6",
      d: "42",
      correct: "a",
  },
  {
      question: "If the two angles of a triangle are 45° and 60°, respectively, then find the third angle.",
      a: "∠A + ∠B + ∠C = 180°",
      b: "∠C = 180 – ∠A – ∠B",
      c: "∠C = 180 – 45 – 60",
      d: "∠C = 75°",
      correct: "d",
  },
  {
      question: "What What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
      a: "45",
      b: "90",
      c: "180",
      d: "60",
      correct: "b",
  },
  {
      question: "A triangle can have",
      a: "three right angle",
      b: "one right angle",
      c: "two right angle",
      d: "none of the above",
      correct: "b",
  },
  {
    question: "The perimeter of scalene triangle with sides a, b, c is",
    a: "a+b+c",
    b: "2a",
    c: "1/2*(base*height)",
    d: "none of the above",
    correct: "a",
},
{
  question: "A scalene triangle has ___ lines of symmetry",
  a: "two",
  b: "15",
  c: "Zero",
  d: "none of the above",
  correct: "c",
},

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}


submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }

     currentQuiz++

     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>You Score is ${score}/${quizData.length} </h2>

         <button onclick="location.reload()">Reload</button>
         `
     }
  }
})