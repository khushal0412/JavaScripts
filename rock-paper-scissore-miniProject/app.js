let userScore = 0;
let compScore = 0;

let choises = document.querySelectorAll(".choise");
let msg = document.querySelector("#msg")
const scoreUser = document.querySelector("#user-score")
const scorecomp = document.querySelector("#comp-score")

choises.forEach((choise) => {
//   console.log(choise);
  choise.addEventListener("click", () => {
    const userChoise = choise.getAttribute("id");
    playGame(userChoise);
  });
});

const getCompChoise = () => {
  const options = ["rock", "paper", "scissore"];
  let randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};
const drawGame = () => {
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#01204E"
  console.log("match was Draw");
};

const playGame = (userChoise) => {
    // console.log("user choise=", userChoise);
  const compChoise = getCompChoise();
//   console.log("comp choise =", compChoise);

  if (userChoise === compChoise) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoise === "rock") {
      //compChoise paper, scissore
      userWin = compChoise === "paper" ? false : true;
    } else if (userChoise === "paper") {
      //compChoise rock scissore
      userWin = compChoise === "scissore" ? false : true;
    } else {
      //paper rock
      userWin = compChoise === "rock" ? false : true;
    }
    showWiner(userWin, userChoise, compChoise);
  }
};

const showWiner = (userWin, userChoise, compChoise) => {
  if (userWin) {
    userScore++;
    scoreUser.innerText = userScore
    msg.innerText = `you win! your ${userChoise} beats ${compChoise}`;
    msg.style.backgroundColor = "green";
    console.log("you Win!");
} else {
    compScore++;
    scorecomp.innerText = compScore;
    msg.innerText = `you lose! ${compChoise} beats your ${userChoise}`;
    msg.style.backgroundColor = "red";

    console.log("you lose");
  }
};
