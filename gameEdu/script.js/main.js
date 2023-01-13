const handleDropdownClicked = (event) => {
   event.stopPropagation();
   const dropdown = document.getElementById("dropdown");
   toggleDropdown(!dropdown?.classList?.contains("open"));
};

const handleSubMenuClicked = (menu) => {
   if (menu) {
      const subMenus = document.getElementsByClassName("sub-menu");
      for (let s of subMenus) {
         s.classList.remove("open");
      }
      const subMenu = document.getElementById(menu);
      subMenu.classList.add("open");
   }

   const mainMenu = document.getElementById("menu-inner");
   mainMenu.classList.toggle("open");
};

const toggleDropdown = () => {
   const dropdown = document.getElementById("dropdown");
   dropdown.classList.toggle("open");
};

/**const startinghex = () => {
   const firsthex = document.getElementById("firsthex")
   firsthex.classList.toggle("open")
}
startinghex.onclick = () => {
   info__box.classList.add("activeinfo")
}**/
let start_btn = document.getElementById("firsthex")
const info__box = document.querySelector(".info__box")
const exit_btn = document.querySelector(".buttons .quit")
const continue_btn = document.querySelector(".buttons .restart")
const quiz_box = document.querySelector(".quiz__box")
const next_btn = document.querySelector(".next-btn")
const option_list = document.querySelector(".option__list")
const time_count = document.querySelector(".timer__seconds")
const result_box = document.querySelector(".result_box")
let second_btn = document.getElementById("secondhex")
let thirty_btn = document.getElementById("thirtyhex")
let fortyhex_btn = document.getElementById("fortyhex")
let hex5 = document.getElementById("hex5")
let hex6 = document.getElementById("hex6")
let hex7 = document.getElementById("hex7")
let hex8 = document.getElementById("hex8")
let hex9 = document.getElementById("hex9")
let hex10 = document.getElementById("hex10")
let hex11 = document.getElementById("hex11")
let hex12 = document.getElementById("hex12")
let hex13 = document.getElementById("hex13")
let hex14 = document.getElementById("hex14")
let hex15 = document.getElementById("hex15")
let hex16 = document.getElementById("hex16")
let hex17 = document.getElementById("hex17")
let hex18 = document.getElementById("hex18")
let hex19 = document.getElementById("hex19")
let hex20 = document.getElementById("hex20")
let hex21 = document.getElementById("hex21")
let hex22 = document.getElementById("hex22")
let hex23 = document.getElementById("hex23")
let hex24 = document.getElementById("hex24")
let jopa = false

info__box.classList.toggle("activeinfo");

exit_btn.onclick = () => {
   info__box.classList.remove("activeinfo");
}

start_btn.addEventListener("click", function (evt) {
   evt.preventDefault()
   nomer = 1;
}
)
exit_btn.addEventListener("click", function (evt) {
   evt.preventDefault()
   info__box.classList.remove("activeinfo");
}
)
start_btn.addEventListener("click", function (evt) {
   evt.preventDefault()
   info__box.classList.remove("activeinfo");
   quiz_box.classList.toggle("activebox");
   que_count++;
   showQuestions(que_count);
   queCounter(que_numb);
   startTimer(30);
}
)
continue_btn.addEventListener("click", function (evt) {
   info__box.classList.remove("activeinfo");
})

let que_counter = 0;
let userScore = 0;
let que_count = 0;
let que_numb = 0;
let counter;
let timeValue = 30;
let nominal = 10;
let nominalsec = 20;
let nominalthi = 30;
let ticIcon = '<div class="icon tick"><i class="fas fa-check"><img src="../img/галка.png" alt=""></i></div>'
let crossIcon = '<div class="icon cross"><i class="fas fa-check"><img src="../img/крест.png" width="32px" alt=""></i></div>'
let score = 0;
let nomer = 1;

function showQuestions(index) {
   const que_text = document.querySelector(".que__text")
   let que_tag = '<span>' + questions[index].question + '</span>';
   let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
      + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
      + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
      + '<div class="option">' + questions[index].options[3] + '<span></span></div>'
   que_text.innerHTML = que_tag;
   option_list.innerHTML = option_tag;
   const option = option_list.querySelectorAll(".option");
   que_numb++;
   for (let i = 0; i < option.length; i++) {
      option[i].setAttribute("onclick", "optionSelected(this)")
   }
}

function queCounter(index) {
   const bottom_ques_counter = quiz_box.querySelector(".total__que")
   let totalQuesCountTag = '<span><p>' + index + '</p>из<p>' + questions.length + '</p>Вопросов</span>'
   bottom_ques_counter.innerHTML = totalQuesCountTag;
}

