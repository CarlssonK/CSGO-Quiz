const myQuestions = [
  {
    question: "What gun has this spray pattern? (Recoil Compensation)",
    options: ["SG 553 / Krieg", "AK-47", "M4A4", "AUG"],
    userAnswer: [],
    answer: ["SG 553 / Krieg"],
    compareAnswer: [],
    img: "/imgs/sg553.jpg",
    curLevel: ["1 / 30"]
  },
  {
    question: "What is this map called?",
    options: ["Ruby", "Anubis", "Chlorine", "Breach"],
    userAnswer: [],
    answer: ["Ruby"],
    compareAnswer: [],
    img: "/imgs/ruby.jpg",
    curLevel: ["2 / 30"]
  },
  {
    question: "How much does Kevlar+Helmet + AWP cost?",
    options: ["$5750", "$6750", "$5200", "$7200"],
    userAnswer: [],
    answer: ["$5750"],
    compareAnswer: [],
    img: "/imgs/kevlarAwp.png",
    curLevel: ["3 / 30"]
  },
  {
    question: "What professional cs:go player does this graffiti belong to?",
    options: ["olofmeister", "s1mple", "Dupreeh", "NiKo"],
    userAnswer: [],
    answer: ["olofmeister"],
    compareAnswer: [],
    img: "/imgs/olofmeister.jpg",
    curLevel: ["4 / 30"]
  },
  {
    question: "How much are you rewared for planting the C4?",
    options: ["$300", "$400", "$500", "$600"],
    userAnswer: [],
    answer: ["$300"],
    compareAnswer: [],
    img: "/imgs/plant.jpg",
    curLevel: ["5 / 30"]
  },
  {
    question: "What is this spot called?",
    options: ["Car", "Barrels", "Xbox", "Wood"],
    userAnswer: [],
    answer: ["Car"],
    compareAnswer: [],
    img: "/imgs/infernoSpot.jpg",
    curLevel: ["6 / 30"]
  },
  {
    question: "What Year was CS:GO Released?",
    options: ["2012", "2011", "2010", "2009"],
    userAnswer: [],
    answer: ["2012"],
    compareAnswer: [],
    img: "/imgs/10year.jpg",
    curLevel: ["7 / 30"]
  },
  {
    question: "How many pistols are there in CS:GO? (Excluding Zeus)",
    options: ["4", "6", "8", "10"],
    userAnswer: [],
    answer: ["10"],
    compareAnswer: [],
    img: "/imgs/GlockBlack.png",
    curLevel: ["8 / 30"]
  },
  {
    question: "How much does 2 Flashes + 1 Smoke + 1 Molotov Cost Combined?",
    options: ["$1100", "$900", "$1300", "$1500"],
    userAnswer: [],
    answer: ["$1100"],
    compareAnswer: [],
    img: "/imgs/grenadeCostTrans.png",
    curLevel: ["9 / 30"]
  },
  {
    question: "Which of the following wears has the float values of: 0.15 - 0.38?",
    options: ["Field-Tested", "Minimal Wear", "Well-Worn", "Battle-Scarred"],
    userAnswer: [],
    answer: ["Field-Tested"],
    compareAnswer: [],
    img: "/imgs/VulcanWear.jpg",
    curLevel: ["10 / 30"]
  },
  {
    question: "Which of the following maps does NOT feature a Fork Lift?",
    options: ["Vertigo", "Cache", "Train", "Nuke"],
    userAnswer: [],
    answer: ["Vertigo"],
    compareAnswer: [],
    img: "/imgs/forkLiftBlack.png",
    curLevel: ["11 / 30"]
  },
  {
    question: "Which real life Country is Overpass located in?",
    options: ["Germany", "Russia", "Italy", "Ukraine"],
    userAnswer: [],
    answer: ["Germany"],
    compareAnswer: [],
    img: "/imgs/overpass.jpg",
    curLevel: ["12 / 30"]
  },
  {
    question: "Which of the following cases does the AK-47 Fire Serpent belong to?",
    options: ["Operation Bravo Case", "Chroma Case", "Spectrum Case", "Operation Breakout Weapon Case"],
    userAnswer: [],
    answer: ["Operation Bravo Case"],
    compareAnswer: [],
    img: "/imgs/FireSerpent.jpg",
    curLevel: ["13 / 30"]
  },
  {
    question: "What's the Kill Award for a shotgun?",
    options: ["$900", "$300", "$600", "$1200"],
    userAnswer: [],
    answer: ["$900"],
    compareAnswer: [],
    img: "/imgs/shotgun.jpg",
    curLevel: ["14 / 30"]
  },
  {
    question: "How long time is a full round in competetive matchmaking?",
    options: ["1 minute 55 seconds", "2 minutes 30 seconds", "2 minutes 55 seconds", "1 minute 30 seconds"],
    userAnswer: [],
    answer: ["1 minute 55 seconds"],
    compareAnswer: [],
    img: "/imgs/roundTime.png",
    curLevel: ["15 / 30"]
  },
  {
    question: "What's the name of this skin?",
    options: ["Big Iron", "Abyss", "Royal Legion", "Colony"],
    userAnswer: [],
    answer: ["Big Iron"],
    compareAnswer: [],
    img: "/imgs/BigIron.jpg",
    curLevel: ["16 / 30"]
  },
  {
    question: "Which of the following guns slows down your movement speed the most?",
    options: ["Galil", "XM1014", "MP9", "SSG 08"],
    userAnswer: [],
    answer: ["Galil"],
    compareAnswer: [],
    img: "/imgs/speedMovement.png",
    curLevel: ["17 / 30"]
  },
  {
    question: "In the map train, how many trains are there in both A site and B site combined? (Including bomb trains)",
    options: ["10", "9", "8", "7"],
    userAnswer: [],
    answer: ["10"],
    compareAnswer: [],
    img: "/imgs/trainsAB.jpg",
    curLevel: ["18 / 30"]
  },
  {
    question: "Which of the following cases does NOT feature gloves?",
    options: ["Danger Zone Case", "Clutch Case", "Glove Case", "Operation Hydra Case"],
    userAnswer: [],
    answer: ["Danger Zone Case"],
    compareAnswer: [],
    img: "/imgs/NoGloves.jpg",
    curLevel: ["19 / 30"]
  },
  {
    question: "Why was this sticker added near pit in inferno?",
    options: ["A grenade did a lot of economic damage after the round was finished", "A grenade clutched the round by stopping the T's from planting the bomb which ran out the clock", "A grenade clutched the round by killing 2 Terrorists in pit after-plant", "It's a reminder for friendly fire"],
    userAnswer: [],
    answer: ["A grenade did a lot of economic damage after the round was finished"],
    compareAnswer: [],
    img: "/imgs/dosia.jpg",
    curLevel: ["20 / 30"]
  },
  {
    question: "How much does the MAC-10 cost?",
    options: ["$1050", "$1150", "$1200", "$1100"],
    userAnswer: [],
    answer: ["$1050"],
    compareAnswer: [],
    img: "/imgs/mac10.jpg",
    curLevel: ["21 / 30"]
  },
  {
    question: "What is this area called in Dust2?",
    options: ["Suicide", "Highway", "Top Mid", "T Ramp"],
    userAnswer: [],
    answer: ["Suicide"],
    compareAnswer: [],
    img: "/imgs/suicide.jpg",
    curLevel: ["22 / 30"]
  },
  {
    question: "How many maps are there in the Active Duty Pool?",
    options: ["7", "8", "6", "5"],
    userAnswer: [],
    answer: ["7"],
    compareAnswer: [],
    img: "/imgs/ActivePool.jpg",
    curLevel: ["23 / 30"]
  },
  {
    question: "The R8 Revolver was released in 2015, why was it so controversial?",
    options: ["The Base Damage was too high", "The fire rate was too slow", "It was too similar to the Desert Eagle", "There was a glitch where you could shoot through every wall with the gun"],
    userAnswer: [],
    answer: ["The Base Damage was too high"],
    compareAnswer: [],
    img: "/imgs/Revolver.jpg",
    curLevel: ["24 / 30"]
  },
  {
    question: "Which of the following skins is featured on more than 1 weapon?",
    options: ["Fever Dream", "Bullet Queen", "Neon Revolution", "Hellfire"],
    userAnswer: [],
    answer: ["Fever Dream"],
    compareAnswer: [],
    img: "/imgs/asiimovs.png",
    curLevel: ["25 / 30"]
  },
  {
    question: 'What does the term "Aim Punch" mean?',
    options: ["It's when you are shot in the head and your crosshair/aim flicks up for a split second", "When you're aiming at an enemy and you suddenly get punched from behind", "It's another word for falling damage, and means that your speed is slowed down from falling", "When your aim/crosshair moves while shooting with a gun"],
    userAnswer: [],
    answer: ["It's when you are shot in the head and your crosshair/aim flicks up for a split second"],
    compareAnswer: [],
    img: "/imgs/crosshair.png",
    curLevel: ["26 / 30"]
  },
  {
    question: "Roughly how many seconds does it take to rush B on Mirage from T Spawn?",
    options: ["~10 Seconds", "~15 Seconds", "~20 Seconds", "~25 Seconds"],
    userAnswer: [],
    answer: ["~15 Seconds"],
    compareAnswer: [],
    img: "/imgs/mirageB.jpg",
    curLevel: ["27 / 30"]
  },
  {
    question: "What weapon will you find shown from the image below?",
    options: ["Galil", "Famas", "AK-47", "Nova"],
    userAnswer: [],
    answer: ["Galil"],
    compareAnswer: [],
    img: "/imgs/BuyMenus.jpg",
    curLevel: ["28 / 30"]
  },
  {
    question: "Whats the official bomb code?",
    options: ["7355608", "7466508", "7533908", "7911408"],
    userAnswer: [],
    answer: ["7355608"],
    compareAnswer: [],
    img: "/imgs/plantCode.jpg",
    curLevel: ["29 / 30"]
  },
  {
    question: "What was the first ever operation called?",
    options: ["Operation Payback", "Operation Phoenix", "Operation Wildfire", "Operation Hydra"],
    userAnswer: [],
    answer: ["Operation Payback"],
    compareAnswer: [],
    img: "/imgs/shattered.jpg",
    curLevel: ["30 / 30"]
  },
]
const play = document.querySelector(".play")
const menu = document.querySelector(".menu")
const game = document.querySelector(".game")
const gameContainer = document.querySelector(".fixed-container")
const fullResults = document.querySelector(".fullResults")
const fixedContainer = document.querySelector(".fixed-container")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const prevNext = document.querySelectorAll(".prev-next")
const playAgain = document.querySelector("#playAgain")
const lastLevel = myQuestions[myQuestions.length - 1]


