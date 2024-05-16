// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i] - 10);
}

for (let item of scores) {
  console.log(item - 10);
}

let i = 0;
while (i < scores.length) {
  console.log(scores[i] - 10);
  i++;
}
