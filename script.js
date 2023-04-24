let txtTurn = document.getElementById("turn");
let allBox = document.querySelectorAll(".box");
// let allLevel = document.querySelectorAll(" ul li");// for level
let btnAgain = document.getElementById("again");
let h1 = document.querySelector("div h1");
// let chooseSpan = document.querySelectorAll("h3 span");
//  onClick span
// chooseSpan.forEach((ele) => {
//   ele.onclick = function () {
//     chooseSpan.forEach((ele) => {
//       ele.classList.remove("active");
//     });
//     ele.classList.add("active");
//     sessionStorage.setItem("turn", ele.textContent);
//   };
// });

let turnChar = sessionStorage.getItem("turn");
turnChar = "x";
// function li for level
// function activeClass() {
//   allLevel.forEach((ele) => {
//     ele.classList.remove("active");
//   });
// }
// event for btn again
function again() {
  allBox.forEach((ele) => {
    ele.innerHTML = "";
    ele.classList.remove("winner");
  });
  document.querySelector(".layer").classList.remove("layer");
  h1.textContent = `Hi! let's fan with my`;
  h1.style.color = " var(--scColor)";
}

btnAgain.addEventListener("click", function () {
  again();
});
//func for get text for check winner
function getTextBox() {
  let arrTest = [];
  allBox.forEach((ele) => {
    arrTest.push(ele.textContent);
  });
  return arrTest;
}

//1vs1 mode
function mode1vs1() {
  allBox.forEach((ele) => {
    ele.addEventListener("click", function (e) {
      if (e.target.innerHTML === "") {
        // console.log(this);
        if (turnChar === "x") {
          e.target.innerHTML = `<h4>${turnChar}</h4>`;
          turnChar = "o";
          txtTurn.textContent = `turn player one: ${turnChar}`;
        } else if (turnChar === "o") {
          e.target.innerHTML = `<h4>${turnChar}</h4>`;
          turnChar = "x";
          txtTurn.textContent = `turn player one: ${turnChar}`;
        }
        // console.log(e.target);
        checkWinner(getTextBox());
      }
    });
  });
}
mode1vs1();
//to check level
// allLevel.forEach((ele) => {
//   ele.addEventListener("click", function () {
//     again();
//     activeClass();
//     ele.classList.add("active");
//     //  all level case
//     if (ele.className === "active") {
//       txtTurn.textContent = ele.textContent;
//       if (ele.textContent === "1vs1") {
//         mode1vs1();
//       } else if (ele.textContent === "easy") {
//         console.log(ele.textContent);
//       } else if (ele.textContent === "middle level") {
//         console.log(ele.textContent);
//       } else if (ele.textContent === "advanced") {
//         console.log(ele.textContent);
//       }
//     }
//   });
// });
function winner(box1, box2, box3) {
  allBox[box1].classList.add("winner");
  allBox[box2].classList.add("winner");
  allBox[box3].classList.add("winner");
  h1.textContent = `player ${turnChar == "x" ? "o" : "x"} winner🥇`;
  h1.style.color = "#fff";
  txtTurn.textContent = "chosse again! to play again";
  let layer = document.createElement("div");
  layer.classList.add("layer");
  document.querySelector(".game-container").appendChild(layer);
}
function checkWinner(allBoxs) {
  if (
    allBoxs[0] == allBoxs[1] &&
    allBoxs[0] == allBoxs[2] &&
    allBoxs[0] != ""
  ) {
    winner(0, 1, 2);
    // alert("done");
  } else if (
    allBoxs[3] == allBoxs[4] &&
    allBoxs[3] == allBoxs[5] &&
    allBoxs[3] != ""
  ) {
    winner(3, 4, 5);
  } else if (
    allBoxs[6] == allBoxs[7] &&
    allBoxs[6] == allBoxs[8] &&
    allBoxs[6] != ""
  ) {
    winner(6, 7, 8);
  } else if (
    allBoxs[0] == allBoxs[3] &&
    allBoxs[0] == allBoxs[6] &&
    allBoxs[0] != ""
  ) {
    winner(0, 3, 6);
  } else if (
    allBoxs[1] == allBoxs[4] &&
    allBoxs[1] == allBoxs[7] &&
    allBoxs[1] != ""
  ) {
    winner(4, 1, 7);
  } else if (
    allBoxs[2] == allBoxs[5] &&
    allBoxs[2] == allBoxs[8] &&
    allBoxs[2] != ""
  ) {
    winner(8, 5, 2);
  } else if (
    allBoxs[4] == allBoxs[0] &&
    allBoxs[4] == allBoxs[8] &&
    allBoxs[4] != ""
  ) {
    winner(4, 0, 8);
  } else if (
    allBoxs[4] == allBoxs[2] &&
    allBoxs[4] == allBoxs[6] &&
    allBoxs[4] != ""
  ) {
    winner(4, 6, 2);
  } else if (!allBoxs.includes("")) {
    h1.textContent = `drow 🙈`;
    h1.style.color = "#fff";
    txtTurn.textContent = "chosse again! to play again";
    let layer = document.createElement("div");
    layer.classList.add("layer");
    document.querySelector(".game-container").appendChild(layer);
  }
 // console.log(allBoxs);
 //console.log(!allBoxs.includes(""));
}