const option1 = document.querySelector("#op1")
const option2 = document.querySelector("#op2")
const option3 = document.querySelector("#op3")
const option4 = document.querySelector("#op4")
const buttons = document.querySelectorAll(".btn")
const loader = document.querySelector(".loader")
let clickedFocus = document.getElementsByClassName("focused")
let finalScore = document.querySelector("#score")
let iqImage = document.querySelector("#rImage")
let curLevel = document.querySelector("#curLevel")
let howManyRight = document.querySelector("#howManyRight")
let resultDescription = document.querySelector("#resultDescription")

let reviewQuestion = document.querySelectorAll(".reviewQuestion")
let reviewImg = document.querySelectorAll(".reviewImg")
let ansBox = document.querySelectorAll(".ansBox")

let reviewList = document.querySelector("#review")

let setImage = document.querySelector("#qImage")
let setQuestion = document.querySelector("#question")
let shuffledOptions
let clickedNext = 0;
let correctOption
let i = -1; // i.e. what level you're currently on
let walla = null;
let correct = "";
let fan = false;
let naf = false;
let currentLevel = i
let score = 0;


function preloadImage(url) {
  let img=new Image();
  img.src=url
}


// When clicking play, remove menu & add game
play.addEventListener("click", function() {
  nextLevel()
  shuffleOptions()
  toggleHide()
  toggleFocus()
  clicker()
  CurLevel()
  url = myQuestions[i+1].img // Pre-Load Next Image
  preloadImage(url) // Pre-Load Next Image
  menu.classList.toggle("hide")
  fixedContainer.classList.toggle("hide")
  next.classList.add("disabled")
  setQuestion.innerText = myQuestions[i].question;
  setImage.src = myQuestions[i].img;
  walla = myQuestions[i].userAnswer;
  correct = myQuestions[i].compareAnswer; //
  currentLevel = i
  console.log("Dont try to cheat!")

});  

