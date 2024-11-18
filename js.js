const adviceId = document.getElementsByClassName("id")[0];
const advice = document.getElementsByClassName("advice")[0];

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceId.innerHTML = data.slip.id;
      advice.innerHTML = data.slip.advice;
    });
}

fetchAdvice();

function buttonClicked() {
  fetchAdvice();
}
