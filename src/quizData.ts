export type QuizQuestion = {
    category: string,
    question: string,
    options: { [key: string]: string },
    correctAnswer: string,
    explanation: string
};

export const quizData: QuizQuestion[] = [
  {
    category: "Typescript",
    question: "What is TypeScript?",
    options: {
      "A": "A JavaScript library",
      "B": "A CSS framework",
      "C": "A superset of JavaScript",
      "D": "An IDE for JavaScript"
    },
    correctAnswer: "C",
    explanation: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
  },
  {
    category: "General",
    question: "Which HTML element do we put the JavaScript?",
    options: {
      "A": "<javascript>",
      "B": "<scripting>",
      "C": "<js>",
      "D": "<script>"
    },
    correctAnswer: "D",
    explanation: "The <script> tag is used to define a client-side script (JavaScript)."
  }
];