// HIDE game when clicking next button in last lvl
next.addEventListener("click", function() {
  if(myQuestions.length <= currentLevel+1) {
    gameContainer.classList.add("hide")
    fullResults.classList.remove("hide")
    pushNextDub()
    printReview()
    declareReviewVars()
    compareScore()
    displayIQ()

  } 
})

// Next Level
next.addEventListener("click", function() {
  nextLevel();
  toggleHide();
  addFocusNext();
  CurLevel()
  if(i+1 < myQuestions.length) { // Prevents Last question error
    url = myQuestions[i+1].img // Pre-Load Next Image
  }
  preloadImage(url) // Pre-Load Next Image
  setImage.src = myQuestions[i].img;
  setQuestion.innerText = myQuestions[i].question;
  currentLevel = i
  naf = false;
  if(clickedNext < i) {
    clickedNext++;
    shuffleOptions()
    // next.classList.add("hide")
  } else {
    option1.innerText = myQuestions[i].options[0]
    option2.innerText = myQuestions[i].options[1]
    option3.innerText = myQuestions[i].options[2]
    option4.innerText = myQuestions[i].options[3]
  };

  // Remove duplicate userAnswers to array
  if(myQuestions[i-1].userAnswer.length > 1) {
      if(fan === true) {
        myQuestions[i-1].userAnswer.shift(walla);
        myQuestions[i-1].compareAnswer.shift(correct); //

        fan = false
      } else {
        myQuestions[i-1].userAnswer.pop(walla);
        myQuestions[i-1].compareAnswer.pop(correct); //

      }
    }
});

