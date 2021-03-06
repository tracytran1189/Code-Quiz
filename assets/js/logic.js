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
var time;
var timerInterval;
var numberOfQuestions = quizQuestions.length;
var currentQuestionIndex;
var score;
var userName;

//Set Timer when start quiz
function startQuiz() {
    time = 50;
    score = 0;
    currentQuestionIndex = 0;
    userName = "";
    var startAgain = document.getElementById('start-again');
    if (startAgain) {
        startAgain.remove();
        summitBtn.textContent = "";
    }
    startBtn.remove();
    timerEl.textContent = ("Time left : " + time);
    timerInterval = setInterval(function() {
        time--;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = ("Time left : " + time);
        if (time <= 0) {
            endQuiz();
            clearQuestion();
        }
    }, 1000);


    generateQuiz();
}

function endQuiz() {
    clearInterval(timerInterval);

    getHighScore();
}

//clear question when time is zero
function clearQuestion() {
    document.getElementById("question").remove();
    document.getElementById("answers").remove();
}

//Show questions function
function showQuestion() {

    var questionDiv = document.createElement('div');
    questionDiv.id = "question";
    questionDiv.textContent = quizQuestions[currentQuestionIndex].question;
    quizContainer.append(questionDiv);

    var answersDiv = document.createElement('div');
    answersDiv.id = "answers";


    for (button in quizQuestions[currentQuestionIndex].answers) {
        const answerButton = document.createElement('button');
        answerButton.id = "answers-id";
        answerButton.textContent = quizQuestions[currentQuestionIndex].answers[button];
        answerButton.setAttribute('data-answer', quizQuestions[currentQuestionIndex].correctAnswer);
        answerButton.onclick = checkAnswer;

        answersDiv.append(answerButton);
    }
    quizContainer.append(answersDiv);


}

//check answers and deduct time if wrong answer
function checkAnswer(event) {
    event.preventDefault();

    var correctAnswer = event.target.getAttribute("data-answer");
    var selectedAnswer = event.target.textContent;
    if (correctAnswer === selectedAnswer) {

        score++;
        showAnswer.textContent = ("You got it right!");


    } else {
        time -= 10;

        showAnswer.textContent = ("Wrong Answer");

    }

    //Show next question after give answer
    currentQuestionIndex++;

    clearQuestion();

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}



function generateQuiz() {


    showQuestion();
}

//Showing result after quiz end
function getHighScore() {

    resultsContainer.remove();
    showAnswer.textContent = "";
    summitBtn.textContent = ("All Done ! Enter your name:");
    var form = document.createElement('form');
    form.id = "form";

    var initial = document.createElement('input');
    initial.id = "Name";
    initial.placeholder = "Type your name here...";


    form.onsubmit = function(e) {
        e.preventDefault();
        userName = initial.value;

        displayResult();

    }

    form.append(initial);
    var submitName = document.createElement('button');
    submitName.id = "submit-name";
    submitName.textContent = ("Submit Name");
    submitName.type = 'submit';

    form.append(submitName);

    summitBtn.append(form);



}
//display name and score and try again button
function displayResult() {
    summitBtn.textContent = userName + ", your score is " + score + " /5 ";
    var startAgain = document.createElement('button');
    startAgain.id = "start-again";
    startAgain.textContent = ("Try Again");
    startAgain.onclick = startQuiz;

    document.body.append(startAgain);
}

startBtn.onclick = startQuiz;