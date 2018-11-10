//initialization
var currentQuestion = 0;  // index of current question
var score = 0;
var totQuestions = questions.length; //question.js
//access html elements
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var resultCont2 = document.getElementById('img');

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];  //question for the particular index
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;  // questionIndex + 1 gives number of the question and set text for the question element
    opt1.textContent = q.option1; //set text for the options
    opt2.textContent = q.option2;
};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked'); //check if is selected or not
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }
    var answer = selectedOption.value;  //take the value from selected option
    if(questions[currentQuestion].answer == answer){   //compare the value from attribute question.answer with selected value
        score += 10;  //answer is correct add 10 points to the score value
    }
    selectedOption.checked = false;  //unchecked
    currentQuestion++;   //increment index
    if(currentQuestion == totQuestions - 1){   //if is end of the array
        nextButton.textContent = 'Finish';  //change the button text to Finish
    }
    if(currentQuestion == totQuestions){  //display the result and smile face :)
        container.style.display = 'none';  //hide container div
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        resultCont2.style.display = '';
        resultCont2.setAttribute("src", "smile.jpg");
        resultCont2.setAttribute("width", "200");
        resultCont2.setAttribute("height", "200");
        return;
    }
    loadQuestion(currentQuestion); //if is no the last question load next question
}

loadQuestion(currentQuestion);  //load first question