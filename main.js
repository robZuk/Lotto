const addedNumbers = [];
const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49
];
const randomNumbers = [];
const listNumbers = [...document.querySelectorAll("input")];
const addButton = document.querySelector(".add");
const form = document.querySelector("form");
const playButton = document.querySelector(".play");
const resetButton = document.querySelector(".reset");
const sectionAddedList = document.querySelector(".yourNumbers");
const sectionRandomList = document.querySelector(".randomNumbers");
const pResult = document.querySelector(".randomNumbers p:nth-child(3)");
const ulAddList = document.querySelector(".yourNumbers ul");
const ulRandomList = document.querySelector(".randomNumbers ul");

const addNumbers = function(e) {
  e.preventDefault();
  for (let i = 0; i < listNumbers.length; i++) {
    if (addedNumbers.includes(Number(listNumbers[i].value))) {
      alert("wpisałeś dwa razy to samo");
      addedNumbers.length = 0;
      return;
    }
    addedNumbers.push(Number(listNumbers[i].value));
  }
  form.classList.add("hidden");
  sectionAddedList.classList.remove("hidden");
  playButton.classList.remove("hidden");
  showNumbers(ulAddList, addedNumbers);
};

const showNumbers = (list, numbers) => {
  numbers.forEach(number => {
    const li = document.createElement("li");
    list.appendChild(li);
    li.textContent = number;
  });
};

const randomNumbersGenerator = () => {
  for (let i = 0; i < 6; i++) {
    let number = Math.floor(Math.random() * numbers.length) + 1;
    if (randomNumbers.indexOf(number) === -1) {
      randomNumbers.push(number);
    } else i--;
  }
  sectionRandomList.classList.remove("hidden");
  playButton.classList.add("hidden");
  resetButton.classList.remove("hidden");
  showNumbers(ulRandomList, randomNumbers);

  pResult.innerHTML += checkResult();
};

const checkResult = () => {
  let inc = 0;
  for (let i = 0; i < addedNumbers.length; i++) {
    if (randomNumbers.includes(addedNumbers[i])) {
      inc += 1;
    }
  }
  return inc;
};

const resetGame = () => {
  randomNumbers.length = 0;
  addedNumbers.length = 0;
  ulAddList.innerHTML = "";
  ulRandomList.innerHTML = "";
  listNumbers.forEach(input => {
    input.value = "";
  });
  sectionAddedList.classList.add("hidden");
  sectionRandomList.classList.add("hidden");
  form.classList.remove("hidden");
  resetButton.classList.add("hidden");
  pResult.innerHTML = "Trafiłeś: ";
};

resetButton.addEventListener("click", resetGame);
playButton.addEventListener("click", randomNumbersGenerator);
form.addEventListener("submit", addNumbers);
