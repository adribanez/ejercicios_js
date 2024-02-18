const questionsNumberInput = document.querySelector(
  '[data-function="questions-number"]'
);
const startGameButton = document.querySelector('[data-function="start-game"]');
const gameBoard = document.querySelector('[data-function="gameboard"]');
const checkGameButton = document.querySelector('[data-function="check-game"]');
let questions = [];

startGameButton.addEventListener("click", async () => {
  const questionsNumber = parseInt(questionsNumberInput.value);
  if (isNaN(questionsNumber) || questionsNumber <= 0) {
    alert("Por favor, introduce un número válido de preguntas.");
    return;
  }
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${questionsNumber}&type=multiple`
  );
  questions = (await response.json()).results;
  renderQuestions();
  checkGameButton.disabled = false;
});

function renderQuestions() {
  gameBoard.innerHTML = "";
  questions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.innerHTML = `
            <p>Pregunta ${index + 1}: ${question.question}</p>
            <form data-question="${question.question}">
                ${question.incorrect_answers
                  .map(
                    (answer) => `
                    <label>
                        <input type="radio" name="question-${question.question}" value="${answer}">
                        ${answer}
                    </label>
                `
                  )
                  .join("")}
                <label>
                    <input type="radio" name="question-${
                      question.question
                    }" value="${question.correct_answer}">
                    ${question.correct_answer}
                </label>
            </form>
        `;
    gameBoard.appendChild(questionElement);
  });
}

checkGameButton.addEventListener("click", () => {
  let score = 0;
  questions.forEach((question) => {
    const selectedAnswer = gameBoard.querySelector(
      `input[name="question-${question.question}"]:checked`
    );
    if (selectedAnswer && selectedAnswer.value === question.correct_answer) {
      score++;
    }
  });
  alert(`Tu puntuación es: ${score}/${questions.length}`);
});