function optionSelected(answer) {
   clearInterval(counter);
   jopa = false;
   let userAns = answer.innerText;
   let correctAns = questions[que_count].answer;
   let allOptions = option_list.children.length;
   if (userAns == correctAns) {
      answer.classList.add("correct");
      userScore++;
      score += 10;
      answer.insertAdjacentHTML("beforeend", ticIcon)
      jopa = true
   } else {
      answer.classList.add("incorrect");
      answer.insertAdjacentHTML("beforeend", crossIcon)
      for (let i = 0; i < allOptions; i++) {
         if (option_list.children[i].textContent == correctAns) {
            option_list.children[i].setAttribute("class", "option correct")
            option_list.children[i].insertAdjacentHTML("beforeend", ticIcon)
         }
      }
   }
   for (let i = 0; i < allOptions; i++) {
      option_list.children[i].classList.add("disabled")
   }
   next_btn.style.display = "block"
}

function showResultBox() {
   info__box.classList.remove("activeinfo");
   quiz_box.classList.remove("activebox");
   let scoreText = document.querySelector(".result__text")
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      start_btn.classList.add("activehex")
   } else {
      start_btn.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}
function startTimer(time) {
   counter = setInterval(timer, 1000)
   function timer() {
      time_count.textContent = time;
      time--;
      if (time < 9) {
         let addZero = time_count.textContent
         time_count.textContent = "0" + addZero
      }
      if (time < 0) {
         clearInterval(counter);
         time_count.textContent = "00"
      }
   }
}
function showResultBoxSecond() {
   info__box.classList.remove("activeinfo");
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      second_btn.classList.add("activehex")
   } else {
      second_btn.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

second_btn.addEventListener("click", function (evt) {
   nomer = 2
   evt.preventDefault()
   quiz_box.classList.toggle("activebox");
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
}
)

function showResultBoxThirty() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   score = userScore * 10;
   if (userScore >= 2) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      thirty_btn.classList.add("activehex")
   } else {
      thirty_btn.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

thirty_btn.addEventListener("click", function (evt) {
   nomer = 3
   evt.preventDefault()
   quiz_box.classList.toggle("activebox");
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
}
)
fortyhex_btn.addEventListener("click", function (evt) {
   nomer = 4
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxForty() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   if (jopa == true) {
      userScore = userScore + 1;
   } else {
      userScore = userScore;
   }
   score = userScore * 10;
   if (userScore >= 0) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      fortyhex_btn.classList.add("activehex")
   } else {
      fortyhex_btn.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex5.addEventListener("click", function (evt) {
   nomer = 5
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex5() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   if (jopa == true) {
      userScore = userScore + 1;
   } else {
      userScore = userScore;
   }
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex5.classList.add("activehex")
   } else {
      hex5.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex6.addEventListener("click", function (evt) {
   nomer = 6
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex6() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   if (jopa == true) {
      userScore = userScore + 1;
   } else {
      userScore = userScore;
   }
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex6.classList.add("activehex")
   } else {
      hex6.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex7.addEventListener("click", function (evt) {
   nomer = 7
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex7() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   userScore = userScore;
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex7.classList.add("activehex")
   } else {
      hex7.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex8.addEventListener("click", function (evt) {
   nomer = 8
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex8() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   userScore = userScore;
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex8.classList.add("activehex")
   } else {
      hex8.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex9.addEventListener("click", function (evt) {
   nomer = 9
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex9() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   if (jopa == true) {
      userScore = userScore + 2;
   } else {
      userScore = userScore;
   }
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex9.classList.add("activehex")
   } else {
      hex9.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex10.addEventListener("click", function (evt) {
   nomer = 10
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex10() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   if (jopa == true) {
      userScore = userScore + 2;
   } else {
      userScore = userScore;
   }
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex10.classList.add("activehex")
   } else {
      hex10.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex11.addEventListener("click", function (evt) {
   nomer = 11
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex11() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   if (jopa == true) {
      userScore = userScore + 1;
   } else {
      userScore = userScore;
   }
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex11.classList.add("activehex")
   } else {
      hex11.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex12.addEventListener("click", function (evt) {
   nomer = 12
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex12() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   userScore = userScore;
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex12.classList.add("activehex")
   } else {
      hex12.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex13.addEventListener("click", function (evt) {
   nomer = 13
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex13() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   userScore = userScore;
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex13.classList.add("activehex")
   } else {
      hex13.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex14.addEventListener("click", function (evt) {
   nomer = 14
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex14() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   if (jopa == true) {
      userScore = userScore + 1;
   } else {
      userScore = userScore;
   }
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex14.classList.add("activehex")
   } else {
      hex14.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex15.addEventListener("click", function (evt) {
   nomer = 15
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex15() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   if (jopa == true) {
      userScore = userScore + 2;
   } else {
      userScore = userScore;
   }
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex15.classList.add("activehex")
   } else {
      hex15.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex16.addEventListener("click", function (evt) {
   nomer = 16
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex16() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   if (jopa == true) {
      userScore = userScore + 2;
   } else {
      userScore = userScore;
   }
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex16.classList.add("activehex")
   } else {
      hex16.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex17.addEventListener("click", function (evt) {
   nomer = 17
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex17() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   if (jopa == true) {
      userScore = userScore + 1;
   } else {
      userScore = userScore;
   }
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex17.classList.add("activehex")
   } else {
      hex17.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex18.addEventListener("click", function (evt) {
   nomer = 18
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex18() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   userScore = userScore;
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex18.classList.add("activehex")
   } else {
      hex18.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex19.addEventListener("click", function (evt) {
   nomer = 19
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex19() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   userScore = userScore;
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex19.classList.add("activehex")
   } else {
      hex19.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex20.addEventListener("click", function (evt) {
   nomer = 20
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex20() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   userScore = userScore;
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex20.classList.add("activehex")
   } else {
      hex20.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex21.addEventListener("click", function (evt) {
   nomer = 21
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex21() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   if (jopa == true) {
      userScore = userScore + 1;
   } else {
      userScore = userScore;
   }
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex21.classList.add("activehex")
   } else {
      hex21.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex22.addEventListener("click", function (evt) {
   nomer = 22
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex22() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   if (jopa == true) {
      userScore = userScore + 1;
   } else {
      userScore = userScore;
   }
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex22.classList.add("activehex")
   } else {
      hex22.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex23.addEventListener("click", function (evt) {
   nomer = 23
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex23() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   userScore = userScore;
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex23.classList.add("activehex")
   } else {
      hex23.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

hex24.addEventListener("click", function (evt) {
   nomer = 24
   evt.preventDefault()
   quiz_box.classList.toggle("activebox")
   que_count++;
   showQuestions(que_count)
   queCounter(que_numb)
   startTimer(30);
})

function showResultBoxHex24() {
   quiz_box.classList.remove("activebox");
   scoreText = document.querySelector(".result__text")
   userScore = userScore;
   score = userScore * 10;
   if (userScore >= 1) {
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
      hex24.classList.add("activehex")
   } else {
      hex24.classList.add("activehex")
      let scoreTag = '<span><p>' + score + '</p></span>'
      scoreText.innerHTML = scoreTag;
   }
}

next_btn.onclick = () => {
   if (nomer == 1) {
      next_btn.style.display = "none"
      showResultBox();
   }
   if (nomer == 2) {
      next_btn.style.display = "none"
      showResultBoxSecond();
   }
   if (nomer == 3) {
      next_btn.style.display = "none"
      showResultBoxThirty();
   }
   if (nomer == 4) {
      next_btn.style.display = "none"
      showResultBoxForty();
   }
   if (nomer == 5) {
      next_btn.style.display = "none"
      showResultBoxHex5();
   }
   if (nomer == 6) {
      next_btn.style.display = "none"
      showResultBoxHex6();
   }
   if (nomer == 7) {
      next_btn.style.display = "none"
      showResultBoxHex7();
   }
   if (nomer == 8) {
      next_btn.style.display = "none"
      showResultBoxHex8();
   }
   if (nomer == 9) {
      next_btn.style.display = "none"
      showResultBoxHex9();
   }
   if (nomer == 10) {
      next_btn.style.display = "none"
      showResultBoxHex10();
   }
   if (nomer == 11) {
      next_btn.style.display = "none"
      showResultBoxHex11();
   }
   if (nomer == 12) {
      next_btn.style.display = "none"
      showResultBoxHex12();
   }
   if (nomer == 13) {
      next_btn.style.display = "none"
      showResultBoxHex13();
   }
   if (nomer == 14) {
      next_btn.style.display = "none"
      showResultBoxHex14();
   }
   if (nomer == 15) {
      next_btn.style.display = "none"
      showResultBoxHex15();
   }
   if (nomer == 16) {
      next_btn.style.display = "none"
      showResultBoxHex16();
   }
   if (nomer == 17) {
      next_btn.style.display = "none"
      showResultBoxHex17();
   }
   if (nomer == 18) {
      next_btn.style.display = "none"
      showResultBoxHex18();
   }
   if (nomer == 19) {
      next_btn.style.display = "none"
      showResultBoxHex19();
   }
   if (nomer == 20) {
      next_btn.style.display = "none"
      showResultBoxHex20();
   }
   if (nomer == 21) {
      next_btn.style.display = "none"
      showResultBoxHex21();
   }
   if (nomer == 22) {
      next_btn.style.display = "none"
      showResultBoxHex22();
   }
   if (nomer == 23) {
      next_btn.style.display = "none"
      showResultBoxHex23();
   }
   if (nomer == 24) {
      next_btn.style.display = "none"
      showResultBoxHex24();
   }
}