// Previous Level
prev.addEventListener("click", function() {
  prevLevel();
  addFocusPrev();
  toggleHide();
  CurLevel()
  fan = false;
  currentLevel = i
  option1.innerText = myQuestions[i].options[0]
  option2.innerText = myQuestions[i].options[1]
  option3.innerText = myQuestions[i].options[2]
  option4.innerText = myQuestions[i].options[3]
  walla = myQuestions[i].userAnswer;
  correct = myQuestions[i].compareAnswer; //
  setImage.src = myQuestions[i].img;
  setQuestion.innerText = myQuestions[i].question;
});


// Go to next object in array
function nextLevel() {
  i++;
  i = i % myQuestions.length;
  return myQuestions[i];
}
// Go to prev object in array
function prevLevel() {
  if (i === 0)  {
    i = myQuestions.length;
  }
  i--
  return myQuestions[i];
}


// Shuffle Options
function shuffleOptions() {
  shuffledOptions = (myQuestions[i].options).sort(() => Math.random() - .5)
    option1.innerText = shuffledOptions[0]
    option2.innerText = shuffledOptions[1]
    option3.innerText = shuffledOptions[2]
    option4.innerText = shuffledOptions[3]
};

// Add focused class to clicked button
function toggleFocus() {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      buttons.forEach(btn => btn.classList.remove("focused"));
      buttons[i].classList.add("focused");
      walla = this // <-- To add userOptions and Focus
      correct = this.innerText // <-- To compare userAnswer to answers
    });
  }
}

