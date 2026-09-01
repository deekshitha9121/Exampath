// Quiz Data
const subjects = { english:{}, gk:{}, physics:{}, chemistry:{}, maths:{}, biology:{} };

// Shuffle Questions
function shuffle(arr){
  return arr.sort(()=>Math.random()-0.5);
}

// Start Quiz
function startQuiz(title, questions){
  console.log("Quiz Started:", title);
}

// Practice Test
function startPractice(){
  console.log("Practice Test Started");
}

// Render Question
function renderQuestion(){
  console.log("Question Display");
}

// Show Results
function showResults(){
  console.log("Results Display");
}

// Navigation
function showView(view){
  console.log("Open:", view);
}

// Retry Quiz
function retryQuiz(){
  console.log("Quiz Restarted");
}
