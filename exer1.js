// Part I
setTimeout(function() {
    alert("Hello World");
}, 2000);

// Part II
setTimeout(function() {
    const container = document.getElementById('container');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello World';
    container.appendChild(paragraph);
}, 2000);


// Part III
let interval = setInterval(function() {
    const container = document.getElementById('container');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Hello World';
    container.appendChild(paragraph);
    
    // Check if there are 5 paragraphs inside the container
    if (container.querySelectorAll('p').length >= 5) {
        clearInterval(interval);
    }
}, 2000);

// Clear the interval when the button is clicked
document.getElementById('clear').addEventListener('click', function() {
    clearInterval(interval);
});
