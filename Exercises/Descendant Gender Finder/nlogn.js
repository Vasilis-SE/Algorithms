// Resolves the gender of any node given it's index position.
function getGender(n) {
    if(n == 0) return 'M';
    if(n == 1 || n == 2) return 'F';
  
    let positions = [];
    let i = n;
    
    // Find the nth child's ancestor positions
    while(true) {
        if(i == 0) break;
        i = i / 2;
        positions.push(i);
        i = parseInt(i);
    }

    // Iterate throught the positions to find their gender
    let idx = 0;
    let parentGenderPath = ['M'];
    while(positions.length > 0) {
        let childPos = positions.pop();

        if((childPos - parseInt(childPos)) === 0 && parentGenderPath[idx] === 'M') parentGenderPath.push('M');
        if((childPos - parseInt(childPos)) !== 0 && parentGenderPath[idx] === 'M') parentGenderPath.push('F');
        if((childPos - parseInt(childPos)) === 0 && parentGenderPath[idx] === 'F') parentGenderPath.push('F');
        if((childPos - parseInt(childPos)) !== 0 && parentGenderPath[idx] === 'F') parentGenderPath.push('M');

        idx++;
    }

    // Return the desired node gender.
    return parentGenderPath.pop();
}


console.log(getGender(2));
console.log(getGender(3));
console.log(getGender(42));
console.log(getGender(324132));
console.log(getGender(999236146127204));