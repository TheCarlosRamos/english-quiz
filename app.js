
// Quiz de past simple (he) — verbos irregulares em inglês
const VERBS = [
  { inf: 'be', past: 'he was' },
  { inf: 'have', past: 'he had' },
  { inf: 'go', past: 'he went' },
  { inf: 'do', past: 'he did' },
  { inf: 'say', past: 'he said' },
  { inf: 'see', past: 'he saw' },
  { inf: 'come', past: 'he came' },
  { inf: 'get', past: 'he got' },
  { inf: 'make', past: 'he made' },
  { inf: 'take', past: 'he took' },
  { inf: 'know', past: 'he knew' },
  { inf: 'think', past: 'he thought' },
  { inf: 'put', past: 'he put' },
  { inf: 'give', past: 'he gave' },
  { inf: 'find', past: 'he found' },
  { inf: 'tell', past: 'he told' },
  { inf: 'become', past: 'he became' },
  { inf: 'leave', past: 'he left' },
  { inf: 'feel', past: 'he felt' },
  { inf: 'bring', past: 'he brought' },
  { inf: 'begin', past: 'he began' },
  { inf: 'keep', past: 'he kept' },
  { inf: 'let', past: 'he let' },
  { inf: 'mean', past: 'he meant' },
  { inf: 'set', past: 'he set' },
  { inf: 'meet', past: 'he met' },
  { inf: 'run', past: 'he ran' },
  { inf: 'sit', past: 'he sat' },
  { inf: 'speak', past: 'he spoke' },
  { inf: 'lie', past: 'he lied' },
  { inf: 'lead', past: 'he led' },
  { inf: 'read', past: 'he read' },
  { inf: 'grow', past: 'he grew' },
  { inf: 'lose', past: 'he lost' },
  { inf: 'fall', past: 'he fell' },
  { inf: 'send', past: 'he sent' },
  { inf: 'build', past: 'he built' },
  { inf: 'understand', past: 'he understood' },
  { inf: 'draw', past: 'he drew' },
  { inf: 'break', past: 'he broke' },
  { inf: 'spend', past: 'he spent' },
  { inf: 'cut', past: 'he cut' },
  { inf: 'rise', past: 'he rose' },
  { inf: 'drive', past: 'he drove' },
  { inf: 'buy', past: 'he bought' },
  { inf: 'wear', past: 'he wore' },
  { inf: 'choose', past: 'he chose' },
  { inf: 'seek', past: 'he sought' },
  { inf: 'fight', past: 'he fought' },
  { inf: 'teach', past: 'he taught' },
  { inf: 'catch', past: 'he caught' },
  { inf: 'sell', past: 'he sold' },
  { inf: 'stand', past: 'he stood' },
  { inf: 'hold', past: 'he held' },
  { inf: 'write', past: 'he wrote' },
  { inf: 'hear', past: 'he heard' },
  { inf: 'win', past: 'he won' },
  { inf: 'pay', past: 'he paid' },
  { inf: 'eat', past: 'he ate' },
  { inf: 'swim', past: 'he swam' },
  { inf: 'fly', past: 'he flew' },
  { inf: 'shake', past: 'he shook' },
];

const TOTAL_ROUNDS = 10;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function guessRegularPast(inf) {
  if (/[^aeiou]y$/i.test(inf)) return 'he ' + inf.slice(0, -1) + 'ied';
  if (/e$/i.test(inf)) return 'he ' + inf + 'd';
  return 'he ' + inf + 'ed';
}

function presentThirdPerson(inf) {
  if (/[^aeiou]y$/i.test(inf)) return 'he ' + inf.slice(0, -1) + 'ies';
  if (/^(go|do)$/i.test(inf)) return inf.toLowerCase() === 'go' ? 'he goes' : 'he does';
  if (/^(have|be)$/i.test(inf)) return inf.toLowerCase() === 'have' ? 'he has' : 'he is';
  return 'he ' + inf + 's';
}

function corruptPast(form) {
  const m = form.match(/^he\s+(.+)$/i);
  if (!m) return form;
  const w = m[1];
  const tries = [
    'he ' + w + 'ed',
    'he ' + w.replace(/.$/, '') + (w.length > 2 ? w.slice(-2) : w),
    form.replace(/^he /i, 'he have '),
  ];
  const pick = tries.find(t => t.toLowerCase() !== form.toLowerCase());
  return pick || ('he ' + w + 's');
}

