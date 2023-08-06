//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Which of these is printed source of information",
    answer: "books and pamphlet",
    options: [
      "virtual sources",
      "Audio sources",
      "books and pamphlet",
      "Vitual sources",
    ],
  },
  {
    numb: 2,
    question: "Polythecnic and University libraries are together classified as ____",
    answer: "Academic Libraries",
    options: [
      "Academic Libraries",
      "Tetiary Libraries",
      "Research Libraries",
      "Public Libraries",
    ],
  },
  {
    numb: 3,
    question: "A library established by the federal or state government to serve as reference and research centers for national informaton is referred to as ____",
    answer: "National Library", 
    options: [
      "National Library",
      "Public Library",
      "Special Library",
      "Intergovernmental Library",
    ],
  },
  {
    numb: 4,
    question: "____ provide basic data and statistics on topics such as education, health etc and published annually",
    answer: "Yearbooks",
    options: [
      "Astracts",
      "Indexes",
      "Yearbooks",
      "Handbooks",
    ],
  },
  {
    numb: 5,
    question: "The following are advantages of using Non-print resources except",
    answer: "Erratic power supply",
    options: [
      "Aid retention",
      "Preservation",
      "Erratic power supply",
      "Group instruction",
    ],
  },
  {
    numb: 6,
    question: "One of the following is not part of audio-visual resources",
    answer: "World Atlas",
    options: [
      "Video recordings",
      "Television",
      "Digital media",
      "World Atlas",
    ],
  },
   {
    numb: 7,
    question: "Physical part of a book consist of the following except",
    answer: "Publicher",
    options: [
      "Spine",
      "Binding",
      "Publicher",
      "Dust Jacket",
    ],
  },
   {
    numb: 8,
    question: "Binding is?",
    answer: "The part of a book which holds the printed sheets together",
    options: [
      "The edge of the book that holds the printed sheet together",
      "The sheet which contains important information",
      "The part of a book which holds the printed sheets together",
      "A blank sheet found at the beginnig of the book",
    ],
  },
   {
    numb: 9,
    question: "FUTA library was opened to users on",
    answer: "1983",
    options: [
      "1992",
      "1982",
      "1983",
      "2003",
    ],
  },
   {
    numb: 10,
    question: "National libraries are also known as?",
    answer: "Apex",
    options: [
      "Special Libraries",
      "Depository",
      "Virtual libraries",
      "Apex",
    ],
  },
   {
    numb: 11,
    question: "The word library is from a",
    answer: "Latin word",
    options: [
      "Latin word",
      "Arabic word",
      "Greek word",
      "German word",
    ],
  },
  {
    numb: 12,
    question: 'The word "liber" means',
    answer: "Book",
    options: [
      "Book",
      "Institute",
      "Literature",
      "Library",
    ],
  },
{
    numb: 13,
    question: 'FUTA library is an example of____',
    answer: "Academic Library",
    options: [
      "School Library",
      "Public Library",
      "Special Library",
      "Academic Library",
    ],
  },
  {
    numb: 14,
    question: 'ISBN means ____',
    answer: "International Standard Book Number",
    options: [
      "International Standard Book Number",
      "International Standard Backlog Number",
      "International Students Book Number",
      "International Standard Backcode Number",
    ],
  },
  {
    numb: 15,
    question: 'The library that act as the national information knowledge is?',
    answer: "National Library",
    options: [
      "National Library",
      "Public Library",
      "Archive Library",
      "School Library",
    ],
  },
  {
    numb: 16,
    question: 'A place where we have large numbers of historical records is called?',
    answer: "Archive",
    options: [
      "Archive",
      "Public Library",
      "National Library",
      "School Library",
    ],
  },
  {
    numb: 17,
    question: 'Users usually keep their personal belongings when entering into the library in the ____',
    answer: "Cloak room",
    options: [
      "Porter unit",
      "Cloak room",
      "Security room",
      "Ward room",
    ],
  },
  {
    numb: 18,
    question: 'The maximum number of books undergraduate can borrow in the FUTA library is _____',
    answer: "Two",
    options: [
      "Three",
      "Four",
      "One",
      "Two",
    ],
  },
  {
    numb: 19,
    question: 'The skills combined in locating and retriving information is called?',
    answer: "Information Literacy",
    options: [
      "Information Literacy",
      "Information Technology",
      "Information Process",
      "Information Awareness",
    ],
  },
  {
    numb: 20,
    question: 'A Library without wall is called?',
    answer: "Virtual Library",
    options: [
      "Digital Library",
      "Electronic Library",
      "Virtual Library",
      "Public Library",
    ],
  },
  {
    numb: 21,
    question: 'A book borrowed by an undergraduate will be for a period of ______',
    answer: "Two weeks",
    options: [
      "One week",
      "Two weeks",
      "Three weeks",
      "5 days",
    ],
  },
  {
    numb: 22,
    question: '___ is not a type of library',
    answer: "None of the above",
    options: [
      "Electronic Library",
      "Digital Library",
      "Virtual Lirary",
      "None of the above",
    ],
  },
  {
  numb: 23,
  question: 'The newspaper is a publication that is issued ________',
  answer:'Daily or Weekly',
      options: [
    "Daily or Weekly",
    "Monthly",
    "Weekly",
    "Anually",
  ],
},
{
  numb: 24,
  question: '____ is an example of a general encyclopedia',
  answer: "Encyclopedia Britannica",
  options: [
    "Encyclopedia Britannica",
    "Encyclopedia of Agriculture",
    "Encyclopedia of Forestry",
    "Encyclopedia of Biology",
  ],
},
{
  numb: 25,
  question: 'A library of congress in the USA is a type of _____',
  answer: "National Library",
  options: [
    "Academic Library",
    "Special Library",
    "Private Library",
    "National Library",
  ],
},
{
  numb: 26,
  question: 'The course GNS 103 is an example of _____',
  answer: "knowledge management",
  options: [
    "how to speak english properly",
    "knowledge management",
    "information overload",
    "user education",
  ],
},
{
  numb: 27,
  question: 'Magazines and journals together belong to the category of information resources called _________',
  answer: "Serials",
  options: [
    "temporary sources",
    "reference books",
    "Serials",
    "digital sources",
  ],
},
{
  numb: 28,
  question: 'User may not borrow materials from ________',
  answer: "The National Library",
  options: [
    "school library",
    "public libraries",
    "The National Library",
    "Academics libraries", 
  ],
},
{
  numb: 29,
  question: 'Authors of books are legally bound to deposit a number of copies of their publication to the ______',
  answer: "public library",
  options: [
    "state library",
    "public library",
    "national library",
    "depository library",
  ],
},
{
  numb: 30,
  question: 'Public libraries are opened to all ______',
  answer: "all citizens",
  options: [
    "all citizens",
    "only adults",
    "only students",
    "only democrats",
  ],
},
{
  numb: 31,
  question: 'FUTA consist of how many floors?',
  answer: "3 floors",
  options: [
    "2 floors",
    "3 floors",
    "4 floors",
    "1 floor",
  ],
},
{
  numb: 32,
  question: 'The blank leaf found at the beginning or end of a book is a called ______',
  answer: "flyleaf",
  options: [
    "preface",
    "copyright page",
    "context",
    "flyleaf",
  ],
},
{
  numb: 33,
  question:'Which of the following services is not normally offered by University library?',
  answer: "Photocopying",
  options: [
    "Extension service",
    "ICT services",
    "Photocopying",
    "Bindery",
  ],
},

];

