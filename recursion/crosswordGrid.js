let input = [
    ['+','+','+','+','+','+','+','+','+','+'],
    ['+','-','-','-','-','-','-','+','+','+'],
    ['+','+','+','-','+','+','+','+','+','+'],
    ['+','+','+','-','+','+','+','+','+','+'],
    ['+','+','+','-','-','-','-','-','+','+'],
    ['+','+','+','-','+','+','-','+','+','+'],
    ['+','+','+','+','+','+','-','+','+','+'],
    ['+','+','+','+','+','+','-','+','+','+'],
    ['+','+','+','+','+','+','-','+','+','+'],
    ['+','+','+','+','+','+','+','+','+','+']
];

function crosswordPuzzle(crossword, words) {
    // Convert crossword string to 2D array
  
    // Find horizontal and vertical words to fill
    const wordsToFill = findWordsToFill(crossword, words);
  
    // Fill the words into the crossword
    fillWords(crossword, wordsToFill);
    console.log(crossword);
    // Convert the 2D array back to string and return
    return crossword;
  }
  
  function findWordsToFill(crosswordArr, words) {
    const wordsToFill = [];
  
    // Find horizontal words to fill
    for (let i = 0; i < 10; i++) {
      let word = '';
      for (let j = 0; j < 10; j++) {
        if (crosswordArr[i][j] === '-') {
          word += ' ';
        } else if (word.length > 1) {
          wordsToFill.push({ word, i, j: j - word.length });
          word = '';
        } else {
          word = '';
        }
      }
      if (word.length > 1) {
        wordsToFill.push({ word, i, j: 10 - word.length });
      }
    }
  
    // Find vertical words to fill
    for (let j = 0; j < 10; j++) {
      let word = '';
      for (let i = 0; i < 10; i++) {
        if (crosswordArr[i][j] === '-') {
          word += ' ';
        } else if (word.length > 1) {
          wordsToFill.push({ word, i: i - word.length, j });
          word = '';
        } else {
          word = '';
        }
      }
      if (word.length > 1) {
        wordsToFill.push({ word, i: 10 - word.length, j });
      }
    }
  
    // Sort words to fill by length
    wordsToFill.sort((a, b) => a.word.length - b.word.length);
  
    return wordsToFill;
  }
  
  function fillWords(crosswordArr, wordsToFill) {
    // Recursively fill words into the crossword
    const fill = (i) => {
      if (i === wordsToFill.length) {
        return true;
      }
      const { word, i: row, j: col } = wordsToFill[i];
      for (let k = 0; k < word.length; k++) {
        const char = word[k];
        if (
          (crosswordArr[row][col + k] !== '-' && crosswordArr[row][col + k] !== char) ||
          (crosswordArr[row + k][col] !== '-' && crosswordArr[row + k][col] !== char)
        ) {
          return false;
        }
        crosswordArr[row][col + k] = char;
        crosswordArr[row + k][col] = char;
      }
      return fill(i + 1);
    };
  
    fill(0);
  }
  


function solveThePuzzle(arr,words){
    
}

let words = ['POLAND','LHASA','SPAIN','INDIA']
console.log(input.length);
console.log(input[0].length);

console.log(crosswordPuzzle(input,words));
console.log(words);