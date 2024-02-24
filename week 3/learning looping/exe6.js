const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer',
};

let sentence = '';

for (let key in details) {
    sentence += details[key] + ' ';
}

console.log(sentence.trim()); 