// if startQuiz button clicked
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); //show info box
};

// if exitQuiz button clicked
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
};

// if continueQuiz button clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuetions(0); //calling showQestions function
  queCounter(1); //passing 1 parameter to queCounter
  startTimer(15); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function
};

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz"); //show quiz box
  result_box.classList.remove("activeResult"); //hide result box
  timeValue = 15;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count); //calling showQestions function
  queCounter(que_numb); //passing que_numb value to queCounter
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  startTimer(timeValue); //calling startTimer function
  startTimerLine(widthValue); //calling startTimerLine function
  timeText.textContent = "Time Left"; //change the text of timeText to Time Left
  next_btn.classList.remove("show"); //hide the next button
};

// if quitQuiz button clicked
quit_quiz.onclick = () => {
  window.location.reload(); //reload the current window
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    //if question count is less than total question length
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
  } else {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    showResult(); //calling showResult function
  }
};

// getting questions and options from array
function showQuetions(index) {
  const que_text = document.querySelector(".que_text");

  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag

  const option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  let userAns = answer.textContent; //getting user selected option
  let correcAns = questions[que_count].answer; //getting correct answer from array
  const allOptions = option_list.children.length; //getting all option items

  if (userAns == correcAns) {
    //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    answer.classList.add("incorrect"); //adding red color to correct selected option
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    console.log("Wrong Answer");

    for (i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correcAns) {
        //if there is an option which is matched to an array answer
        option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
        console.log("Auto selected correct answer.");
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.remove("activeQuiz"); //hide quiz box
  result_box.classList.add("activeResult"); //show result box
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3) {
    // if user scored more than 3
    //creating a new span tag and passing the user score number and total question number
    let scoreTag =
      "<span>and congrats! , You got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
  } else if (userScore > 1) {
    // if user scored more than 1
    let scoreTag =
      "<span>and nice , You got <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p>and don't forget to vote Action for FUTASU 004(AGS)</span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // if user scored less than 1
    let scoreTag =
      "<span>and sorry , You got only <p>" +
      userScore +
      "</p> out of <p>" +
      questions.length +
      "</p>and don't forget to vote Action for FUTASU 004(AGS)</span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value
    if (time < 9) {
      //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //add a 0 before time value
    }
    if (time < 0) {
      //if timer is less than 0
      clearInterval(counter); //clear counter
      timeText.textContent = "Time Off"; //change the time text to time off
      const allOptions = option_list.children.length; //getting all option items
      let correcAns = questions[que_count].answer; //getting correct answer from array
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
      }
      next_btn.classList.add("show"); //show the next button if user selected any option
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1; //upgrading time value with 1
    time_line.style.width = time + "px"; //increasing width of time_line with px by time value
    if (time > 549) {
      //if time value is greater than 549
      clearInterval(counterLine); //clear counterLine
    }
  }
}

function queCounter(index) {
  //creating a new span tag and passing the question number and total question
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    questions.length +
    "</p> Questions</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
}
