const questions = {
  English: [
    {
      q: "Choose the correct synonym of 'Rapid'.",
      options: ["Slow", "Fast", "Weak", "Small"],
      answer: 1
    },
    {
      q: "Choose the correctly spelled word.",
      options: ["Accomodation", "Accommodation", "Acommodation", "Accommadation"],
      answer: 1
    },
    {
      q: "Fill in the blank: She ___ to school every day.",
      options: ["go", "goes", "going", "gone"],
      answer: 1
    },
    {
      q: "Antonym of 'Ancient' is:",
      options: ["Old", "Modern", "Historic", "Past"],
      answer: 1
    },
    {
      q: "Identify the noun: 'The boy is playing.'",
      options: ["The", "Boy", "Is", "Playing"],
      answer: 1
    },
    {
      q: "Choose the correct article: He is ___ honest man.",
      options: ["a", "an", "the", "no article"],
      answer: 1
    },
    {
      q: "Past tense of 'Go' is:",
      options: ["Goed", "Gone", "Went", "Going"],
      answer: 2
    },
    {
      q: "Which word is an adjective?",
      options: ["Quickly", "Beauty", "Beautiful", "Run"],
      answer: 2
    },
    {
      q: "Plural of 'Child' is:",
      options: ["Childs", "Children", "Childes", "Childrens"],
      answer: 1
    },
    {
      q: "Choose the correct sentence.",
      options: [
        "He do his work.",
        "He does his work.",
        "He doing his work.",
        "He done his work."
      ],
      answer: 1
    }
  ],

  "General Knowledge": [
    {
      q: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      answer: 1
    },
    {
      q: "Who is known as the Father of the Indian Constitution?",
      options: [
        "Mahatma Gandhi",
        "B. R. Ambedkar",
        "Jawaharlal Nehru",
        "Sardar Patel"
      ],
      answer: 1
    },
    {
      q: "Which is the largest planet in our Solar System?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: 2
    },
    {
      q: "Which is the national animal of India?",
      options: ["Lion", "Tiger", "Elephant", "Peacock"],
      answer: 1
    },
    {
      q: "How many states are there in India?",
      options: ["26", "28", "29", "30"],
      answer: 1
    },
    {
      q: "Which is the longest river in India?",
      options: ["Yamuna", "Ganga", "Godavari", "Narmada"],
      answer: 1
    },
    {
      q: "Who wrote the Indian national anthem?",
      options: [
        "Rabindranath Tagore",
        "Bankim Chandra Chatterjee",
        "Sarojini Naidu",
        "Subhash Chandra Bose"
      ],
      answer: 0
    },
    {
      q: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: 0
    },
    {
      q: "What is the currency of Japan?",
      options: ["Dollar", "Yen", "Won", "Euro"],
      answer: 1
    },
    {
      q: "Where is the headquarters of the United Nations?",
      options: ["London", "Paris", "New York", "Geneva"],
      answer: 2
    }
  ],

  Chemistry: [
    {
      q: "What is the chemical symbol for Oxygen?",
      options: ["Ox", "O", "Og", "C"],
      answer: 1
    },
    {
      q: "What is the pH of pure water at room temperature approximately?",
      options: ["3", "5", "7", "9"],
      answer: 2
    },
    {
      q: "Which gas is used by plants during photosynthesis?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      answer: 2
    },
    {
      q: "What is the chemical formula of water?",
      options: ["CO2", "H2O", "O2", "NaCl"],
      answer: 1
    },
    {
      q: "Common salt is:",
      options: ["NaCl", "KCl", "HCl", "CaCO3"],
      answer: 0
    },
    {
      q: "Which metal is liquid at room temperature?",
      options: ["Iron", "Mercury", "Copper", "Aluminium"],
      answer: 1
    },
    {
      q: "Atomic number of Hydrogen is:",
      options: ["1", "2", "8", "10"],
      answer: 0
    },
    {
      q: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      answer: 1
    },
    {
      q: "The smallest unit of an element is:",
      options: ["Molecule", "Atom", "Cell", "Ion"],
      answer: 1
    },
    {
      q: "CO2 is commonly known as:",
      options: ["Carbon monoxide", "Carbon dioxide", "Calcium oxide", "Cobalt"],
      answer: 1
    }
  ],

  Physics: [
    {
      q: "SI unit of force is:",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      answer: 1
    },
    {
      q: "Speed of light in vacuum is approximately:",
      options: [
        "3 × 10^8 m/s",
        "3 × 10^5 m/s",
        "3 × 10^3 m/s",
        "3 × 10^10 m/s"
      ],
      answer: 0
    },
    {
      q: "Unit of electric current is:",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      answer: 1
    },
    {
      q: "Which instrument measures temperature?",
      options: ["Barometer", "Thermometer", "Ammeter", "Voltmeter"],
      answer: 1
    },
    {
      q: "SI unit of energy is:",
      options: ["Newton", "Joule", "Watt", "Ampere"],
      answer: 1
    },
    {
      q: "Which force pulls objects towards Earth?",
      options: ["Friction", "Gravity", "Magnetic force", "Nuclear force"],
      answer: 1
    },
    {
      q: "Unit of power is:",
      options: ["Watt", "Joule", "Newton", "Pascal"],
      answer: 0
    },
    {
      q: "Sound cannot travel through:",
      options: ["Air", "Water", "Steel", "Vacuum"],
      answer: 3
    },
    {
      q: "A device used to measure electric current is:",
      options: ["Ammeter", "Barometer", "Thermometer", "Hygrometer"],
      answer: 0
    },
    {
      q: "The SI unit of frequency is:",
      options: ["Hertz", "Newton", "Joule", "Watt"],
      answer: 0
    }
  ],

  Mathematics: [
    {
      q: "What is 15 + 27?",
      options: ["40", "42", "44", "45"],
      answer: 1
    },
    {
      q: "What is 12 × 8?",
      options: ["86", "96", "108", "112"],
      answer: 1
    },
    {
      q: "What is 144 ÷ 12?",
      options: ["10", "11", "12", "14"],
      answer: 2
    },
    {
      q: "Square of 15 is:",
      options: ["125", "200", "225", "250"],
      answer: 2
    },
    {
      q: "What is 25% of 200?",
      options: ["25", "40", "50", "75"],
      answer: 2
    },
    {
      q: "LCM of 4 and 6 is:",
      options: ["8", "10", "12", "24"],
      answer: 2
    },
    {
      q: "HCF of 12 and 18 is:",
      options: ["3", "4", "6", "9"],
      answer: 2
    },
    {
      q: "If x + 5 = 12, x equals:",
      options: ["5", "6", "7", "8"],
      answer: 2
    },
    {
      q: "What is 3/4 as a percentage?",
      options: ["25%", "50%", "75%", "80%"],
      answer: 2
    },
    {
      q: "A triangle has how many sides?",
      options: ["2", "3", "4", "5"],
      answer: 1
    }
  ],

  Biology: [
    {
      q: "The basic unit of life is:",
      options: ["Tissue", "Cell", "Organ", "Atom"],
      answer: 1
    },
    {
      q: "Which organ pumps blood?",
      options: ["Liver", "Lung", "Heart", "Kidney"],
      answer: 2
    },
    {
      q: "Which gas do humans breathe in?",
      options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
      answer: 1
    },
    {
      q: "Which organ is mainly responsible for filtering blood?",
      options: ["Heart", "Kidney", "Stomach", "Lung"],
      answer: 1
    },
    {
      q: "Plants prepare food by:",
      options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
      answer: 1
    }
  ]
};

// Shuffle Questions
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Start Quiz
function startQuiz(title, questionList) {
  console.log("Quiz Started:", title);

  const quizQuestions = shuffle([...questionList]);

  console.log("Questions:", quizQuestions);

  return quizQuestions;
}

// Practice Test
function startPractice() {
  console.log("Practice Test Started");
}

// Render Question
function renderQuestion() {
  console.log("Question Display");
}

// Show Results
function showResults() {
  console.log("Results Display");
}

// Navigation
function showView(view) {
  console.log("Open:", view);
}

// Retry Quiz
function retryQuiz() {
  console.log("Quiz Restarted");
}