document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const textBox = document.getElementById('textBox');
    const output = document.getElementById('output');
  
    addButton.addEventListener('click', function() {
      const text = textBox.value.trim();
      if (text !== '') {
        const pTag = document.createElement('p');
        pTag.textContent = text;
        output.appendChild(pTag);
        textBox.value = ''; // Clear the input
      }
    });
  });
  