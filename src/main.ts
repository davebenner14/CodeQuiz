// main.ts

import { quizData, QuizQuestion } from './quizData';

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion(quizData[0]); // Simplified: displaying the first question
});

function displayQuestion(question: QuizQuestion): void {
    const quizContainer = document.getElementById('quiz') as HTMLDivElement;
    quizContainer.innerHTML = `
        <div class="block">
            <p class="title is-4">${question.question}</p>
        </div>
        <div class="block">
            ${Object.entries(question.options).map(([key, value]) =>
                `<button class="button is-fullwidth is-info is-light my-2" onclick="selectOption('${key}')" data-value="${key}">${key}: ${value}</button>`
            ).join('')}
        </div>
    `;
    // Remember to implement selectOption function to handle option selection
}

// Example implementation of selectOption
function selectOption(selectedKey: string): void {
    console.log(`Option selected: ${selectedKey}`);
    // Additional logic to check the answer, display explanations, etc.
}
