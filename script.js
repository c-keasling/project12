"use strict";

const questions = [
  {
    q: "Which team was the first to win the Super Bowl? 🏈",
    a: "Green Bay Packers",
  },
  { q: "Which team won the most Super Bowls? 🏆", a: "Pittsburgh Steelers" },
  {
    q: "What team won the most recent Super Bowl?🙌🙌",
    a: "Kansas City Cheifs",
  },
  { q: "What team lost the most Super Bowls?🤬", a: "Buffalo Bills" },
  { q: "What team never appeared in a Super Bowl?👻", a: "Cleveland Browns" },
  {
    q: "Which team scored the most points in a Super Bowl?📈",
    a: "San Francisco 49ers",
  },
  {
    q: "Which team scored the least points in a Super Bowl?😶",
    a: "Miami Dolphins",
  },
];

const fillerTeams = [
  "L.A. Rams",
  "New York Jets",
  "Arizona Cardinals",
  "Chicago Bears",
  "Minnisota Vikings",
  "Dallas Cowboys",
  "Philadelphia Eagles",
  "Tennese Titans",
  "San Diego Chargers",
  "New York Giants",
  "Atlanta Falcons",
  "Carolina Panthers",
  "New Orleans Saints",
  "New York Giants",
  "Seattle Seahawks",
  "Tampa Bay Buccaneers",
  "Baltimore Ravens",
  "Cincinnati Bengals",
  "Denver Broncos",
  "Raiders",
];

//Label all the buttons
const answersContainer = document.querySelector(".answers-choice");
const submitBtn = document.querySelector(".submit-btn");
const startBtn = document.querySelector(".start-btn");
const submitBTn = document.querySelector(".submit-btn");
const scoreBox = document.querySelector(".score");
const questionElmt = document.querySelector(".question");
const answerBTN1 = document.querySelector(".one-box");
const answerBTN2 = document.querySelector(".two-box");
const answerBTN3 = document.querySelector(".three-box");
const answerBTN4 = document.querySelector(".four-box");
let answerkey = Math.floor(Math.random() * 4) + 1;
const buttonSelectors = [".one-box", ".two-box", ".three-box", ".four-box"];
let playersChoice,
  buttons,
  Qnum = 0,
  playerScore;
let asking = questions[Qnum].q;
let answer = questions[Qnum].a;

const generateAnswers = function () {
  asking = questions[Qnum].q;
  answer = questions[Qnum].a;
  //put random teams on all the buttons
  for (let i = 0; i <= 3; i++) {
    document.querySelector(buttonSelectors[i]).textContent =
      fillerTeams[Math.floor(Math.random() * 20)];
  }
  //put correct answer on one of the buttons at random
  answerkey = Math.floor(Math.random() * 4);
  document.querySelector(buttonSelectors[answerkey]).textContent = answer;
  //change question
  questionElmt.textContent = asking;
  console.log(answer);
};
// intitiate game and reset to default
const initgame = function () {
  playerScore = 0;
  Qnum = 0;
  submitBtn.textContent = "Submit";
  scoreBox.textContent = playerScore;
  questionElmt.textContent = asking;
  generateAnswers();
  startBtn.innerHTML = "Restart";
  submitBTn.disabled = false;
  document.body.classList.remove("winner");
};
// check if answer is correct and update score
const checkAnswer = function () {
  if (answerkey === playersChoice) {
    document.querySelector(buttonSelectors[answerkey]).classList.add("correct");
    playerScore++;
    scoreBox.textContent = playerScore;
  } else {
    document.querySelector(buttonSelectors[answerkey]).classList.add("wrong");
  }
};
// remove all CSS after selecting buttons and submitting
function removeHighlight() {
  if (buttons) {
    buttons.forEach((button) => {
      button.classList.remove("highlighted");
      button.classList.remove("wrong");
      button.classList.remove("correct");
    });
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  buttons = document.querySelectorAll(".answer");
  function handleButtonClick(event) {
    removeHighlight();
    event.target.classList.add("highlighted");
    playersChoice = [...buttons].indexOf(event.target);
    console.log("Player's choice is: ", playersChoice);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
});

submitBtn.addEventListener("click", function () {
  checkAnswer();
  submitBtn.disabled = true;

  // Set a delay for the next part of the operation.
  setTimeout(function () {
    // Increase the question number and prepare for the next round if there are questions left.
    Qnum++;
    if (Qnum < 7) {
      asking = questions[Qnum].q;
      answer = questions[Qnum].a;
      generateAnswers();
      removeHighlight();
      console.log(`Q= ${Qnum}`);
      submitBTn.disabled = false;
    } else {
      if (playerScore === 7) {
        questionElmt.textContent = " 🎆 Touchdown! Great Score! 🎉";
        document.body.classList.add("winner");
      } else {
        questionElmt.textContent = "Game over. Good job!";
      }
      removeHighlight();
      if (Qnum === 7) {
        for (let i = 0; i <= 3; i++) {
          document.querySelector(buttonSelectors[i]).textContent = "";
          submitBtn.textContent = "";
        }
      }
    }
  }, 2000);
});

startBtn.addEventListener("click", initgame);
const isPlaying = true;
