const questions = [
  {
    question: "Colonialism involves:",
    options: [
      "Voluntary cultural exchange",
      "Mutual economic partnerships",
      "Direct political domination by force",
      "Diplomatic alliances"
    ],
    answer: 2
  },
  {
    question: "British colonial rule in Nigeria used:",
    options: [
      "Direct democracy",
      "Indirect rule through local institutions",
      "Military dictatorship",
      "Religious theocracy"
    ],
    answer: 1
  },
  {
    question: "Indirect Rule was first practiced in:",
    options: [
      "Western Nigeria",
      "Eastern Nigeria",
      "Northern Nigeria",
      "Lagos Colony"
    ],
    answer: 2
  },
  {
    question: "The head of British colonial administration was the:",
    options: [
      "Emir",
      "District Commissioner",
      "Governor-General",
      "Warrant Chief"
    ],
    answer: 2
  },
  {
    question: "Warrant Chiefs were created in:",
    options: [
      "Northern Nigeria",
      "Eastern and Western Nigeria",
      "Middle Belt",
      "Sokoto Caliphate"
    ],
    answer: 1
  },
  {
    question: "Warrant Chiefs became unpopular due to:",
    options: [
      "Promoting education",
      "Sale of justice and forced labour",
      "Religious reforms",
      "Land redistribution"
    ],
    answer: 1
  },
  {
    question: "The 1929 Aba Women's Riot was sparked by:",
    options: [
      "Ban on traditional festivals",
      "Direct taxation and unfair prices",
      "Religious persecution",
      "Land confiscation for railways"
    ],
    answer: 1
  },
  {
    question: "In 1939, Southern Province was split into:",
    options: [
      "North and South",
      "Eastern and Western Provinces",
      "Coastal and Inland zones",
      "Three regions"
    ],
    answer: 1
  },
  {
    question: "Tiv riots occurred in:",
    options: [
      "1914 and 1922",
      "1929, 1939, and 1945",
      "1953 and 1960",
      "1944 only"
    ],
    answer: 1
  },
  {
    question: "Decolonization was fueled by:",
    options: [
      "Foreign investment",
      "Racial discrimination and exploitation",
      "Support from the United States",
      "British encouragement"
    ],
    answer: 1
  },
  {
    question: "The first anti-colonial organization (1914) opposed:",
    options: [
      "Land laws",
      "Water rates",
      "Education policies",
      "Taxation"
    ],
    answer: 1
  },
  {
    question: "LAARPS agitated against:",
    options: [
      "Water rates",
      "Land misappropriation",
      "Forced labor",
      "Religious discrimination"
    ],
    answer: 1
  },
  {
    question: "Marcus Garvey founded the:",
    options: [
      "People's Union",
      "Universal Negro Improvement Union",
      "NCNC",
      "Action Group"
    ],
    answer: 1
  },
  {
    question: "The 1920 Accra Conference demanded:",
    options: [
      "Immediate independence",
      "African control of taxes and chiefs",
      "British military withdrawal",
      "Partition of Nigeria"
    ],
    answer: 1
  },
  {
    question: "Herbert Macaulay founded the:",
    options: [
      "NPC",
      "NNDP",
      "AG",
      "Zikist Movement"
    ],
    answer: 1
  },
  {
    question: "The Lagos Youth Movement was renamed in 1938 to include:",
    options: [
      "Azikiwe and Awolowo",
      "Balewa and Enahoro",
      "Garvey and Nkrumah",
      "Macaulay and Savage"
    ],
    answer: 0
  },
  {
    question: "The 1945 Pan-African Congress was led by:",
    options: [
      "Azikiwe and Awolowo",
      "Nkrumah and Kenyatta",
      "Balewa and Enahoro",
      "Macaulay and Garvey"
    ],
    answer: 1
  },
  {
    question: "The NCNC advocated for:",
    options: [
      "Unitary government",
      "Regionalization into three units",
      "Islamic state",
      "Military rule"
    ],
    answer: 1
  },
  {
    question: "The Zikist Movement (1946) promoted:",
    options: [
      "Tax payment",
      "Military collaboration",
      "Tax boycotts and strikes",
      "Religious reforms"
    ],
    answer: 2
  },
  {
    question: "Awolowo led the:",
    options: [
      "NPC",
      "NCNC",
      "Action Group",
      "People's Union"
    ],
    answer: 2
  },
  {
    question: "The Macpherson Constitution (1951) was criticized for:",
    options: [
      "Granting independence",
      "Overrepresenting the North",
      "Abolishing regions",
      "Excluding southern leaders"
    ],
    answer: 1
  },
  {
    question: "Anthony Enahoro's 1953 motion demanded self-government by:",
    options: [
      "1954",
      "1956",
      "1960",
      "1970"
    ],
    answer: 1
  },
  {
    question: "The Kano Riot (1953) resulted from:",
    options: [
      "Northern delegates walking out",
      "Tax increases",
      "Education reforms",
      "Land seizures"
    ],
    answer: 0
  },
  {
    question: "The Lyttleton Constitution (1954) established:",
    options: [
      "Unitary government",
      "Federal structure",
      "Military rule",
      "Socialist economy"
    ],
    answer: 1
  },
  {
    question: "Self-government was granted to East/West in:",
    options: [
      "1954",
      "1957",
      "1959",
      "1960"
    ],
    answer: 1
  },
  {
    question: "The North gained self-government in:",
    options: [
      "1957",
      "1959",
      "1960",
      "1963"
    ],
    answer: 1
  },
  {
    question: "Nigeria's independence was fixed for:",
    options: [
      "July 29, 1960",
      "October 1, 1960",
      "April 1, 1939",
      "January 15, 1966"
    ],
    answer: 1
  },
  {
    question: "The Mid-West Region was created in:",
    options: [
      "1951",
      "1954",
      "1958",
      "1960"
    ],
    answer: 2
  },
  {
    question: "Nigeria's first Prime Minister was:",
    options: [
      "Azikiwe",
      "Awolowo",
      "Balewa",
      "Enahoro"
    ],
    answer: 2
  },
  {
    question: "At independence, Nigeria adopted:",
    options: [
      "Presidential system",
      "Parliamentary democracy",
      "Military junta",
      "One-party state"
    ],
    answer: 1
  },
  {
    question: "Federalism in Nigeria aimed to:",
    options: [
      "Centralize power",
      "Balance diversity and unity",
      "Promote ethnic dominance",
      "Abolish regions"
    ],
    answer: 1
  },
  {
    question: "The Senate under the 1957 Constitution had:",
    options: [
      "320 members",
      "12 members per region",
      "No northern representation",
      "Appointed chiefs only"
    ],
    answer: 1
  },
  {
    question: "The House of Representatives had:",
    options: [
      "12 members",
      "120 members",
      "250 members",
      "320 members"
    ],
    answer: 3
  },
  {
    question: "Opposition leader at independence was:",
    options: [
      "Azikiwe",
      "Awolowo",
      "Balewa",
      "Enahoro"
    ],
    answer: 1
  },
  {
    question: "Colonial economic exploitation prioritized:",
    options: [
      "Nigerian industries",
      "Raw materials for Europe",
      "Local education",
      "Infrastructure development"
    ],
    answer: 1
  },
  {
    question: "The 'aura of whites' was destroyed by:",
    options: [
      "NATO policies",
      "World War II",
      "UNO debates",
      "Pan-African Congress"
    ],
    answer: 1
  },
  {
    question: "The NPC's motto was:",
    options: [
      "One Nigeria",
      "One North, One People",
      "Freedom Now",
      "Unity and Faith"
    ],
    answer: 1
  },
  {
    question: "The 1954 Constitution granted autonomy to:",
    options: [
      "Federal government only",
      "Regions",
      "Districts only",
      "British officials"
    ],
    answer: 1
  },
  {
    question: "Ethnic nationalism triumphed over unity due to:",
    options: [
      "British interference",
      "Formation of AG and NPC",
      "Zikist Movement",
      "Aba Women's riot"
    ],
    answer: 1
  },
  {
    question: "Colonial administration relied heavily on:",
    options: [
      "Elected officials",
      "Traditional rulers",
      "Religious leaders",
      "Foreign volunteers"
    ],
    answer: 1
  },
  {
    question: "Forced labor was controlled by:",
    options: [
      "District Officers",
      "Warrant Chiefs",
      "Missionaries",
      "Tribal assemblies"
    ],
    answer: 1
  },
  {
    question: "Resident Officers oversaw:",
    options: [
      "Villages",
      "Emirates",
      "Provinces",
      "Districts"
    ],
    answer: 2
  },
  {
    question: "The Executive Council advised the:",
    options: [
      "Emir",
      "Governor-General",
      "Prime Minister",
      "Warrant Chief"
    ],
    answer: 1
  },
  {
    question: "The Aborigines Rights Protection Society fought against:",
    options: [
      "Water rates",
      "Land theft",
      "Taxation",
      "Religious laws"
    ],
    answer: 1
  },
  {
    question: "The 1922 Clifford Constitution introduced:",
    options: [
      "Self-government",
      "Elective representation",
      "Regionalization",
      "Military rule"
    ],
    answer: 1
  },
  {
    question: "Azikiwe co-founded the:",
    options: [
      "AG",
      "NPC",
      "NCNC",
      "WASU"
    ],
    answer: 2
  },
  {
    question: "WASU pressured Britain to:",
    options: [
      "Increase investment",
      "Grant independence",
      "Expand colonies",
      "Deploy troops"
    ],
    answer: 1
  },
  {
    question: "UNO provided a platform to condemn:",
    options: [
      "Capitalism",
      "Imperialism",
      "Federalism",
      "Tribalism"
    ],
    answer: 1
  },
  {
    question: "The Zikist Movement opposed:",
    options: [
      "Nigerian unity",
      "Empire Day celebrations",
      "Regional autonomy",
      "Islamic education"
    ],
    answer: 1
  },
  {
    question: "The AG emerged from:",
    options: [
      "NPC",
      "Egbe Omo Oduduwa",
      "NCNC",
      "People's Union"
    ],
    answer: 1
  },
  {
    question: "Post-WWII nationalism grew because:",
    options: [
      "Britain encouraged it",
      "Soldiers returned with new ideas",
      "UNO imposed it",
      "Economy collapsed"
    ],
    answer: 1
  },
  {
    question: "NATO's 1941 principle emphasized:",
    options: [
      "Colonial expansion",
      "Right to self-government",
      "Military alliances",
      "Trade monopolies"
    ],
    answer: 1
  },
  {
    question: "The first regional party was the:",
    options: [
      "NPC",
      "NCNC",
      "Action Group",
      "NNDP"
    ],
    answer: 2
  },
  {
    question: "Northern leaders feared southern domination due to:",
    options: [
      "Military power",
      "Educational advantage",
      "Larger population",
      "Oil wealth"
    ],
    answer: 1
  },
  {
    question: "The Macpherson Constitution attempted to:",
    options: [
      "Declare independence",
      "Compromise between North/South",
      "Abolish federalism",
      "Ban political parties"
    ],
    answer: 1
  },
  {
    question: "Kano Riot (1953) erupted after Northern delegates:",
    options: [
      "Supported self-government",
      "Walked out of parliament",
      "Demanded secession",
      "Allied with AG"
    ],
    answer: 1
  },
  {
    question: "The Mid-West Region was carved from the:",
    options: [
      "North",
      "West",
      "East",
      "Lagos"
    ],
    answer: 1
  },
  {
    question: "Nigeria's Independence Act was passed by:",
    options: [
      "Nigerian Parliament",
      "UNO Assembly",
      "British Parliament",
      "Regional governments"
    ],
    answer: 2
  },
  {
    question: "Azikiwe became Nigeria's first:",
    options: [
      "Prime Minister",
      "Governor-General",
      "Opposition leader",
      "President"
    ],
    answer: 1
  },
  {
    question: "Parliamentary democracy was inherited from:",
    options: [
      "France",
      "United States",
      "Britain",
      "Soviet Union"
    ],
    answer: 2
  },
  {
    question: "Colonial tax revenues primarily benefited:",
    options: [
      "Local chiefs",
      "Nigerian infrastructure",
      "British economy",
      "Missionary schools"
    ],
    answer: 2
  },
  {
    question: "Federalism in Nigeria accommodated:",
    options: [
      "Cultural homogeneity",
      "Ethnic and regional diversity",
      "Religious unity",
      "Centralized control"
    ],
    answer: 1
  },
  {
    question: "The term 'warrant chiefs' refers to:",
    options: [
      "Traditional rulers",
      "British-appointed collaborators",
      "Religious leaders",
      "Military officers"
    ],
    answer: 1
  },
  {
    question: "Decolonization accelerated after WWII because:",
    options: [
      "Britain was bankrupt",
      "Nigeria discovered oil",
      "US invaded Africa",
      "UNO dissolved"
    ],
    answer: 0
  },
  {
    question: "A key failure of colonial education was:",
    options: [
      "Overfunding",
      "Excluding Europeans",
      "Not preparing Africans for senior roles",
      "Focusing on science"
    ],
    answer: 2
  },
  {
    question: "The Native Court system in the South was:",
    options: [
      "Democratic",
      "Corrupt and imposed",
      "Abolished in 1920",
      "Led by emirs"
    ],
    answer: 1
  },
  {
    question: "Ethnographical materials are sources of:",
    options: [
      "Geological data",
      "Nigerian history",
      "Tax records",
      "British laws"
    ],
    answer: 1
  },
  {
    question: "The 1954 Constitution created a:",
    options: [
      "Confederation",
      "Federation",
      "Theocracy",
      "Monarchy"
    ],
    answer: 1
  },
  {
    question: "Balewa's NPC represented primarily:",
    options: [
      "Yoruba interests",
      "Igbo interests",
      "Northern interests",
      "Southern elites"
    ],
    answer: 2
  },
  {
    question: "The 1929-1930 protests were led by:",
    options: [
      "Soldiers",
      "Students",
      "Women",
      "Chiefs"
    ],
    answer: 2
  },
  {
    question: "Nigeria became a republic in:",
    options: [
      "1957",
      "1960",
      "1963",
      "1966"
    ],
    answer: 2
  },
  {
    question: "The last British Governor-General was:",
    options: [
      "Lord Lugard",
      "James Robertson",
      "Hugh Clifford",
      "Bernard Bourdillon"
    ],
    answer: 1
  },
  {
    question: "The capital moved from Lagos to Abuja in:",
    options: [
      "1960",
      "1975",
      "1982",
      "1991"
    ],
    answer: 3
  },
  {
    question: "First military coup occurred in:",
    options: [
      "1960",
      "1966",
      "1970",
      "1983"
    ],
    answer: 1
  },
  {
    question: "The Biafran War lasted from:",
    options: [
      "1957-1960",
      "1963-1966",
      "1967-1970",
      "1975-1979"
    ],
    answer: 2
  },
  {
    question: "Oil was discovered in commercial quantities in:",
    options: [
      "1900",
      "1937",
      "1956",
      "1970"
    ],
    answer: 2
  },
  {
    question: "UNESCO designated Sukur Cultural Landscape in:",
    options: [
      "1999",
      "1960",
      "2005",
      "2010"
    ],
    answer: 0
  },
  {
    question: "Nigeria joined OPEC in:",
    options: [
      "1960",
      "1971",
      "1980",
      "1999"
    ],
    answer: 1
  },
  {
    question: "Second Republic began in:",
    options: [
      "1960",
      "1979",
      "1983",
      "1999"
    ],
    answer: 1
  },
  {
    question: "Current constitution adopted in:",
    options: [
      "1960",
      "1979",
      "1989",
      "1999"
    ],
    answer: 3
  }
];
// UI Elements
const questionNav = document.getElementById('question-nav');
const startScreen = document.getElementById('start-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const app = document.getElementById('app');
const timerEl = document.getElementById('timer');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const scoreEl = document.getElementById('score');
const resultsList = document.getElementById('results-list');
const retryBtn = document.getElementById('retry-btn');
const customConfirm = document.getElementById('customConfirm');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Quiz variables
const TOTAL_QUESTIONS = 45;
const TIME_LIMIT = 45 * 60; // in seconds
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timer;
let timeRemaining = TIME_LIMIT;

// Initialize quiz
startQuizBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  app.style.display = 'flex';
  initQuiz();
});

