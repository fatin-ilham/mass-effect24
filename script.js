let currentQuestion = 0;
let scores = {
  paragon: 0,
  renegade: 0,
  neutral: 0
};

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const responseEl = document.getElementById('response');
const nextBtn = document.getElementById('next');
const resultEl = document.getElementById('result');

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.text;
  choicesEl.innerHTML = '';
  responseEl.textContent = '';
  nextBtn.style.display = 'none';

  q.choices.forEach((choice, index) => {
    const div = document.createElement('div');
    div.classList.add('choice');
    div.textContent = choice.text;
    div.addEventListener('click', () => selectChoice(choice));
    choicesEl.appendChild(div);
  });
}

function selectChoice(choice) {
  for (const key in choice.effects) {
    scores[key] += choice.effects[key];
  }

  responseEl.textContent = choice.response;
  Array.from(choicesEl.children).forEach(btn => btn.style.pointerEvents = 'none');
  nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.style.display = 'none';
  choicesEl.style.display = 'none';
  responseEl.style.display = 'none';
  nextBtn.style.display = 'none';

  const { paragon, renegade, neutral } = scores;
  let alignment;
  if (paragon > renegade && paragon > neutral) alignment = "Paragon 🛡️";
  else if (renegade > paragon && renegade > neutral) alignment = "Renegade 🔥";
  else alignment = "Balanced 👥";

  resultEl.innerHTML = `
    <p>Your Alignment: <strong>${alignment}</strong></p>
    <p>Paragon: ${paragon}, Renegade: ${renegade}, Neutral: ${neutral}</p>
  `;
}

showQuestion();
