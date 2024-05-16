// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
//for loop
for (let index = 0; index < scores.length; index++) {
  scores[index] = scores[index] - 10;
}
console.log(scores);
//forIn
for (let order in scores) {
  scores[order] = scores[order] - 10;
}
console.log(scores);
//forOf
for (let iterator of scores) {
  iterator = iterator - 10;
  console.log(iterator);
}
//forEach
scores.forEach((element) => {
  element = element - 10;
  console.log(element);
});
