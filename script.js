// YASHIKA'S BIRTHDAY WEBSITE 💗
// Add your 10 photos to the images folder as photo-01.jpg through photo-10.jpg.
// Edit the captions, quiz, gift message, and letter here whenever you like.

const memories = [
  { file: "photo-01.jpg", caption: "Those eyes. That smile. My favourite view. ♡" },
  { file: "photo-02.jpg", caption: "One of my favourite little memories 🌷" },
  { file: "photo-03.jpg", caption: "Our long talks that somehow never feel long enough" },
  { file: "photo-04.jpg", caption: "A little moment I wish I could keep in a frame" },
  { file: "photo-05.jpg", caption: "My favourite person to see, even on an ordinary day" },
  { file: "photo-06.jpg", caption: "A memory with my favourite girl 💗" },
  { file: "photo-07.jpg", caption: "Pretty tulips could never compete with your smile" },
  { file: "photo-08.jpg", caption: "More laughs, more food, more us" },
  { file: "photo-09.jpg", caption: "One for the scrapbook, one for my heart" },
  { file: "photo-10.jpg", caption: "And somehow, you are still my favourite part" }
];

const loveLetter = `My Yashika, 🌷

Honestly, I don’t think you realise how much the little things you do mean to me. Our long talks, seeing you almost every day, your care, and even the smallest moments with you make me happier than I can explain.

I love how we remember little things about each other, how we tease each other, and how I can just be myself with you. And the way you make chapati and gajar ka halwa, or share momos with me… these might seem like small things to you, but trust me, I remember them. 🥹❤️

I know I might not always say everything I feel, but you really do mean a lot to me. I want to see you happy, see you achieve everything you dream of, and be someone you can count on when life gets difficult.

Happy birthday, my Yashika. 🌷

I don’t know what the future holds, but I know I want to make many more memories with you. Thank you for being you. You’ve become a part of my life that I genuinely never want to take for granted.

I love you. ❤️
With a very full heart,
your Mynk ♡`;

// Edit these to match your own inside jokes.
const quizQuestions = [
  {
    question: "What food can win me over suspiciously quickly? 🥟",
    answers: ["Momos", "A serious lecture", "Plain boiled broccoli"],
    correctIndex: 0,
    response: "Correct. Bonus points if you pack me a plate too. 🥹"
  },
  {
    question: "What little thing about you could I look at for ages? 👀",
    answers: ["Your eye shape and those eyes", "The weather app", "A blank wall"],
    correctIndex: 0,
    response: "Those eyes deserve their own tiny frame. ♡"
  },
  {
    question: "What is my ideal ordinary day with you?",
    answers: ["Long talks, seeing you, and eating something tasty", "A meeting about spreadsheets", "Pretending we don't know each other"],
    correctIndex: 0,
    response: "Exactly. Nothing fancy needed—just more little moments with you. 🌷"
  }
];

const giftText = "Your birthday-date voucher: one date picked together, your favourite momos, something sweet, and flowers if we find pretty tulips. Redeemable whenever you want. No expiry date. 💗";

const photoGrid = document.getElementById("photoGrid");
const sectionsToReveal = ["intro", "memories", "quiz", "gift", "letter", "finale"];

memories.forEach((memory, index) => {
  const card = document.createElement("article");
  card.className = "photo-card";
  card.style.setProperty("--tilt", `${[-2, 1.5, -1, 2, -1.5][index % 5]}deg`);
  const photoButton = document.createElement("button");
  photoButton.type = "button";
  photoButton.setAttribute("aria-label", `Open memory ${index + 1}`);
  const img = document.createElement("img");
  img.src = `images/${memory.file}`;
  img.alt = memory.caption;
  img.loading = "lazy";
  img.onerror = () => {
    const placeholder = document.createElement("div");
    placeholder.className = "placeholder-img";
    placeholder.textContent = ["🌷", "♡", "✿", "🥟", "✨"][index % 5];
    img.replaceWith(placeholder);
  };
  photoButton.appendChild(img);
  photoButton.addEventListener("click", () => openLightbox(`images/${memory.file}`, memory.caption));
  const caption = document.createElement("p");
  caption.textContent = memory.caption;
  card.append(photoButton, caption);
  photoGrid.appendChild(card);
});

/* YASHIKA'S BIRTHDAY PHOTO GALLERY */

const birthdayMemories = [
  { file: "birthday-21.jpg", caption: "Your beautiful birthday smile ♡" },
  { file: "birthday-22.jpg", caption: "My favourite birthday girl 🌷" },
  { file: "birthday-23.jpg", caption: "A little moment to remember 💗" },
  { file: "birthday-24.jpg", caption: "You make every moment special ✨" },
  { file: "birthday-25.jpg", caption: "One for our scrapbook ♡" },
  { file: "birthday-26.jpg", caption: "That smile, always 🥹" },
  { file: "birthday-27.jpg", caption: "More memories with you 💗" },
  { file: "birthday-28.jpg", caption: "A day to remember ✨" },
  { file: "birthday-29.jpg", caption: "My pretty birthday girl ♡" },
  { file: "birthday-30.jpg", caption: "A memory to keep forever 🌷" }
];

const birthdayGrid = document.getElementById("birthdayPhotoGrid");

