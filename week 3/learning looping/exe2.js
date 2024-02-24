const colors = ["blue", "pearlwhite", "green", "purple", "red wine"];
const suffixes = ["bl", "pw", "gr", "pr", "rd"]; 

for (let i = 0; i < colors.length; i++) {
    let ordinal = i + 1;

    let suffixIndex = (ordinal >= 11 && ordinal <= 13) ? 3 : (ordinal - 1) % 10;
    let suffix = suffixes[suffixIndex];

    console.log(`My ${ordinal}${suffix} choice is ${colors[i]}`);
}
