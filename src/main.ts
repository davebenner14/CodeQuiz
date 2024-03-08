type QuizQuestion = {
    category: string,
    question: string,
    options: { [key: string]: string },
    correctAnswer: string,
    explanation: string
};

const quizData: QuizQuestion[] = [/* Your quizData.json content here */];

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion(quizData[0]); // Simplified: displaying the first question
});

function displayQuestion(question: QuizQuestion): void {
    const quizContainer = document.getElementById('quiz') as HTMLDivElement;
    quizContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <div class="options">
            ${Object.entries(question.options).map(([key, value]) =>
                `<label class="radio"><input type="radio" name="answer" value="${key}">${key}: ${value}</label>`
            ).join('')}
        </div>
    `;
}
