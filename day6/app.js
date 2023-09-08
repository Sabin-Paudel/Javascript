import { getRandomQuote } from './quotes.js';

document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const generateButton = document.getElementById('generate');

    generateButton.addEventListener('click', () => {
        const randomQuote = getRandomQuote();
        quoteElement.textContent = randomQuote;
    });

    generateButton.click();
});

