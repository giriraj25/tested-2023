function createFrame(words) {
    const maxLength = Math.max(...words.map(word => word.length));
    const frameWidth = maxLength + 4; 

    const horizontalLine = '*'.repeat(frameWidth);
    console.log(horizontalLine);

    words.forEach(word => {
        const spaces = ' '.repeat(maxLength - word.length);
        console.log(`* ${word}${spaces} *`);
    });

    console.log(horizontalLine);
}

const userInput = prompt("Enter several words separated by commas:");
const wordsArray = userInput.split(',').map(word => word.trim());

createFrame(wordsArray);
