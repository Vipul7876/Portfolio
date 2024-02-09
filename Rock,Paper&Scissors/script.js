let userscore = 0;
let compscore = 0;
const msg = document.querySelector("#msg");
const uscore = document.querySelector("#userscore");
const cscore = document.querySelector("#compscore");
const choices = document.querySelectorAll(".choice");

const GencompChoice = () => {
  const options = ["first", "second", "third"];
  const indx = Math.floor(Math.random() * 3);
  return options[indx]

}

const showwinner = (userwin) => {
  if (userwin) {
    userscore++;
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "#008000"
    uscore.innerText = userscore;
  }
  else {
    compscore++;
    msg.innerText = "You Lose!"
    msg.style.backgroundColor = "#ff0000"
    cscore.innerText = compscore;
  }
}

const draw = () => {  
  msg.innerText = "It's a draw! Play again."
  msg.style.backgroundColor = "black"
}

const playgame = (userchoice) => {
  const compchoice = GencompChoice();
  if (userchoice === compchoice) {
    draw();
  }
  else {
    let userwin = true;
    if (userchoice === "first") {
      // second & third
      userwin = compchoice === "second" ? false : true;
    }
    else if (userchoice === "second") {
      // first & third
      userwin = compchoice === "third" ? false : true;
    }
    else {
      // first & second
      userwin = compchoice === "first" ? false : true;
    }
    showwinner(userwin);
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  })
});