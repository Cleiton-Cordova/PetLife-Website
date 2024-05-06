var elementsquestions = document.querySelectorAll(".questions");

elementsquestions.forEach(function (questions) {
  questions.addEventListener("click", function () {
    questions.classList.toggle("active");
  });
});