function plausibleDistractors(verb, allVerbs) {
  const distractors = new Set();
  const reg = guessRegularPast(verb.inf);
  if (reg.toLowerCase() !== verb.past.toLowerCase()) distractors.add(reg);
  const pres = presentThirdPerson(verb.inf);
  if (pres.toLowerCase() !== verb.past.toLowerCase()) distractors.add(pres);
  distractors.add(corruptPast(verb.past));
  const other = allVerbs.filter(v => v.inf !== verb.inf);
  if (other.length) distractors.add(other[Math.floor(Math.random() * other.length)].past);
  distractors.delete(verb.past);
  return [...distractors];
}

function pickN(arr, n) { return shuffle(arr).slice(0, n); }

let rounds = [];
let current = 0;
let score = 0;
let autoAdvanceTimer = null;

const screenStart = document.getElementById('screen-start');
const screenQuiz  = document.getElementById('screen-quiz');
const screenEnd   = document.getElementById('screen-end');
const btnStart    = document.getElementById('btn-start');
const btnNext     = document.getElementById('btn-next');
const btnRetry    = document.getElementById('btn-retry');
const choicesEl   = document.getElementById('choices');
const infinitiveEl= document.getElementById('infinitive');
const roundEl     = document.getElementById('round');
const scoreEl     = document.getElementById('score');
const progressEl  = document.querySelector('#progress .bar');
const finalTextEl = document.getElementById('final-text');
const usedListEl  = document.getElementById('used-list');

btnStart.addEventListener('click', startGame);
btnNext.addEventListener('click', nextRound);
btnRetry.addEventListener('click', () => { showScreen('start'); });

function showScreen(which) {
  screenStart.classList.remove('active');
  screenQuiz.classList.remove('active');
  screenEnd.classList.remove('active');
  if (which === 'start') screenStart.classList.add('active');
  else if (which === 'quiz') screenQuiz.classList.add('active');
  else if (which === 'end') screenEnd.classList.add('active');
}

function startGame() {
  score = 0; current = 0;
  const selected = pickN(VERBS, TOTAL_ROUNDS);
  rounds = selected.map(v => makeRound(v));
  showScreen('quiz');
  renderRound();
}

function makeRound(verb) {
  const pool = plausibleDistractors(verb, VERBS);
  const distracts = shuffle(pool).slice(0, 2);
  const options = shuffle([verb.past, ...distracts]);
  return { verb, options, answer: verb.past };
}

function renderRound() {
  clearTimeout(autoAdvanceTimer);
  btnNext.disabled = true;
  const r = rounds[current];
  const step = current + 1;
  roundEl.textContent = `Rodada ${step}/${TOTAL_ROUNDS}`;
  scoreEl.textContent = `Score: ${score}`;
  progressEl.style.width = `${Math.round((step - 1) / TOTAL_ROUNDS * 100)}%`;

  infinitiveEl.textContent = r.verb.inf;
  choicesEl.innerHTML = '';

  r.options.forEach(opt => {
    const li = document.createElement('li');
    li.className = 'choice';
    li.setAttribute('role', 'option');
    li.setAttribute('tabindex', '0');
    li.textContent = opt;
    li.addEventListener('click', () => selectAnswer(li, r.answer));
    li.addEventListener('keypress', (e) => { if (e.key === 'Enter' || e.key === ' ') selectAnswer(li, r.answer); });
    choicesEl.appendChild(li);
  });
}

function lockChoices() {
  [...choicesEl.children].forEach(li => li.setAttribute('aria-disabled', 'true'));
}

function selectAnswer(li, correct) {
  if (li.getAttribute('aria-disabled') === 'true') return;
  const chosen = li.textContent;
  const isCorrect = chosen === correct;
  if (isCorrect) { li.classList.add('correct'); score++; scoreEl.textContent = `Score: ${score}`; }
  else { li.classList.add('wrong'); }

  [...choicesEl.children].forEach(el => { if (el.textContent === correct) el.classList.add('correct'); });
  lockChoices();
  btnNext.disabled = false;
  autoAdvanceTimer = setTimeout(nextRound, 1100);
}

function nextRound() {
  clearTimeout(autoAdvanceTimer);
  if (current + 1 >= TOTAL_ROUNDS) endGame();
  else { current++; renderRound(); }
}

function endGame() {
  progressEl.style.width = '100%';
  finalTextEl.textContent = `Você acertou ${score} de ${TOTAL_ROUNDS}.`;
  usedListEl.innerHTML = '';
  rounds.forEach(r => {
    const li = document.createElement('li');
    li.textContent = `${r.verb.inf} → ${r.verb.past}`;
    usedListEl.appendChild(li);
  });
  showScreen('end');
}
