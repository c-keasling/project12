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

("use strict");

$(document).ready(function () {
  // Variables and constants
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
  const buttonSelectors = [".one-box", ".two-box", ".three-box", ".four-box"];
  let answerkey = Math.floor(Math.random() * 4) + 1;
  let playersChoice,
    Qnum = 0,
    playerScore;
  let asking = questions[Qnum].q;
  let answer = questions[Qnum].a;

  const generateAnswers = function () {
    asking = questions[Qnum].q;
    answer = questions[Qnum].a;

    // Put random teams on all the buttons
    for (let i = 0; i <= 3; i++) {
      $(buttonSelectors[i]).text(fillerTeams[Math.floor(Math.random() * 20)]);
    }

    // Put correct answer on one of the buttons at random
    answerkey = Math.floor(Math.random() * 4);
    $(buttonSelectors[answerkey]).text(answer);

    // Change question
    $(".question").text(asking);
    console.log(answer);
  };

  const initgame = function () {
    playerScore = 0;
    Qnum = 0;
    $(".submit-btn").text("Submit");
    $(".score").text(playerScore);
    $(".question").text(asking);
    generateAnswers();
    $(".start-btn").html("Restart");
    $(".submit-btn").prop("disabled", false);
    $("body").removeClass("winner");
  };

  const checkAnswer = function () {
    if (answerkey === playersChoice) {
      $(buttonSelectors[answerkey]).addClass("correct");
      playerScore++;
      $(".score").text(playerScore);
    } else {
      $(buttonSelectors[answerkey]).addClass("wrong");
    }
  };

  const removeHighlight = function () {
    $(".answer").removeClass("highlighted wrong correct");
  };

  // Event handlers
  $(".answer").click(function () {
    removeHighlight();
    $(this).addClass("highlighted");
    playersChoice = $(".answer").index(this);
    console.log("Player's choice is: ", playersChoice);
  });

  $(".submit-btn").click(function () {
    checkAnswer();
    $(this).prop("disabled", true);

    setTimeout(function () {
      Qnum++;
      if (Qnum < 7) {
        asking = questions[Qnum].q;
        answer = questions[Qnum].a;
        generateAnswers();
        removeHighlight();
        console.log(`Q= ${Qnum}`);
        $(".submit-btn").prop("disabled", false);
      } else {
        if (playerScore === 7) {
          $(".question").text(" 🎆 Touchdown! Great Score! 🎉");
          $("body").addClass("winner");
        } else {
          $(".question").text("Game over. Good job!");
        }
        removeHighlight();
        if (Qnum === 7) {
          for (let i = 0; i <= 3; i++) {
            $(buttonSelectors[i]).text("");
            $(".submit-btn").text("");
          }
        }
      }
    }, 2000);
  });

  $(".start-btn").click(initgame);
});
