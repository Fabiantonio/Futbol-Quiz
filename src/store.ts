import { create } from "zustand";

type QuestionType = {
  question: string;
  options: string[];
  correctIndex: number;
};

type GameState = {
  currentQuestion: number;
  score: number;
  questions: QuestionType[];
  answerSelected: number | null;
  selectAnswer: (index: number) => void;
  nextQuestion: () => void;
  resetGame: () => void;
};

export const useGameStore = create<GameState>((set, get) => ({
  currentQuestion: 0,
  score: 0,
  answerSelected: null,
  questions: [
    {
      question: "¿Qué selección ha ganado más Copas del Mundo de fútbol?",
      options: ["Alemania", "Italia", "Brasil", "Argentina"],
      correctIndex: 2,
    },
    {
      question: "¿Cuántos jugadores hay en un equipo de fútbol en el campo?",
      options: ["9", "10", "11", "12"],
      correctIndex: 2,
    },
    {
      question:
        "¿Quién es el máximo goleador de la historia de la Copa del Mundo?",
      options: ["Pelé", "Miroslav Klose", "Ronaldo Nazário", "Lionel Messi"],
      correctIndex: 1,
    },
    {
      question: "¿En qué país se celebró la primera Copa del Mundo en 1930?",
      options: ["Brasil", "Uruguay", "Italia", "Inglaterra"],
      correctIndex: 1,
    },
    {
      question:
        "¿Cuál es el nombre del trofeo que se entrega al ganador de la Copa del Mundo?",
      options: [
        "Copa Jules Rimet",
        "Copa FIFA World Cup",
        "Copa de la Victoria",
        "Copa de Oro",
      ],
      correctIndex: 1,
    },
    {
      question: "¿Quién es considerado el inventor del fútbol moderno?",
      options: [
        "Walter Camp",
        "Ebenezer Cobb Morley",
        "James Naismith",
        "William G. Morgan",
      ],
      correctIndex: 1,
    },
    {
      question:
        "¿Qué equipo ha ganado más títulos de la UEFA Champions League?",
      options: ["Liverpool", "Bayern de Múnich", "AC Milan", "Real Madrid"],
      correctIndex: 3,
    },
    {
      question: "¿Cuál es el nombre del estadio del FC Barcelona?",
      options: [
        "Santiago Bernabéu",
        "Allianz Arena",
        "Camp Nou",
        "Old Trafford",
      ],
      correctIndex: 2,
    },
    {
      question: "¿Qué jugador tiene el récord de más Balones de Oro ganados?",
      options: [
        "Cristiano Ronaldo",
        "Michel Platini",
        "Lionel Messi",
        "Johan Cruyff",
      ],
      correctIndex: 2,
    },
    {
      question: "¿Qué país ha ganado más veces la Copa América?",
      options: ["Brasil", "Uruguay", "Argentina", "Chile"],
      correctIndex: 1,
    },
    {
      question:
        "¿En qué año se fundó la FIFA (Federación Internacional de Fútbol Asociación)?",
      options: ["1888", "1904", "1920", "1930"],
      correctIndex: 1,
    },
    {
      question:
        "¿Cuál es el estadio de fútbol más grande del mundo por capacidad?",
      options: [
        "Camp Nou",
        "Estadio Azteca",
        "Estadio Rungrado Primero de Mayo",
        "Wembley Stadium",
      ],
      correctIndex: 2,
    },
    {
      question:
        "¿Qué equipo fue apodado 'Los Invencibles' tras una temporada invicta en la Premier League?",
      options: ["Manchester United", "Liverpool", "Arsenal", "Chelsea"],
      correctIndex: 2,
    },
    {
      question: "¿Qué jugador brasileño fue conocido como 'O Rei'?",
      options: ["Romário", "Ronaldo Nazário", "Ronaldinho", "Pelé"],
      correctIndex: 3,
    },
    {
      question: "¿En qué año se celebró el primer Mundial femenino?",
      options: ["1970", "1985", "1991", "2000"],
      correctIndex: 2,
    },
    {
      question: "¿Qué país organizó la Copa del Mundo de 2014?",
      options: ["Sudáfrica", "Brasil", "Rusia", "Alemania"],
      correctIndex: 1,
    },
    {
      question:
        "¿Quién es el máximo goleador de la historia de la selección española?",
      options: [
        "Fernando Torres",
        "David Villa",
        "Raúl González",
        "Andrés Iniesta",
      ],
      correctIndex: 1,
    },
    {
      question: "¿Cuál es el equipo con más títulos de la liga portuguesa?",
      options: ["Benfica", "FC Porto", "Sporting CP", "Boavista"],
      correctIndex: 0,
    },
    {
      question:
        "¿Qué país es el único que ha ganado la Copa del Mundo y la Eurocopa al mismo tiempo?",
      options: ["Brasil", "Alemania", "Francia", "España"],
      correctIndex: 3,
    },
    {
      question: "¿Qué jugador ganó el Balón de Oro en 2018?",
      options: [
        "Luka Modrić",
        "Cristiano Ronaldo",
        "Lionel Messi",
        "Antoine Griezmann",
      ],
      correctIndex: 0,
    },
    {
      question:
        "¿Cuál fue el primer equipo en ganar la UEFA Champions League dos veces consecutivas?",
      options: ["Ajax", "Real Madrid", "AC Milan", "Liverpool"],
      correctIndex: 1,
    },
    {
      question:
        "¿En qué club hizo su debut profesional Diego Armando Maradona?",
      options: ["Boca Juniors", "FC Barcelona", "Argentinos Juniors", "Napoli"],
      correctIndex: 2,
    },
    {
      question:
        "¿Cuál es el máximo goleador de la historia de la Premier League?",
      options: [
        "Wayne Rooney",
        "Alan Shearer",
        "Thierry Henry",
        "Sergio Agüero",
      ],
      correctIndex: 1,
    },
    {
      question:
        "¿Quién es el único portero en la historia que ha ganado el Balón de Oro?",
      options: [
        "Iker Casillas",
        "Gianluigi Buffon",
        "Lev Yashin",
        "Manuel Neuer",
      ],
      correctIndex: 2,
    },
    {
      question:
        "¿Qué selección ha llegado a más finales de la Copa del Mundo sin ganarla?",
      options: ["Países Bajos", "Hungría", "Suecia", "Polonia"],
      correctIndex: 0,
    },
  ].sort(() => Math.random() - 0.5),

  selectAnswer: (index) => {
    const { currentQuestion, questions, score } = get();
    const isCorrect = index === questions[currentQuestion].correctIndex;
    set({
      answerSelected: index,
      score: isCorrect ? score + 1 : score,
    });
  },
  nextQuestion: () => {
    const { currentQuestion, questions } = get();
    if (currentQuestion < questions.length - 1) {
      set({
        currentQuestion: currentQuestion + 1,
        answerSelected: null,
      });
    }
  },
  resetGame: () => {
    set((state) => ({
      currentQuestion: 0,
      score: 0,
      answerSelected: null,
      questions: state.questions.sort(() => Math.random() - 0.5),
    }));
  },
}));
