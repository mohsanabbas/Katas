function anagramCounter(wordsArray) {
  let counter = 0;
  wordsArray.forEach((element, idx) => {
    const word = wordsArray[idx];
    const newWord = word.split('').sort().join('');
    console.log(newWord);
    if (newWord === wordsArray[idx + 1]) {
      counter += 1;
      console.log(counter);
    }
  });

  return counter;
}
anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab']);
