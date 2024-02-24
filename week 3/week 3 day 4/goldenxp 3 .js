let userVerb = prompt("Enter a verb:");


if (userVerb.length >= 3) {
    if (userVerb.endsWith("ing")) {
        
        console.log(userVerb + "ly");
    } else {
        
        console.log(userVerb + "ing");
    }
} else {
    
    console.log(userVerb);
}
