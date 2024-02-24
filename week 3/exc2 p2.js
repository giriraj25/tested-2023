let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const indexOfBigBangTheory = myWatchedSeries.indexOf("the big bang theory");
if (indexOfBigBangTheory !== -1) {
    myWatchedSeries[indexOfBigBangTheory] = "friends";
}
myWatchedSeries.push("breaking bad");

myWatchedSeries.unshift("game of thrones");

const indexOfBlackMirror = myWatchedSeries.indexOf("black mirror");
if (indexOfBlackMirror !== -1) {
    myWatchedSeries.splice(indexOfBlackMirror, 1);
}

const thirdLetterOfMoneyHeist = myWatchedSeries.find(series => series.startsWith("money heist"));

console.log("Modified myWatchedSeries array:", myWatchedSeries);
console.log(`The third letter of "money heist" is: ${thirdLetterOfMoneyHeist}`);
