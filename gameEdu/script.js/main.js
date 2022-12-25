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

exit_btn.onclick = () => {
   window.location.reload();
}

start_btn.addEventListener("click", function (evt) {
   evt.preventDefault()
   info__box.classList.toggle("activeinfo");
}
)
exit_btn.addEventListener("click", function (evt) {
   evt.preventDefault()
   info__box.classList.remove("activeinfo");
}
)
continue_btn.addEventListener("click", function (evt) {
   evt.preventDefault()
   info__box.classList.remove("activeinfo");
   quiz_box.classList.toggle("activebox");
   showQuestions(0);
   queCounter(1);
   startTimer(30);
}
)

let userScore = 0;
let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 30;
let nominal = 10;
let nominalsec = 20;
let nominalthi = 30;
let ticIcon = '<div class="icon tick"><i class="fas fa-check"><img src="../img/галка.png" alt=""></i></div>'
let crossIcon = '<div class="icon cross"><i class="fas fa-check"><img src="../img/крест.png" width="32px" alt=""></i></div>'

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
   for (let i = 0; i < option.length; i++) {
      option[i].setAttribute("onclick", "optionSelected(this)")
   }
}
next_btn.onclick = () => {
   if (que_count < questions.length - 1) {
      que_count++;
      que_numb++;
      showQuestions(que_count)
      queCounter(que_numb)
      clearInterval(counter);
      startTimer(timeValue)
      next_btn.style.display = "none"
   } else {
      console.log("questions кончились")
      showResultBox();
   }
}
function queCounter(index) {
   const bottom_ques_counter = quiz_box.querySelector(".total__que")
   let totalQuesCountTag = '<span><p>' + index + '</p>из<p>' + questions.length + '</p>Вопросов</span>'
   bottom_ques_counter.innerHTML = totalQuesCountTag;
}
function optionSelected(answer) {
   clearInterval(counter);
   let userAns = answer.textContent;
   let correctAns = questions[que_count].answer;
   let allOptions = option_list.children.length;
   if (userAns == correctAns) {
      answer.classList.add("correct");
      userScore++;
      answer.insertAdjacentHTML("beforeend", ticIcon)
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
   const scoreText = document.querySelector(".result__text")
   if (userScore >= 3) {
      let scoreTag = '<span><p>' + nominal + '</p></span>'
      scoreText.innerHTML = scoreTag;
      start_btn.classList.add("activehex")
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
