const smallWords = ['and', 'the', 'of', 'in'];

function correctTitle(title) {
    let newTitle = title.split(' ').map(word => {
        console.log(title);
        if (!smallWords.includes(word.toLowerCase())) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return word.toLowerCase();
        }
    }).join(' ');  
    
    const lastChar = newTitle[newTitle.length - 1];
    if (!/[.,;!?]/.test(lastChar)) {
        newTitle += '.';
    }

    newTitle = newTitle.replace(/\s+/g, ' ');
    return newTitle;
}


console.log(correctTitle("jOn SnoW, kINg IN thE noRth")); 
//FIX   
console.log(correctTitle("sansa stark,lady of winterfell."));
console.log(correctTitle("TYRION LANNISTER, HAND OF THE QUEEN."));
console.log(correctTitle("TYRION LANNISTER,     HAND OF THE QUEEN"));





   