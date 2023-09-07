const outputDiv = document.getElementById('output');

async function fetchData(url, callback) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    callback(data);
  } catch (error) {
    outputDiv.innerHTML = `${error}`;
  }
}

function processData(data) {
 
    outputDiv.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.body}</p>
    `;
  }

 
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
fetchData(apiUrl, processData);