// Adds userAnswer when pressing next
function pushNext() {

  myQuestions[i].userAnswer.push(walla);
  myQuestions[i].compareAnswer.push(correct); // 

  if(myQuestions[i+1].userAnswer.length > 1) {
    myQuestions[i+1].userAnswer.pop(walla);
    myQuestions[i+1].compareAnswer.pop(correct); //
  }

  walla = myQuestions[i+1].userAnswer
  correct = myQuestions[i+1].compareAnswer //
}
function pushNextDub() {
  // Remove duplicates on LAST level

  if(myQuestions[i].userAnswer.length > 1) {
    lastLevel.userAnswer = walla

    // lastLevel.userAnswer.pop(walla);
    lastLevel.compareAnswer.shift(correct);
  }
}



  



// Adds userAnswer when pressing prev
function pushPrev() {
  if(fan === true && i+1 < myQuestions.length) {
    myQuestions[i].userAnswer.push(walla);
    myQuestions[i].userAnswer.shift(walla);
    myQuestions[i].compareAnswer.push(correct); //
    myQuestions[i].compareAnswer.shift(correct); //
  }

  if(naf === true) {
    myQuestions[i].userAnswer.push(walla);
    myQuestions[i].compareAnswer.push(correct); //
  }

  walla = myQuestions[i-1].userAnswer
  correct = myQuestions[i-1].compareAnswer //
}

// Check if user clicked a option
function clicker() {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() { 

    next.classList.remove("disabled")
    fan = true;
    naf = true;
    });
  } 
}

// Change focused button
function addFocusNext() {
  if(myQuestions[i].userAnswer.length < 1) {
  next.classList.add("disabled")
  buttons.forEach(btn => btn.classList.remove("focused"))
  } else {
  buttons.forEach(btn => btn.classList.remove("focused"))
  walla[0].classList.add("focused")
  }
  if(myQuestions[i] === lastLevel) {
    buttons.forEach(btn => btn.classList.remove("focused"))
  }
}
// Change focused button
function addFocusPrev() {
  if(myQuestions[i].userAnswer.length < 1) {
    buttons.forEach(btn => btn.classList.remove("focused"))
  } else {
  buttons.forEach(btn => btn.classList.remove("focused"))
  walla[0].classList.add("focused")
  }
}

// Toggle Hide Next And Prev Buttons
function toggleHide() {
let firstQ = myQuestions[0]
let lastQ = myQuestions[myQuestions.length-1]

  if(firstQ === myQuestions[i]) {
    prev.classList.add("hide")
  } else {
    prev.classList.remove("hide")

  }
  if(lastQ === myQuestions[i]) {
    next.classList.add("disabled")
  } else {
    next.classList.remove("disabled")
  }
}

// Add "Go To Results" text
next.addEventListener("click", function() {
  if(currentLevel+1 === myQuestions.length) {

    next.innerText = "Go To Results"
    next.classList.add("nextResults")
  } 
})

// Add "Next" text
prev.addEventListener("click", function() {
  if(currentLevel < myQuestions.length && currentLevel+2 === myQuestions.length) {

    next.innerText = "Next"
    next.classList.remove("nextResults")
  } 
})



// Results Page

function printReview() {

  for(let i = 0; i < myQuestions.length; i++) {
      reviewList.innerHTML += 
        `<div class="reviewBox">
          <h2 class="reviewQuestion"></h2>
          <img class="reviewImg" src="" alt="">
          <div class="answerBox">
          <p class="yourAnsBox ansBox">Your Answer: <span class="yourAns"></span></p>
          <p class="correctAnsBox ansBox correct">Correct Answer: <span class="correctAns"></span></p>
          </div class="answerBox">
        </div>`
  }
}

// Declare Review Vars and ADD them to rebview list
function declareReviewVars() {
  reviewQuestion = document.querySelectorAll(".reviewQuestion")
  reviewImg = document.querySelectorAll(".reviewImg")
  yourAns = document.querySelectorAll(".yourAns")
  correctAns = document.querySelectorAll(".correctAns")
  yourAnsBox = document.querySelectorAll(".yourAnsBox")
  for(let i = 0; i < myQuestions.length; i++) { 
    reviewQuestion[i].innerText = myQuestions[i].question
    reviewImg[i].src = myQuestions[i].img
    yourAns[i].innerText = myQuestions[i].compareAnswer
    correctAns[i].innerText = myQuestions[i].answer
  }
}

