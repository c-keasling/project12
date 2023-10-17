"use strict";

const questions = [
  {
    q: "Which team was the first to win the Super Bowl?",
    a: "Green Bay Packers",
  },
  { q: "Which team won the most Super Bowls?", a: "Pittsburgh Steelers" },
  { q: "What team won the most recent Super Bowl?", a: "Kansas City Cheifs" },
  { q: "What team lost the most Super Bowls?", a: "Buffalo Bills" },
  { q: "What team never appeared in a Super Bowl?", a: "Cleveland Browns" },
  {
    q: "Which team scored the most points in a Super Bowl?",
    a: "San Francisco 49ers",
  },
  {
    q: "Which team scored the least points in a Super Bowl?",
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
const startBtn = document.querySelector(".start-btn");
const submitBTn = document.querySelector(".submit-btn");
const scoreBox = document.querySelector(".score");
const questionElmt = document.querySelector(".question");
const answerBTN1 = document.querySelector(".one-box");
const answerBTN2 = document.querySelector(".two-box");
const answerBTN3 = document.querySelector(".three-box");
const answerBTN4 = document.querySelector(".four-box");
let Q = 0;
let asking = questions[Q].q;
let answer = questions[Q].a;
let answerkey = Math.floor(Math.random() * 4) + 1;
const buttonSelectors = [".one-box", ".two-box", ".three-box", ".four-box"];
let playersChoice, buttons;

const generateAnswers = function () {
  for (let i = 0; i <= 3; i++) {
    document.querySelector(buttonSelectors[i]).textContent =
      fillerTeams[Math.floor(Math.random() * 20)];
  }
  answerkey = Math.floor(Math.random() * 4);
  document.querySelector(buttonSelectors[answerkey]).textContent = answer;
  console.log(answer);
};

const initgame = function () {
  scoreBox.textContent = "0";
  questionElmt.textContent = asking;
};

const checkAnswer = function () {
  if ((answerkey = playerChoice)) {
    document.querySelector(buttonSelectors[answerkey]).classList.add("correct");
  } else {
    document.querySelector(buttonSelectors[answerkey]).classList.add("wrong");
  }
};
function removeHighlight() {
  if (buttons) {
    buttons.forEach((button) => {
      button.classList.remove("highlighted");
    });
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  buttons = document.querySelectorAll(".answer");
  function handleButtonClick(event) {
    removeHighlight();
    event.target.classList.add("highlighted");
    playerChoice = [...buttons].indexOf(event.target);
    console.log("Player's choice is: ", playerChoice);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
});
document.generateAnswers();
initgame();
const isPlaying = true;
