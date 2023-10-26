function countWordOccurrences(text) {

  text = text.toLowerCase();

  // Split the text into words
  const words = text.split(/\s+/);

  // Create a Map to store word counts
  const wordCountMap = new Map();

  // Iterate through the words and count occurrences
  for (const word of words) {
    if (word.length > 0) {
      // Check if the word is not an empty string
      if (wordCountMap.has(word)) {
        // If the word is already in the map, increment the count
        wordCountMap.set(word, wordCountMap.get(word) + 1);
      } else {
        // If the word is not in the map, initialize the count to 1
        wordCountMap.set(word, 1);
      }
    }
  }

  return wordCountMap;
}

const text = "This is a sample text. This text contains sample words.";
const wordCounts = countWordOccurrences(text);

for (const [word, count] of wordCounts) {
  console.log(`${word}: ${count}`);
}
