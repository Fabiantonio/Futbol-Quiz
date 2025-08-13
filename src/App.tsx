import { useGameStore } from "./store";
import confetti from "canvas-confetti";


function App() {
  const {
    currentQuestion,
    questions,
    answerSelected,
    selectAnswer,
    nextQuestion,
    score,
    resetGame,
  } = useGameStore();

  const question = questions[currentQuestion];
  const isGameOver = currentQuestion === questions.length - 1 && answerSelected !== null;
  const progressPercentage = ((currentQuestion + (answerSelected !== null ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Quiz de Futbol</h1>
        <div className="score">Puntaje: {score}</div>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <div className="question">{question.question}</div>
      
      <div className="options">
        {question.options.map((option, index) => {
          const isSelected = answerSelected === index;
          const isCorrect = index === question.correctIndex;
          let optionClass = "option-button";
          
          if (answerSelected !== null) {
            if (isSelected && isCorrect) {
              optionClass += " option-correct";
              confetti({
                particleCount: 100,
                spread: 100,
                origin: { y: 0.7 },
              });
            } else if (isSelected && !isCorrect) {
              optionClass += " option-incorrect";
            } else if (isCorrect) {
              optionClass += " option-correct";
            }
          }

          return (
            <button
              key={index}
              onClick={() => selectAnswer(index)}
              disabled={answerSelected !== null}
              className={optionClass}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="controls">
        <button onClick={resetGame} className="btn btn-reset">
          Reiniciar juego
        </button>
        
        {answerSelected !== null && !isGameOver && (
          <button onClick={nextQuestion} className="btn btn-next">
            Siguiente pregunta
          </button>
        )}
        
        {isGameOver && (
          <div className="game-over">
            <h2>¡Juego terminado!</h2>
            <p>Tu puntuación final: {score} de {questions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
