export interface QuizQuestionData {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizData: QuizQuestionData[] = [
  {
    id: 1,
    question: "Какая столица Франции?",
    options: ["Лондон", "Берлин", "Париж", "Мадрид"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "Сколько планет в Солнечной системе?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Кто написал роман 'Война и мир'?",
    options: ["Достоевский", "Толстой", "Чехов", "Тургенев"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "Какая самая большая планета в Солнечной системе?",
    options: ["Земля", "Сатурн", "Юпитер", "Нептун"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "В каком году был основан Санкт-Петербург?",
    options: ["1700", "1703", "1705", "1710"],
    correctAnswer: 1,
  },
];
