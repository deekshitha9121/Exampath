<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Exampath - Competitive Exam Preparation</title>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background: #f4f6fb;
  color: #222;
}

header {
  background: linear-gradient(135deg, #4338ca, #6366f1);
  color: white;
  padding: 25px 15px;
  text-align: center;
}

header h1 {
  font-size: 34px;
  margin-bottom: 8px;
}

header p {
  font-size: 16px;
}

nav {
  background: white;
  padding: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  box-shadow: 0 2px 8px #ccc;
  position: sticky;
  top: 0;
  z-index: 10;
}

nav button {
  border: none;
  background: #eef2ff;
  color: #3730a3;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

nav button:hover {
  background: #4f46e5;
  color: white;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 25px 15px;
}

.section {
  display: none;
}

.section.active {
  display: block;
}

.hero {
  background: white;
  padding: 30px 20px;
  border-radius: 18px;
  text-align: center;
  margin-bottom: 25px;
  box-shadow: 0 3px 12px #ddd;
}

.hero h2 {
  color: #4338ca;
  margin-bottom: 10px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 15px;
}

.card {
  background: white;
  padding: 22px;
  border-radius: 15px;
  box-shadow: 0 3px 10px #ddd;
  cursor: pointer;
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 7px 18px #ccc;
}

.card h3 {
  margin-bottom: 8px;
  color: #4338ca;
}

.card p {
  color: #666;
  line-height: 1.5;
}

.subject-icon {
  font-size: 35px;
  margin-bottom: 10px;
}

.primary {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 9px;
  cursor: pointer;
  margin-top: 15px;
  font-weight: bold;
}

.primary:hover {
  background: #3730a3;
}

.back {
  background: #64748b;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
}

.question-box {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 3px 12px #ddd;
  margin-bottom: 20px;
}

.question-box h3 {
  margin-bottom: 18px;
  line-height: 1.5;
}

.option {
  display: block;
  width: 100%;
  text-align: left;
  padding: 13px;
  margin: 8px 0;
  border: 1px solid #ddd;
  background: #fafafa;
  border-radius: 8px;
  cursor: pointer;
}

.option:hover {
  background: #eef2ff;
}

.option.correct {
  background: #dcfce7;
  border-color: #16a34a;
}

.option.wrong {
  background: #fee2e2;
  border-color: #dc2626;
}

.progress {
  background: #ddd;
  height: 9px;
  border-radius: 10px;
  margin: 15px 0 25px;
  overflow: hidden;
}

.progress-bar {
  background: #4f46e5;
  height: 100%;
  width: 0%;
  transition: 0.3s;
}

.result {
  background: white;
  padding: 35px 20px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 3px 12px #ddd;
}

.result h2 {
  color: #4338ca;
  margin-bottom: 12px;
}

.paper {
  background: white;
  padding: 20px;
  margin: 12px 0;
  border-radius: 12px;
  box-shadow: 0 2px 8px #ddd;
}

.paper h3 {
  color: #4338ca;
  margin-bottom: 8px;
}

.faq {
  background: white;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 2px 7px #ddd;
  overflow: hidden;
}

.faq-question {
  padding: 17px;
  cursor: pointer;
  font-weight: bold;
}

.faq-answer {
  display: none;
  padding: 0 17px 17px;
  color: #555;
  line-height: 1.6;
}

.search {
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 9px;
  margin-bottom: 20px;
  font-size: 16px;
}

footer {
  margin-top: 40px;
  padding: 25px;
  background: #1e1b4b;
  color: white;
  text-align: center;
}

.small {
  color: #777;
  font-size: 14px;
}

@media(max-width:600px) {
  header h1 {
    font-size: 28px;
  }

  .container {
    padding: 18px 12px;
  }
}
</style>
</head>

<body>

<header>
  <h1>📚 Exampath</h1>
  <p>Your Complete Competitive Exam Preparation Platform</p>
</header>

<nav>
  <button onclick="showSection('home')">🏠 Home</button>
  <button onclick="showSection('subjects')">📖 Subjects</button>
  <button onclick="showSection('quiz')">📝 Quiz</button>
  <button onclick="showSection('papers')">📄 Previous Papers</button>
  <button onclick="showSection('faqs')">❓ FAQs</button>
</nav>

<div class="container">

<!-- HOME -->

<section id="home" class="section active">

  <div class="hero">
    <h2>Welcome to Exampath 🎓</h2>
    <p>
      Practice competitive exam questions, take quizzes,
      improve your knowledge and prepare smarter.
    </p>

    <button class="primary" onclick="showSection('subjects')">
      Start Learning 🚀
    </button>
  </div>

  <h2 style="margin-bottom:15px;">What do you want to practice?</h2>

  <div class="grid">

    <div class="card" onclick="openSubject('English')">
      <div class="subject-icon">🇬🇧</div>
      <h3>English</h3>
      <p>Grammar, vocabulary and comprehension.</p>
    </div>

    <div class="card" onclick="openSubject('General Knowledge')">
      <div class="subject-icon">🌍</div>
      <h3>General Knowledge</h3>
      <p>Static GK and general awareness.</p>
    </div>

    <div class="card" onclick="openSubject('Chemistry')">
      <div class="subject-icon">⚗️</div>
      <h3>Chemistry</h3>
      <p>Important chemistry concepts.</p>
    </div>

    <div class="card" onclick="openSubject('Physics')">
      <div class="subject-icon">⚡</div>
      <h3>Physics</h3>
      <p>Physics formulas and concepts.</p>
    </div>

    <div class="card" onclick="openSubject('Mathematics')">
      <div class="subject-icon">➗</div>
      <h3>Mathematics</h3>
      <p>Arithmetic and quantitative aptitude.</p>
    </div>

    <div class="card" onclick="openSubject('Biology')">
      <div class="subject-icon">🧬</div>
      <h3>Biology</h3>
      <p>Human body, plants and life science.</p>
    </div>

  </div>

</section>


<!-- SUBJECTS -->

<section id="subjects" class="section">

  <div class="hero">
    <h2>📖 Choose a Subject</h2>
    <p>Select a subject to start practice.</p>
  </div>

  <div class="grid">

    <div class="card" onclick="openSubject('English')">
      <div class="subject-icon">🇬🇧</div>
      <h3>English</h3>
      <p>Practice English questions.</p>
    </div>

    <div class="card" onclick="openSubject('General Knowledge')">
      <div class="subject-icon">🌍</div>
      <h3>General Knowledge</h3>
      <p>Practice GK questions.</p>
    </div>

    <div class="card" onclick="openSubject('Chemistry')">
      <div class="subject-icon">⚗️</div>
      <h3>Chemistry</h3>
      <p>Practice Chemistry questions.</p>
    </div>

    <div class="card" onclick="openSubject('Physics')">
      <div class="subject-icon">⚡</div>
      <h3>Physics</h3>
      <p>Practice Physics questions.</p>
    </div>

    <div class="card" onclick="openSubject('Mathematics')">
      <div class="subject-icon">➗</div>
      <h3>Mathematics</h3>
      <p>Practice Mathematics questions.</p>
    </div>

    <div class="card" onclick="openSubject('Biology')">
      <div class="subject-icon">🧬</div>
      <h3>Biology</h3>
      <p>Practice Biology questions.</p>
    </div>

  </div>

</section>


<!-- QUIZ -->

<section id="quiz" class="section">

  <div id="quizStart">

    <div class="hero">
      <h2>📝 Competitive Exam Quiz</h2>
      <p>Select a subject and start your quiz.</p>
    </div>

    <div class="grid">

      <div class="card" onclick="startQuiz('English')">
        <h3>🇬🇧 English Quiz</h3>
        <p>Test your English knowledge.</p>
      </div>

      <div class="card" onclick="startQuiz('General Knowledge')">
        <h3>🌍 GK Quiz</h3>
        <p>Test your general awareness.</p>
      </div>

      <div class="card" onclick="startQuiz('Chemistry')">
        <h3>⚗️ Chemistry Quiz</h3>
        <p>Test your chemistry knowledge.</p>
      </div>

      <div class="card" onclick="startQuiz('Physics')">
        <h3>⚡ Physics Quiz</h3>
        <p>Test your physics knowledge.</p>
      </div>

      <div class="card" onclick="startQuiz('Mathematics')">
        <h3>➗ Mathematics Quiz</h3>
        <p>Test your maths skills.</p>
      </div>

      <div class="card" onclick="startQuiz('Biology')">
        <h3>🧬 Biology Quiz</h3>
        <p>Test your biology knowledge.</p>
      </div>

    </div>

  </div>

  <div id="quizArea" style="display:none;"></div>

</section>


<!-- SUBJECT QUESTIONS -->

<section id="subjectQuestions" class="section">

  <button class="back" onclick="showSection('subjects')">
    ← Back to Subjects
  </button>

  <div id="subjectContent"></div>

</section>


<!-- PREVIOUS PAPERS -->

<section id="papers" class="section">

  <div class="hero">
    <h2>📄 Previous Government Exam Papers</h2>
    <p>Use these previous-paper style questions for practice.</p>
  </div>

  <input
    class="search"
    id="paperSearch"
    placeholder="Search exam papers..."
    oninput="searchPapers()"
  >

  <div id="paperList">

    <div class="paper">
      <h3>SSC CGL</h3>
      <p>Previous-paper practice set covering GK, English, Maths and Reasoning.</p>
      <p class="small">Practice Set • 25 Questions</p>
      <button class="primary" onclick="startMixedQuiz()">Start Practice</button>
    </div>

    <div class="paper">
      <h3>SSC CHSL</h3>
      <p>Important questions for SSC CHSL preparation.</p>
      <p class="small">Practice Set • General Awareness</p>
      <button class="primary" onclick="startQuiz('General Knowledge')">Practice GK</button>
    </div>

    <div class="paper">
      <h3>RRB / Railway Exams</h3>
      <p>Science, mathematics and general awareness practice.</p>
      <p class="small">Practice Set</p>
      <button class="primary" onclick="startMixedQuiz()">Start Practice</button>
    </div>

    <div class="paper">
      <h3>UPSC General Studies</h3>
      <p>General studies and general knowledge practice questions.</p>
      <p class="small">Practice Set</p>
      <button class="primary" onclick="startQuiz('General Knowledge')">Practice GK</button>
    </div>

    <div class="paper">
      <h3>Banking Exams</h3>
      <p>Quantitative aptitude and English practice.</p>
      <p class="small">Practice Set</p>
      <button class="primary" onclick="startQuiz('Mathematics')">Practice Maths</button>
    </div>

  </div>

</section>


<!-- FAQ -->

<section id="faqs" class="section">

  <div class="hero">
    <h2>❓ Frequently Asked Questions</h2>
    <p>Common questions about competitive exam preparation.</p>
  </div>

  <div class="faq">
    <div class="faq-question" onclick="toggleFAQ(this)">
      What is Exampath?
    </div>
    <div class="faq-answer">
      Exampath is a competitive exam preparation platform
      containing subject-wise practice questions and quizzes.
    </div>
  </div>

  <div class="faq">
    <div class="faq-question" onclick="toggleFAQ(this)">
      Which subjects are available?
    </div>
    <div class="faq-answer">
      English, General Knowledge, Chemistry, Physics,
      Mathematics and Biology are currently available.
    </div>
  </div>

  <div class="faq">
    <div class="faq-question" onclick="toggleFAQ(this)">
      Can I practice subject-wise?
    </div>
    <div class="faq-answer">
      Yes. Open the Subjects section and select any subject.
      Questions will open immediately.
    </div>
  </div>

  <div class="faq">
    <div class="faq-question" onclick="toggleFAQ(this)">
      How does the quiz work?
    </div>
    <div class="faq-answer">
      Select a subject, answer the questions and submit the quiz.
      Your score will be displayed at the end.
    </div>
  </div>

  <div class="faq">
    <div class="faq-question" onclick="toggleFAQ(this)">
      Can I use this on mobile?
    </div>
    <div class="faq-answer">
      Yes. The website is responsive and designed to work
      on mobile phones, tablets and computers.
    </div>
  </div>

</section>

</div>


<footer>
  <p>© 2026 Exampath</p>
  <p style="margin-top:7px;">Learn • Practice • Improve • Succeed 🚀</p>
</footer>


<script>

<script src="script.js">

const questions = {

English: [
 {
  q:"Choose the correct synonym of 'Rapid'.",
  options:["Slow","Fast","Weak","Small"],
  answer:1
 },
 {
  q:"Choose the correctly spelled word.",
  options:["Accomodation","Accommodation","Acommodation","Accommadation"],
  answer:1
 },
 {
  q:"Fill in the blank: She ___ to school every day.",
  options:["go","goes","going","gone"],
  answer:1
 },
 {
  q:"Antonym of 'Ancient' is:",
  options:["Old","Modern","Historic","Past"],
  answer:1
 },
 {
  q:"Identify the noun: 'The boy is playing.'",
  options:["The","Boy","Is","Playing"],
  answer:1
 },
 {
  q:"Choose the correct article: He is ___ honest man.",
  options:["a","an","the","no article"],
  answer:1
 },
 {
  q:"Past tense of 'Go' is:",
  options:["Goed","Gone","Went","Going"],
  answer:2
 },
 {
  q:"Which word is an adjective?",
  options:["Quickly","Beauty","Beautiful","Run"],
  answer:2
 },
 {
  q:"Plural of 'Child' is:",
  options:["Childs","Children","Childes","Childrens"],
  answer:1
 },
 {
  q:"Choose the correct sentence.",
  options:[
   "He do his work.",
   "He does his work.",
   "He doing his work.",
   "He done his work."
  ],
  answer:1
 }
],

"General Knowledge":[
 {
  q:"What is the capital of India?",
  options:["Mumbai","New Delhi","Kolkata","Chennai"],
  answer:1
 },
 {
  q:"Who is known as the Father of the Indian Constitution?",
  options:[
   "Mahatma Gandhi",
   "B. R. Ambedkar",
   "Jawaharlal Nehru",
   "Sardar Patel"
  ],
  answer:1
 },
 {
  q:"Which is the largest planet in our Solar System?",
  options:["Earth","Mars","Jupiter","Venus"],
  answer:2
 },
 {
  q:"Which is the national animal of India?",
  options:["Lion","Tiger","Elephant","Peacock"],
  answer:1
 },
 {
  q:"How many states are there in India?",
  options:["26","28","29","30"],
  answer:1
 },
 {
  q:"Which is the longest river in India?",
  options:["Yamuna","Ganga","Godavari","Narmada"],
  answer:1
 },
 {
  q:"Who wrote the Indian national anthem?",
  options:[
   "Rabindranath Tagore",
   "Bankim Chandra Chatterjee",
   "Sarojini Naidu",
   "Subhash Chandra Bose"
  ],
  answer:0
 },
 {
  q:"Which planet is known as the Red Planet?",
  options:["Mars","Venus","Jupiter","Saturn"],
  answer:0
 },
 {
  q:"What is the currency of Japan?",
  options:["Dollar","Yen","Won","Euro"],
  answer:1
 },
 {
  q:"Where is the headquarters of the United Nations?",
  options:["London","Paris","New York","Geneva"],
  answer:2
 }
],

Chemistry:[
 {
  q:"What is the chemical symbol for Oxygen?",
  options:["Ox","O","Og","C"],
  answer:1
 },
 {
  q:"What is the pH of pure water at room temperature approximately?",
  options:["3","5","7","9"],
  answer:2
 },
 {
  q:"Which gas is used by plants during photosynthesis?",
  options:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],
  answer:2
 },
 {
  q:"What is the chemical formula of water?",
  options:["CO2","H2O","O2","NaCl"],
  answer:1
 },
 {
  q:"Common salt is:",
  options:["NaCl","KCl","HCl","CaCO3"],
  answer:0
 },
 {
  q:"Which metal is liquid at room temperature?",
  options:["Iron","Mercury","Copper","Aluminium"],
  answer:1
 },
 {
  q:"Atomic number of Hydrogen is:",
  options:["1","2","8","10"],
  answer:0
 },
 {
  q:"Which gas is most abundant in Earth's atmosphere?",
  options:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],
  answer:1
 },
 {
  q:"The smallest unit of an element is:",
  options:["Molecule","Atom","Cell","Ion"],
  answer:1
 },
 {
  q:"CO2 is commonly known as:",
  options:["Carbon monoxide","Carbon dioxide","Calcium oxide","Cobalt"],
  answer:1
 }
],

Physics:[
 {
  q:"SI unit of force is:",
  options:["Joule","Newton","Watt","Pascal"],
  answer:1
 },
 {
  q:"Speed of light in vacuum is approximately:",
  options:[
   "3 × 10^8 m/s",
   "3 × 10^5 m/s",
   "3 × 10^3 m/s",
   "3 × 10^10 m/s"
  ],
  answer:0
 },
 {
  q:"Unit of electric current is:",
  options:["Volt","Ampere","Ohm","Watt"],
  answer:1
 },
 {
  q:"Which instrument measures temperature?",
  options:["Barometer","Thermometer","Ammeter","Voltmeter"],
  answer:1
 },
 {
  q:"SI unit of energy is:",
  options:["Newton","Joule","Watt","Ampere"],
  answer:1
 },
 {
  q:"Which force pulls objects towards Earth?",
  options:["Friction","Gravity","Magnetic force","Nuclear force"],
  answer:1
 },
 {
  q:"Unit of power is:",
  options:["Watt","Joule","Newton","Pascal"],
  answer:0
 },
 {
  q:"Sound cannot travel through:",
  options:["Air","Water","Steel","Vacuum"],
  answer:3
 },
 {
  q:"A device used to measure electric current is:",
  options:["Ammeter","Barometer","Thermometer","Hygrometer"],
  answer:0
 },
 {
  q:"The SI unit of frequency is:",
  options:["Hertz","Newton","Joule","Watt"],
  answer:0
 }
],

Mathematics:[
 {
  q:"What is 15 + 27?",
  options:["40","42","44","45"],
  answer:1
 },
 {
  q:"What is 12 × 8?",
  options:["86","96","108","112"],
  answer:1
 },
 {
  q:"What is 144 ÷ 12?",
  options:["10","11","12","14"],
  answer:2
 },
 {
  q:"Square of 15 is:",
  options:["125","200","225","250"],
  answer:2
 },
 {
  q:"What is 25% of 200?",
  options:["25","40","50","75"],
  answer:2
 },
 {
  q:"LCM of 4 and 6 is:",
  options:["8","10","12","24"],
  answer:2
 },
 {
  q:"HCF of 12 and 18 is:",
  options:["3","4","6","9"],
  answer:2
 },
 {
  q:"If x + 5 = 12, x equals:",
  options:["5","6","7","8"],
  answer:2
 },
 {
  q:"What is 3/4 as a percentage?",
  options:["25%","50%","75%","80%"],
  answer:2
 },
 {
  q:"A triangle has how many sides?",
  options:["2","3","4","5"],
  answer:1
 }
],

Biology:[
 {
  q:"The basic unit of life is:",
  options:["Tissue","Cell","Organ","Atom"],
  answer:1
 },
 {
  q:"Which organ pumps blood?",
  options:["Liver","Lung","Heart","Kidney"],
  answer:2
 },
 {
  q:"Which gas do humans breathe in?",
  options:["Carbon dioxide","Oxygen","Hydrogen","Nitrogen"],
  answer:1
 },
 {
  q:"Which organ is mainly responsible for filtering blood?",
  options:["Heart","Kidney","Stomach","Lung"],
  answer:1
 },
 {
  q:"Plants prepare food by:",
  options:["Respiration","Photosynthesis","Digestion","Transpiration"],
  answer:1
 }
  </script>/ Quiz Data
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