function compareScore() {
  for(let i = 0; i < myQuestions.length; i++) {
    // Compare how many userAnswers and answers are equal to each other
    if(JSON.stringify(myQuestions[i].answer) === JSON.stringify(myQuestions[i].compareAnswer)) {
      score++;

      yourAnsBox[i].classList.add("correct")
    } else {
      yourAnsBox[i].classList.add("wrong")

    }
  }
  endScore()
  document.querySelector("html").style.overflow = "hidden"
  setTimeout(function() {
    loader.classList.add("hide")
    document.querySelector("html").style.overflow = "visible"
  }, 3000);
}


function displayIQ() {
  if(score === 0) {
    finalScore.innerText = "38"
    iqImage.src = "/imgs/gifs/tense1983.gif"
    resultDescription.innerText = "You successfully ranked the lowest score in this game ever captured, even a Dota 2 player can score better than you. If you're currently playing cs:go it's suggested you uninstall it from your computer ASAP before you ruin more players lives in matchmaking."
  }
  if(score === 1) {
    finalScore.innerText = "42"
    iqImage.src = "/imgs/gifs/tense1983.gif"
    resultDescription.innerText = "There's a higher chance getting a knife in your first case than scoring this bad on a test. If you're currently playing cs:go it's suggested you uninstall it from your computer ASAP before you ruin more players lives in matchmaking."
  }
  if(score === 2) {
    finalScore.innerText = "46"
    iqImage.src = "/imgs/gifs/tense1983.gif"
    resultDescription.innerText = "There's a higher chance getting a knife in your first case than scoring this bad on a test. If you're currently playing cs:go it's suggested you uninstall it from your computer ASAP before you ruin more players lives in matchmaking."
  }
  if(score === 3) {
    finalScore.innerText = "50"
    iqImage.src = "/imgs/gifs/tense1983.gif"
    resultDescription.innerText = "You got 10% of your answers correct, that's 1 in 10. That's also 0.1. See where this is going? It's like opening 10 cases and everything you got was blue's except for 1, that one was gray."
  }
  if(score === 4) {
    finalScore.innerText = "54"
    iqImage.src = "/imgs/gifs/tense1983.gif"
    resultDescription.innerText = "You're in the top 0.01% of worst players of all time playing this test, even a Dota 2 player can score better than you. If you're currently playing cs:go it's suggested you uninstall it from your computer ASAP before you ruin more players lives in matchmaking."
  }
  if(score === 5) {
    finalScore.innerText = "58"
    iqImage.src = "/imgs/gifs/tense1983.gif"
    resultDescription.innerText = "You're in the top 0.01% of worst players of all time playing this test, even a Dota 2 player can score better than you. If you're currently playing cs:go it's suggested you uninstall it from your computer ASAP before you ruin more players lives in matchmaking."
  }
  if(score === 6) {
    finalScore.innerText = "62"
    iqImage.src = "/imgs/gifs/tense1983.gif"
    resultDescription.innerText = "You're in the top 0.01% of worst players of all time playing this test, even a Dota 2 player can score better than you. If you're currently playing cs:go it's suggested you uninstall it from your computer ASAP before you ruin more players lives in matchmaking."
  }
  if(score === 7) {
    finalScore.innerText = "66"
    iqImage.src = "/imgs/gifs/tense1983.gif"
    resultDescription.innerText = "You're in the top 1% of worst players of all time playing this test, even a Dota 2 player can score better than you. If you're currently playing cs:go it's suggested you uninstall it from your computer ASAP before you ruin more players lives in matchmaking."
  }
  if(score === 8) {
    finalScore.innerText = "70"
    iqImage.src = "/imgs/gifs/tense1983.gif"
    resultDescription.innerText = "You're in the top 1% of worst players of all time playing this test, even a Dota 2 player can score better than you. If you're currently playing cs:go it's suggested you uninstall it from your computer ASAP before you ruin more players lives in matchmaking."
  }
  if(score === 9) {
    finalScore.innerText = "74"
    iqImage.src = "/imgs/gifs/tense1983.gif"
    resultDescription.innerText = "You're in the top 1% of worst players of all time playing this test, even a Dota 2 player can score better than you. If you're currently playing cs:go it's suggested you uninstall it from your computer ASAP before you ruin more players lives in matchmaking."
  }
  if(score === 10) {
    finalScore.innerText = "78"
    iqImage.src = "/imgs/gifs/tense1983.gif"
    resultDescription.innerText = "You have severe lacking knowledge of cs:go. It's suggested you go play some more matchmaking and come back later when you've accidently flashed yourself and while being white killing your teammate and gotten a 30 minute competetive cooldown."
  }
  if(score === 11) {
    finalScore.innerText = "82"
    iqImage.src = "/imgs/gifs/tense1983.gif"
    resultDescription.innerText = "You have severe lacking knowledge of cs:go. It's suggested you go play some more matchmaking and come back later when you've accidently flashed yourself and while being white killing your teammate and gotten a 30 minute competetive cooldown."
  }
  if(score === 12) {
    finalScore.innerText = "86"
    iqImage.src = "/imgs/gifs/karriganno.gif"
    resultDescription.innerText = "You have severe lacking knowledge of cs:go. It's suggested you go play some more matchmaking and come back later when you've accidently flashed yourself and while being white killing your teammate and gotten a 30 minute competetive cooldown."
  }
  if(score === 13) {
    finalScore.innerText = "90"
    iqImage.src = "/imgs/gifs/karriganno.gif"
    resultDescription.innerText = "You have severe lacking knowledge of cs:go. It's suggested you go play some more matchmaking and come back later when you've accidently flashed yourself and while being white killing your teammate and gotten a 30 minute competetive cooldown."
  }
  if(score === 14) {
    finalScore.innerText = "94"
    iqImage.src = "/imgs/gifs/krimz.gif"
    resultDescription.innerHTML = `You are below average, it's suggested you go play some deathmatch so you don't ruin more matchmaking games for your teammates. you always bait your teammates to get a good K/D ratio.`
  }
  if(score === 15) {
    finalScore.innerText = "98"
    iqImage.src = "/imgs/gifs/krimz.gif"
    resultDescription.innerHTML = `You are below average, it's suggested you go play some deathmatch so you don't ruin more matchmaking games for your teammates. you always bait your teammates to get a good K/D ratio.`
  }
  if(score === 16) {
    finalScore.innerText = "102"
    iqImage.src = "/imgs/gifs/olofmesiter.gif"
    resultDescription.innerHTML = `You are pretty average, and average is bad, you're the type of player who always asks for awp, and when you finally get it, you're the first guy in the team to die. you always bait your teammates to get a good K/D ratio. For your effort you will be invited to the <a class="href" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 17) {
    finalScore.innerText = "109"
    iqImage.src = "/imgs/gifs/olofmesiter.gif"
    resultDescription.innerHTML = `You are slightly above average, you're the type of player who always asks for awp, and when you finally get it, you're the first guy in the team to die. you always bait your teammates to get a good K/D ratio. For your effort you will be invited to the <a class="href" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 18) {
    finalScore.innerText = "116"
    iqImage.src = "/imgs/gifs/gla1ve.gif"
    resultDescription.innerHTML = `You are the average LEM player who thinks he's much better than his friends, you always bait your teammates to get a good K/D ratio. For your effort you will be invited to the <a class="href" target="_blank" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 19) {
    finalScore.innerText = "123"
    iqImage.src = "/imgs/gifs/gla1ve.gif"
    resultDescription.innerHTML = `You are the average LEM player who thinks he's much better than his friends, you always bait your teammates to get a good K/D ratio. For your effort you will be invited to the <a class="href" target="_blank" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 20) {
    finalScore.innerText = "130"
    iqImage.src = "/imgs/gifs/gla1ve.gif"
    resultDescription.innerHTML = `You are the average LEM player who thinks he's much better than his friends, you always bait your teammates to get a good K/D ratio. For your effort you will be invited to the <a class="href" target="_blank" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 21) {
    finalScore.innerText = "137"
    iqImage.src = "/imgs/gifs/dosia.gif"
    resultDescription.innerHTML = `You are way above average and a very smart cs:go player, good job! You're the type of player that always blames your chokes on 64 tick servers. For your effort you will be invited to the <a class="href" target="_blank" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 22) {
    finalScore.innerText = "144"
    iqImage.src = "/imgs/gifs/dosia.gif"
    resultDescription.innerHTML = `You are way above average and a very smart cs:go player, good job! You're the type of player that always blames your chokes on 64 tick servers. For your effort you will be invited to the <a class="href" target="_blank" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 23) {
    finalScore.innerText = "151"
    iqImage.src = "/imgs/gifs/dosia.gif"
    resultDescription.innerHTML = `You are way above average and a very smart cs:go player, good job! You're the type of player that always blames your chokes on 64 tick servers. For your effort you will be invited to the <a class="href" target="_blank" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 24) {
    finalScore.innerText = "158"
    iqImage.src = "/imgs/gifs/snax.gif"
    resultDescription.innerHTML = `You are in the top 10%, congratulations! not many people scores this high. You're the type of players who always blames your team for losing the game. For your effort you will be invited to the <a class="href" target="_blank" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 25) {
    finalScore.innerText = "165"
    iqImage.src = "/imgs/gifs/snax.gif"
    resultDescription.innerHTML = `You are in the top 10%, congratulations! not many people scores this high. You're the type of players who always blames your team for losing the game. For your effort you will be invited to the <a class="href" target="_blank" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 26) {
    finalScore.innerText = "172"
    iqImage.src = "/imgs/gifs/snax.gif"
    resultDescription.innerHTML = `You are in the top 10%, congratulations! not many people scores this high. You're the type of players who always blames your team for losing the game. For your effort you will be invited to the <a class="href" target="_blank" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 27) {
    finalScore.innerText = "179"
    iqImage.src = "/imgs/gifs/s1mpleez.gif"
    resultDescription.innerHTML = `You are one of few people who actually scores this high on the test, congratulations!. You have more than 5000 hours in the game and you're still only supreme. Since you're soo close to the 200IQ mark you will be invited to the <a class="href" target="_blank" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 28) {
    finalScore.innerText = "186"
    iqImage.src = "/imgs/gifs/s1mpleez.gif"
    resultDescription.innerHTML = `You are one of few people who actually scores this high on the test, congratulations!. You have more than 5000 hours in the game and you're still only supreme. Since you're soo close to the 200IQ mark you will be invited to the <a class="href" target="_blank" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 29) {
    finalScore.innerText = "193"
    iqImage.src = "/imgs/gifs/s1mpleez.gif"
    resultDescription.innerHTML = `You are one of few people who actually scores this high on the test, congratulations!. You have more than 5000 hours in the game and you're still only supreme. Since you're soo close to the 200IQ mark you will be invited to the <a class="href" target="_blank" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
  if(score === 30) {
    finalScore.innerText = "200"
    iqImage.src = "/imgs/gifs/boombl4.gif"
    resultDescription.innerHTML = `You did it, you got 100% of your answers correct! You probably cheated, but if you didn't You are in the top 0.01% of most intelligent cs:go players and can now proudly call yourself a REAL csgo 200iq player, as an honor for have gotten all answers right, you will be invited to the <a class="href" target="_blank" href="https://steamcommunity.com/groups/200peek">200 IQ PEEK</a> steam group`
  }
}

playAgain.addEventListener("click", function() {
  location.reload();
})

// Current Level

function CurLevel() {
  curLevel.innerHTML = myQuestions[i].curLevel
}

function endScore() {
  howManyRight.innerHTML = score + " / 30 Right"
}



