// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = scores[0];
// Start coding here
for (let index = 0; index < scores.length; index++) {
  if (minScore > scores[index]) {
    minScore = scores[index];
  }
}
console.log(minScore);
