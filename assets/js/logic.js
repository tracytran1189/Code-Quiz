var startBtn = document.getElementById('start');
var timerEl = document.getElementById('timer');
var quizContainer = document.getElementById('quiz-container');
var submitButton = document.getElementById('submit');
var resultsContainer = document.getElementById('results');
//add questions
var quizQuestions = [{
        question: "1. What does HTML stand for?",
        answers: {
            a: 'Hyper Text Markup Language',
            b: 'Hot Mail',
            c: 'How to Make Lasagna'
        },

        correctAnswer: 'Hyper Text Markup Language'
    },
    {
        question: "2.What is the difference between an opening tag and a closing tag?",
        answers: {
            a: 'Opening tag has a / in front',
            b: 'Closing tag has a / in front',
            c: 'There is no difference'
        },
        correctAnswer: 'Closing tag has a / in front'
    },
    {
        question: "3.< br  / > What type of tag is this?",
        answers: {
            a: 'Break tag',
            b: 'A broken one',
            c: 'An opening tag'
        },
        correctAnswer: 'Break tag'
    },
    {
        question: "4.What does CSS stand for?",
        answers: {
            a: 'Computer Style Sheets',
            b: 'Cascading Style Sheets',
            c: 'Creative Style Sheets',
            d: 'Control Style Sheets'
        },
        correctAnswer: 'Cascading Style Sheets'
    },
    {
        question: "5.Which Of The Dialog Box Display a Message And a Data Entry Field?",
        answers: {
            a: 'Alert()',
            b: 'Prompt()',
            c: 'Confirm()',
            d: 'Msg()'
        },
        correctAnswer: 'Prompt()'
    },
]
var time = 100;
var timerInterval;
var gameIndex = -1;
var numberOfQuestions = quizQuestions.length;
var currentQuestionIndex = 0;

function startQuiz() {
    console.log('startQuiz');
    timerEl.textContent = time;
    timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = time;
        if (time <= 0) {
            endQuiz();
        }
    }, 1000);

    gameIndex++;
    generateQuiz();
}

function endQuiz() {
    clearInterval(timerInterval);
}


function clearQuestion() {
    document.getElementById("question").remove();
    document.getElementById("answers").remove();
}

function showQuestion() {

    var question = document.createElement('div');
    question.id = "question";
    question.textContent = quizQuestions[currentQuestionIndex].question;
    quizContainer.append(question);

    var answersDiv = document.createElement('div');
    answersDiv.id = "answers";

    // var answers =[];
    for (button in quizQuestions[currentQuestionIndex].answers) {
        const answerButton = document.createElement('button');
        answerButton.textContent = quizQuestions[currentQuestionIndex].answers[button];
        answerButton.setAttribute('data-answer', quizQuestions[currentQuestionIndex].correctAnswer);
        answerButton.onclick = checkAnswer;
        // answers.push(answerButton);
        answersDiv.append(answerButton);
    }
    quizContainer.append(answersDiv);
}

//check answers
function checkAnswer(event) {
    console.log('checkAnswer', event);
    var correctAnswer = event.target.getAttribute("data-answer");
    var selectedAnswer = event.target.textContent;
    if (correctAnswer === selectedAnswer) {
        console.log('correct');
    } else {
        console.log('false');
    }

    currentQuestionIndex++;
    clearQuestion();
    showQuestion();
}

function generateQuiz() {
    console.log('generateQuiz')

    showQuestion();
    //show results after click submit
    // submitButton.addEventListener('click', showResults);
}


startBtn.onclick = startQuiz;