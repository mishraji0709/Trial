// -------------------- Heart Rain --------------------
function createHeart(){
  const heart = document.createElement('div');
  heart.textContent = '💖';
  heart.style.left = Math.random()*100+'vw';
  heart.style.animationDuration = (3+Math.random()*3)+'s';
  document.getElementById('heart-rain').appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
}
setInterval(createHeart,300);

// -------------------- Music --------------------
function startMusic(){
  const audio = document.getElementById('bgAudio');
  audio.volume=0.5;
  audio.play().catch(()=>console.log("Autoplay blocked"));
}

// -------------------- Password --------------------
const password = "10122011";
document.getElementById('pwForm').addEventListener('submit', e=>{
  e.preventDefault();
  const val = document.getElementById('pwInput').value.trim();
  if(val===password){
    switchSection('welcomePage');
    startMusic(); // play music after first interaction
  } else { alert("Wrong password 😅"); }
});

// -------------------- Continue Buttons --------------------
document.getElementById('continueBtn').addEventListener('click', ()=>{
  switchSection('mainPage');
  typeWriter(); // start typewriter after welcome
});

document.getElementById('toProposal').addEventListener('click', ()=>{
  switchSection('proposalPage');
});

// -------------------- Section Switch --------------------
function switchSection(id){
  document.querySelectorAll('.section').forEach(s=>{
    s.classList.add('hidden'); 
    s.classList.remove('active');
  });
  document.getElementById(id).classList.remove('hidden');
  document.getElementById(id).classList.add('active');
}

// -------------------- Typewriter --------------------
const typewriterText = "Hey… I just wanted to say something simple — You're genuinely different, and maybe that's why I made this for you ❤️";
let i=0;
function typeWriter(){
  const el = document.getElementById('typewriter');
  if(i<typewriterText.length){
    el.textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter,50);
  }
}

// -------------------- Proposal Buttons --------------------
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', ()=>{
  switchSection('yesPage');
});

// Open No Page when No clicked
noBtn.addEventListener('click', ()=>{
  switchSection('noPage'); // make sure you have <section id="noPage">
  initNoPage(); // initialize the moving No button
});

// -------------------- No Page Logic --------------------
function initNoPage(){
  const noYesBtn = document.getElementById('noYesBtn');
  const noNoBtn = document.getElementById('noNoBtn');

  noYesBtn.addEventListener('click', ()=>{
    switchSection('yesPage');
  });

  // Move No button randomly on hover
  noNoBtn.addEventListener('mouseenter', () => moveNoButton(noNoBtn));
}

function moveNoButton(button){
  const padding = 20; // keep inside screen
  const maxX = window.innerWidth - button.offsetWidth - padding;
  const maxY = window.innerHeight - button.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  button.style.position = 'absolute';
  button.style.left = x + 'px';
  button.style.top = y + 'px';
  button.style.transition = 'left 0.3s ease, top 0.3s ease'; // smooth movement
}