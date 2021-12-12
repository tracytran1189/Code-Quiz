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

            correctAnswer: 'a'
        },
        {
            question: "2.What is the difference between an opening tag and a closing tag?",
            answers: {
                a: 'Opening tag has a / in front',
                b: 'Closing tag has a / in front',
                c: 'There is no difference'
            },
            correctAnswer: 'b'
        },
        {
            question: "3.< br  / > What type of tag is this?",
            answers: {
                a: 'Break tag',
                b: 'A broken one',
                c: 'An opening tag'
            },
            correctAnswer: 'a'
        },
        {
            question: "4.What does CSS stand for?",
            answers: {
                a: 'Computer Style Sheets',
                b: 'Cascading Style Sheets',
                c: 'Creative Style Sheets',
                d: 'Control Style Sheets'
            },
            correctAnswer: 'b'
        },
        {
            question: "5.Which Of The Dialog Box Display a Message And a Data Entry Field?",
            answers: {
                a: 'Alert()',
                b: 'Prompt()',
                c: 'Confirm()',
                d: 'Msg()'
            },
            correctAnswer: 'b'
        },
    ]
    // var time = 100;
    // var timerInterval;
    // var gameIndex = -1;

// function startQuiz() {
//     timerEl.textContent = time;
//     timerInterval = setInterval(function() {
//         time--;
//         timerEl.textContent = time;
//         if (time <= 0) {
//             endQuiz();
//         }
//     }, 1000);

//     gameIndex++;


//     startBtn.onclick = startQuiz;
//     showQuestion();
// }

// function endQuiz() {
//     clearInterval(timerInterval);
// }

//create Quiz questions
generateQuiz(quizQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(quizQuestions, quizContainer, resultsContainer, submitButton) {
    function showQuestion(quizQuestions, quizContainer) {
        var output = [];
        var answers;
        for (var i = 0; i < quizQuestions.length; i++) {

            answers = [];

            for (button in quizQuestions[i].answers) {
                answers.push(
                    '<button>' +
                    // '<input type ="button" name="question' + i + '" value="' + letter + '">' +
                    // letter + ':' +
                    quizQuestions[i].answers[button] +
                    '/button>'
                );
            }

            output.push(

                '<div class ="question">' + quizQuestions[i].question + '</div>' +
                '<div class ="answers">' + answers.join('') + '</div>'

            );
        }

        quizContainer.innerHTML = output.join('');
    }

    //get Results
    function getResults() {}

    showQuestion(quizQuestions, quizContainer);
    //show results after click submit
    submitButton.addEventListener('click', getResults);
}




// startBtn.onclick = startQuiz;