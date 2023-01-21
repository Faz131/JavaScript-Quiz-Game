
var startButton = document.querySelector('.startBTN')
var questionContainEL = document.getElementById('container')
var randomQuestion, knownQuestion
var questionEL = document.getElementById('question')
var answerButtons = document.getElementById('answerBTNS')

startButton.addEventListener('click', startQuiz)

// Allow the quiz to start
function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainEL.classList.remove('hide')

    // Question randomizer
    randomQuestion = questions.sort(() => Math.random() - .5)

    // 1st question in array displayed
    knownQuestion = 0
    nextQuestion()

}

// Move on to next question
function nextQuestion() {
    showQuestion(randomQuestion[knownQuestion])

}

function showQuestion(questions) {
    questionEL.innerText = questions.question
    questions.answers.forEach(answers => {
        var button = document.createElement('btn')
        button.innerText = answers.text
        button.classList.add('btn')
        if (answers.correct) { button.dataset.correct = answers.correct }
        button.addEventListener('click', answerChoice)
        answerButtons.appendChild(button)
    })


}

// Choosing an answer

function answerChoice(e) {


}

var questions = [

    {
        question: 'What is 2 + 2 ?',
        answers: [{ Text: '4', correct: true },
        { Text: '22', correct: false },
        { text: '100', correct: false },
        { text: '1', correct: false }

        ]

    }



]