function initQuiz() {
  // Shuffle and pick questions
  const shuffled = shuffleArray([...questions]);
  selectedQuestions = shuffled.slice(0, Math.min(TOTAL_QUESTIONS, questions.length));

  currentQuestionIndex = 0;
  userAnswers = new Array(selectedQuestions.length).fill(null);

  timeRemaining = TIME_LIMIT;
  updateTimerDisplay();

  showQuestion();

  prevBtn.disabled = true;
  nextBtn.disabled = false;
  submitBtn.disabled = true;

  quizContainer.style.display = 'flex';
  resultContainer.style.display = 'none';

  startTimer();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timer);
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  let min = Math.floor(timeRemaining / 60);
  let sec = timeRemaining % 60;
  timerEl.textContent = `Time Left: ${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

function renderQuestionNav() {
  questionNav.innerHTML = '';
  selectedQuestions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    if (userAnswers[i] !== null) btn.classList.add('answered');
    if (i === currentQuestionIndex) btn.classList.add('current');
    btn.addEventListener('click', () => {
      currentQuestionIndex = i;
      showQuestion();
      renderQuestionNav();
    });
    questionNav.appendChild(btn);
  });
}

function showQuestion() {
  const q = selectedQuestions[currentQuestionIndex];
  questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
  questionTextEl.textContent = q.question;

  optionsContainer.innerHTML = '';

  q.options.forEach((optionText, i) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.textContent = String.fromCharCode(65 + i) + ". " + optionText;
    
    // Add keyboard shortcut badge
    const keyBadge = document.createElement('div');
    keyBadge.className = 'key-badge';
    keyBadge.textContent = String.fromCharCode(65 + i);
    optionDiv.appendChild(keyBadge);

    if(userAnswers[currentQuestionIndex] === i) {
      optionDiv.classList.add('selected');
    }

    optionDiv.addEventListener('click', () => {
      selectOption(i);
    });

    optionsContainer.appendChild(optionDiv);
  });

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = currentQuestionIndex === selectedQuestions.length - 1;
  submitBtn.disabled = userAnswers[currentQuestionIndex] === null;

  renderQuestionNav();
}

function selectOption(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  
  Array.from(optionsContainer.children).forEach((optEl, idx) => {
    optEl.classList.toggle('selected', idx === optionIndex);
  });

  submitBtn.disabled = false;
  renderQuestionNav();
}

// Navigation buttons
prevBtn.addEventListener('click', () => {
  if(currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if(currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
});

// Submit button shows custom confirmation dialog
submitBtn.addEventListener('click', () => {
  customConfirm.style.display = 'flex';
});

// Confirm dialog buttons
confirmYes.addEventListener('click', () => {
  customConfirm.style.display = 'none';
  finishQuiz();
});

confirmNo.addEventListener('click', () => {
  customConfirm.style.display = 'none';
});

function finishQuiz() {
  clearInterval(timer);
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'flex';

  let correctCount = 0;
  resultsList.innerHTML = '';

  selectedQuestions.forEach((q, idx) => {
    const userAnsIndex = userAnswers[idx];
    const isCorrect = userAnsIndex === q.answer;
    if (isCorrect) correctCount++;

    const userAnswerText = userAnsIndex !== null ? q.options[userAnsIndex] : 'No Answer';
    const correctAnswerText = q.options[q.answer];

    const div = document.createElement('div');
    div.className = 'result-question';
    div.innerHTML = `
      <div><strong>Q${idx + 1}:</strong> ${q.question}</div>
      <div>Your answer: <span class="${isCorrect ? 'correct' : 'wrong'}">${userAnswerText}</span></div>
      ${isCorrect ? '' : `<div>Correct answer: <span class="correct">${correctAnswerText}</span></div>`}
    `;
    resultsList.appendChild(div);
  });

  scoreEl.textContent = `You answered ${correctCount} out of ${selectedQuestions.length} questions correctly.`;
  
  // Add performance comment
  let comment = "";
  const percentage = Math.round((correctCount / selectedQuestions.length) * 100);
  
  if (percentage >= 80) comment = "Excellent work! You have a strong grasp of this material.";
  else if (percentage >= 60) comment = "Good effort! Review the incorrect answers to improve.";
  else comment = "Keep studying! Focus on the topics you missed.";
  
  scoreEl.innerHTML += `<div style="margin-top:10px;font-weight:normal">${comment}</div>`;
}

retryBtn.addEventListener('click', () => {
  initQuiz();
});

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Ignore if focus is on input elements
  if (['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName)) {
    return;
  }
  
  const key = e.key.toUpperCase();
  
  // Option selection
  if (key >= 'A' && key <= 'E') {
    const optionIndex = key.charCodeAt(0) - 65;
    const currentOptions = selectedQuestions[currentQuestionIndex]?.options || [];
    
    if (optionIndex < currentOptions.length) {
      selectOption(optionIndex);
    }
  }
  
  // Navigation
  switch(key) {
    case 'P':
      if (!prevBtn.disabled) prevBtn.click();
      break;
    case 'N':
      if (!nextBtn.disabled) nextBtn.click();
      break;
  }
});
