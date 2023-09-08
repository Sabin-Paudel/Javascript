const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
  "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
];

export function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
