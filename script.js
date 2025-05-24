let questionNumber = 0;
let score = 0;
let correctAnswer = null;
let question = document.getElementById('question');
let points = document.getElementById('points');

function trueButton(){
  if(correctAnswer === true){
    score++;
  }
  points.textContent =  score
  nextQuestion()
}

function falseButton(){
    if(correctAnswer === false){
        score++;
    }
  points.textContent =  score
  nextQuestion()
}

function nextQuestion(){
  questionNumber = questionNumber + 1;
  switch (questionNumber){
    case 1:
      question.textContent = 'Apakah bumi itu datar?';
      correctAnswer = false;
      break;
    case 2:
      question.textContent = 'Apakah 3 pangkat 0 = 1?';
      correctAnswer = true;
      break;
    case 3:
    question.textContent = 'Apakah kamu manusia?';
    correctAnswer = true;
    break;
    default:
      question.textContent = 'You finished the quiz!'
      correctAnswer = null;
  } 
}
nextQuestion();