
var startButton = document.querySelector('.startBTN')
var nextButton = document.getElementById('nextBTN')
var questionContainEL = document.getElementById('container')
var randomQuestion, knownQuestion
var questionEL = document.getElementById('question')
var answerButtons = document.getElementById('answerBTNS')
var quesitonNumber = 0
var timerEL = document.getElementById('timerEL')
var score = document.getElementById('score')
var scoreCounter = 0;
var rightQuestion = ''
var userAnswer = ''
var timer = 30;
var questions = [

    {
        question: 'Question #1 What does HTML stand for?',
        answers: [
            { text: 'HyperText Markup Language', correct: true },
            { text: 'HyperText Machine Learning', correct: false },
            { text: 'HydroTree Main Line', correct: false },
            { text: 'Unknown', correct: false },

        ],
        question: 'Question #2 A Function handles what in JavaScript?',
        answers: [
            { text: 'Add capitalization to letters', correct: false },
            { text: 'Creates a group of objects', correct: false },
            { text: 'allows you to define a block of code and run that code as often as needed', correct: true },
            { text: 'Unknown', correct: false }

        ],
        question: 'Question #3 What does HTML stand for?',
        answers: [
            { text: 'HyperText Markup Language', correct: true },
            { text: 'HyperText Machine Learning', correct: false },
            { text: 'HydroTree Main Line', correct: false },
            { text: 'Unknown', correct: false },

        ],
        question: 'Question #4 A Function handles what in JavaScript?',
        answers: [
            { text: 'Add capitalization to letters', correct: false },
            { text: 'Creates a group of objects', correct: false },
            { text: 'allows you to define a block of code and run that code as often as needed', correct: true },
            { text: 'Unknown', correct: false }

        ]
    }
]

startButton.addEventListener('click', startQuiz)

// This was taken from the in class example
function winGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disabled = false;
    setWins()
}


// Allow the quiz to start
function startQuiz() {

    console.log('started')
    startButton.classList.add('hide')
    questionContainEL.classList.remove('hide')

    // function timerCountdown

    var timerInterval = setInterval(function () {
        timer--;
        timerEL.textContent = timer;
        if (timer === 0) {
            clearInterval(timerInterval)
            gameOverMessage();
        }
    }, 1000);



    // Question randomizer
    // randomQuestion = questions.sort(() => Math.random() - .5)

    // Question in array displayed
    // knownQuestion = 0
    showQuestion(questions)

}

function gameOverMessage() {

    timerEL.textContent = 'Game Over! Try Again!';

}




// Move on to next question
// function nextQuestion() {

//     showQuestion(randomQuestion[knownQuestion])

// }

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function showQuestion(array) {
    resetState()
    if (quesitonNumber < array.length) {
        console.log(quesitonNumber)
        var currentQ = array[quesitonNumber].question
        questionEL.innerText = currentQ
        console.log(currentQ)

        var choices = array[quesitonNumber].answers
        choices.forEach(answers => {
            var button = document.createElement('btn')
            button.innerText = answers.text
            button.classList.add('btn')
            button.classList.add('answer')
            if (answers.correct) {
                button.dataset.correct = answers.correct
                rightQuestion = answers.text
            }
            // console.log(rightQuestion)

            answerButtons.appendChild(button)
        })
    } else {
        console.log('game over function')
        score = timer
        console.log(score)
    }

}

document.addEventListener('click', answerChoice)
// Choosing an answer

function answerChoice(e) {
    if (e.target && e.target.matches('.answer')) {
        var selectedButtons = e.target
        userAnswer = e.target.textContent

        // var correct = selectedButtons.dataset.correct
        // setcorrectAnswer(document.body, correct)
        // Array.from(answerButtons.children).forEach(button => {

        //     setcorrectAnswer(button, button.dataset.correct)

        // })
        console.log(userAnswer)
        console.log(rightQuestion)
        if (userAnswer === rightQuestion) {
            console.log('correct answer')

        } else {
            console.log('wrong answer')
        }
        // console.log(correct)
        console.log('clicking answer')
        quesitonNumber++
        showQuestion[questions]
    }
}

// function setcorrectAnswer(element, correct) {
//     clearcorrectAnswer(element)
//     if (correct) {
//         element.classList.add('correct')



//     } else {
//         element.classList.remove('wrong')
//     }
// }

function clearcorrectAnswer(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')


}



// // Save score

function saveScore() {
    score.textContent = scoreCounter;

    localStorage.setScore('endScore', scoreCounter);
    if (storedScore === null) {
        scoreCounter = 0;
    } else {
        storedScore = scoreCounter;

    }
}
// Get Score

function getScore() {
    var storedScore = localStorage.getItem('endScore');

}