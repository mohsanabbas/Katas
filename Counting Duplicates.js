
function duplicateCount(text) {
  const lowerText = text.toLowerCase();
  let duplicateCounter = 0;
  const dups = {};
  for (let i = 0; i < lowerText.length; i += 1) {
    const currentChar = lowerText.charAt(i);
    if (!dups[currentChar]) {
      duplicateCounter += 1;
      dups[currentChar] = -1;
    }
  }
  return duplicateCounter;
}
console.log(duplicateCount('AAbaCc'));
