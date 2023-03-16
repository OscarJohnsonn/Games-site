function search(query, data) {
  const results = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes(query)) {
      results.push(data[i]);
    }
  }
  return results;
}

const data = ['apple', 'banana', 'orange', 'grape'];
const input = document.getElementById('search-input');
const resultsList = document.getElementById('results-list');

input.addEventListener('input', () => {
  const query = input.value.toLowerCase();
  const results = search(query, data);
  displayResults(results);
});

function displayResults(results) {
  resultsList.innerHTML = '';
  if (results.length === 0) {
    const li = document.createElement('li');
    li.innerText = 'No results found.';
    resultsList.appendChild(li);
  } else {
    for (let i = 0; i < results.length; i++) {
      const li = document.createElement('li');
      li.innerText = results[i];
      resultsList.appendChild(li);
    }
  }
}
