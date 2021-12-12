var startBtn = document.getElementById('start');
var timerEl = document.getElementById('timer');
var quizContainer = document.getElementById('quiz-container');
var showAnswer = document.getElementById('answer');
var resultsContainer = document.getElementById('results');
var summitBtn = document.getElementById('get-your-score');
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
var time = 50;
var timerInterval;
var gameIndex = -1;
var numberOfQuestions = quizQuestions.length;
var currentQuestionIndex = 0;
var score = 0;
var userName = ""

function startQuiz() {
    startBtn.remove();
    console.log('startQuiz');
    timerEl.textContent = ("Time left : " + time);
    timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = ("Time left : " + time);
        if (time <= 0 || currentQuestionIndex == quizQuestions.length) {
            endQuiz();
        }
    }, 1000);

    gameIndex++;
    generateQuiz();
}

function endQuiz() {
    clearInterval(timerInterval);

    getHighScore();
}


function clearQuestion() {
    document.getElementById("question").remove();
    document.getElementById("answers").remove();
}

function showQuestion() {

    var questionDiv = document.createElement('div');
    questionDiv.id = "question";
    questionDiv.textContent = quizQuestions[currentQuestionIndex].question;
    quizContainer.append(questionDiv);

    var answersDiv = document.createElement('div');
    answersDiv.id = "answers";


    for (button in quizQuestions[currentQuestionIndex].answers) {
        const answerButton = document.createElement('button');
        answerButton.textContent = quizQuestions[currentQuestionIndex].answers[button];
        answerButton.setAttribute('data-answer', quizQuestions[currentQuestionIndex].correctAnswer);
        answerButton.onclick = checkAnswer;

        answersDiv.append(answerButton);
    }
    quizContainer.append(answersDiv);


}

//check answers
function checkAnswer(event) {
    event.preventDefault();
    console.log('checkAnswer', event);
    var correctAnswer = event.target.getAttribute("data-answer");
    var selectedAnswer = event.target.textContent;
    if (correctAnswer === selectedAnswer) {
        console.log('correct');
        score++;
        showAnswer.textContent = ("You got it right!");


    } else {
        time -= 10;
        console.log('false');
        showAnswer.textContent = ("Wrong Answer");
        gameIndex++;
    }
    resultsContainer.textContent = ("Your Score = " + score + " /5 ");


    currentQuestionIndex++;

    clearQuestion();

    showQuestion();


}



function generateQuiz() {
    console.log('generateQuiz')

    showQuestion();
}

function getHighScore() {
    console.log("high score");
    resultsContainer.remove();
    showAnswer.remove();
    summitBtn.textContent = ("All Done ! Enter your name:");
    var form = document.createElement('form');
    form.id = "form";

    var initial = document.createElement('input');
    initial.id = "Name";
    initial.placeholder = "Type your name here...";


    form.onsubmit = function(e) {
        e.preventDefault();
        console.log('submit', initial.value);
        userName = initial.value;

        displayResult();
    }

    form.append(initial);

    summitBtn.append(form);

}

function displayResult() {
    // document.getElementById('form').remove();
    // var resultEl = document.createElement('div');
    // resultEl.id = "result-display";
    summitBtn.textContent = userName + " your score is " + score + " /5 ";
    // summitBtn.append(resultEl);
}
localStorage.setItem("score", JSON.stringify(score));

startBtn.onclick = startQuiz;