if (birthdayGrid) {
  birthdayMemories.forEach((memory, index) => {
    const card = document.createElement("article");
    card.className = "photo-card";

    const tilts = [-2, 1.5, -1, 2, -1.5];
    card.style.setProperty("--tilt", `${tilts[index % tilts.length]}deg`);

    const photoButton = document.createElement("button");
    photoButton.type = "button";
    photoButton.setAttribute(
      "aria-label",
      `Open birthday photo ${index + 1}`
    );

    const img = document.createElement("img");
    img.src = `images/${memory.file}`;
    img.alt = memory.caption;
    img.loading = "lazy";

    photoButton.appendChild(img);

    photoButton.addEventListener("click", () => {
      openLightbox(`images/${memory.file}`, memory.caption);
    });

    const caption = document.createElement("p");
    caption.textContent = memory.caption;

    card.append(photoButton, caption);
    birthdayGrid.appendChild(card);
  });
}

document.getElementById("letterContent").innerHTML = loveLetter.split("\n\n")
  .map(paragraph => `<p>${escapeHTML(paragraph).replace(/\n/g, "<br>")}</p>`).join("");
document.getElementById("giftText").textContent = giftText;

function escapeHTML(text) {
  return text.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
document.getElementById("startBtn").addEventListener("click", () => {
  sectionsToReveal.forEach(id => document.getElementById(id).classList.remove("hidden"));
  document.getElementById("intro").scrollIntoView({behavior:"smooth"});
  launchConfetti(28);
});

let currentQuestion = 0;
function renderQuestion() {
  const question = quizQuestions[currentQuestion];
  document.getElementById("quizProgress").textContent = `QUESTION ${currentQuestion + 1} OF ${quizQuestions.length}`;
  document.getElementById("questionText").textContent = question.question;
  document.getElementById("quizFeedback").textContent = "";
  document.getElementById("nextQuestion").classList.add("hidden");
  const answers = document.getElementById("answers");
  answers.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn"; button.type = "button"; button.textContent = answer;
    button.addEventListener("click", () => {
      [...answers.children].forEach(item => item.disabled = true);
      document.getElementById("quizFeedback").textContent = index === question.correctIndex
        ? question.response : "Nice try, birthday girl. You know the answer is hiding in our little memories. ♡";
      document.getElementById("nextQuestion").classList.remove("hidden");
    });
    answers.appendChild(button);
  });
}
renderQuestion();
document.getElementById("nextQuestion").addEventListener("click", () => {
  currentQuestion = (currentQuestion + 1) % quizQuestions.length;
  renderQuestion();
});

document.getElementById("giftBox").addEventListener("click", event => {
  event.currentTarget.classList.add("opened");
  document.getElementById("giftMessage").classList.remove("hidden");
  document.getElementById("giftMessage").classList.add("reveal");
  launchConfetti(45);
});
document.getElementById("openLetter").addEventListener("click", event => {
  event.currentTarget.classList.toggle("opened");
  document.getElementById("letterPaper").classList.remove("hidden");
  document.getElementById("letterPaper").classList.add("reveal");
  document.getElementById("letterPaper").scrollIntoView({behavior:"smooth",block:"center"});
});
document.getElementById("wishBtn").addEventListener("click", () => {
  document.querySelector(".flames").classList.add("off");
  document.getElementById("wishMessage").textContent = "Wish sent to the universe! May your year be as lovely as you. 💫";
  document.getElementById("wishBtn").textContent = "Wish made! 💗";
  launchConfetti(90);
});
document.getElementById("restartBtn").addEventListener("click", () => {
  sectionsToReveal.forEach(id => document.getElementById(id).classList.add("hidden"));
  document.querySelector(".flames").classList.remove("off");
  document.getElementById("wishMessage").textContent = "";
  document.getElementById("wishBtn").textContent = "Blow the candles ✨";
  document.getElementById("giftBox").classList.remove("opened");
  document.getElementById("giftMessage").classList.add("hidden");
  document.getElementById("letterPaper").classList.add("hidden");
  document.getElementById("openLetter").classList.remove("opened");
  currentQuestion = 0; renderQuestion(); window.scrollTo({top:0,behavior:"smooth"});
});

const audio = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");
musicBtn.addEventListener("click", async () => {
  if (audio.paused) {
    try { await audio.play(); musicBtn.textContent = "♫ Pause our song"; musicBtn.setAttribute("aria-pressed","true"); }
    catch { musicBtn.textContent = "Add audio/our-song.mp3 first"; }
  } else { audio.pause(); musicBtn.textContent = "♫ Play our song"; musicBtn.setAttribute("aria-pressed","false"); }
});
const lightbox = document.getElementById("lightbox");
function openLightbox(src, caption) {
  const image = document.getElementById("lightboxImage"); image.src = src;
  image.onerror = () => lightbox.classList.add("hidden");
  document.getElementById("lightboxCaption").textContent = caption;
  lightbox.classList.remove("hidden");
}
function closeLightbox() { lightbox.classList.add("hidden"); }
document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });

function launchConfetti(amount=35) {
  const symbols = ["♡","✦","♥","✧","🌷"];
  for(let i=0;i<amount;i++){
    const piece=document.createElement("span");piece.className="floating-heart";
    piece.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    piece.style.left=`${Math.random()*100}%`;piece.style.fontSize=`${12+Math.random()*20}px`;
    piece.style.animationDuration=`${3+Math.random()*4}s`;
    document.querySelector(".floating-hearts").appendChild(piece);
    setTimeout(()=>piece.remove(),7500);
  }
}
setInterval(()=>{
  if(document.hidden)return;
  const heart=document.createElement("span");heart.className="floating-heart";
  heart.textContent=Math.random()>.5?"♡":"✿";heart.style.left=`${Math.random()*100}%`;
  heart.style.fontSize=`${10+Math.random()*14}px`;heart.style.animationDuration=`${7+Math.random()*5}s`;
  document.querySelector(".floating-hearts").appendChild(heart);setTimeout(()=>heart.remove(),12500);
},1500);
