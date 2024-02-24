const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length;

let myWatchedSeriesSentence = myWatchedSeries.join(', ');

function capitalizeFirstLetter(series) {
    return series.charAt(0).toUpperCase() + series.slice(1);
}

const capitalizedSeries = myWatchedSeries.map(capitalizeFirstLetter);

let capitalizedSeriesSentence = capitalizedSeries.join(', ');

console.log(`I watched ${myWatchedSeriesLength} series: ${capitalizedSeriesSentence}.`);
