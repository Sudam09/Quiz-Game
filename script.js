const questions = [
    {
        question: "What is my full name?",
        answers: [
            {text: "Sudam Paul", correct: false},
            {text: "Sudam Halder", correct: true},
            {text: "Sudam Roy", correct: false},
            {text: "Sudam Sarkar", correct: false},
        ]
    },
    {
        question: "What is my favorite food?",
        answers: [
            {text: "Pizza", correct: false},
            {text: "Burgers", correct: false},
            {text: "Ice Cream", correct: false},
            {text: "None of the Above", correct: true},
        ]
    },
    {
        question: "What is my favorite hobby?",
        answers: [
            {text: "Reading", correct: false},
            {text: "Playing Sports", correct: false},
            {text: "Watching Animes", correct: true},
            {text: "Travelling", correct: false},
        ]
    },
    {
        question: "What is my favorite color?",
        answers: [
            {text: "Black", correct: false},
            {text: "Blue", correct: false},
            {text: "Red", correct: true},
            {text: "Brown", correct: false},
        ]
    },
    {
        question: "What is my music genre?",
        answers: [
            {text: "Pop", correct: false},
            {text: "Rock", correct: false},
            {text: "Hip Hop", correct: true},
            {text: "Country", correct: false},
        ]
    },
    {
        question: "What is my favorite Animal?",
        answers: [
            {text: "Cat", correct: false},
            {text: "Tigerr", correct: false},
            {text: "Dog", correct: true},
            {text: "Turtle", correct: false},
        ]
    },
    {
        question: "What is my favorite place to visit?",
        answers: [
            {text: "Paris,France", correct: false},
            {text: "Sydney,Australia", correct: false},
            {text: "New York City,USA", correct: false},
            {text: "Tokyo,Japan", correct: true},
        ]
    },
    {
        question: "What is my favorite anime?",
        answers: [
            {text: "Death Note", correct: false},
            {text: "One Piece", correct: false},
            {text: "Naruto", correct: true},
            {text: "Bleach", correct: false},
        ]
    },
    {
        question: "What is my favorite flower?",
        answers: [
            {text: "Rose", correct: true},
            {text: "Lily", correct: false},
            {text: "Sunflower", correct: false},
            {text: "Daisy", correct: false},
        ]
    },
    {
        question: "What is my favorite fruit?",
        answers: [
            {text: "Apple", correct: false},
            {text: "Banana", correct: false},
            {text: "Straberry", correct: false},
            {text: "Mango", correct: true},
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();