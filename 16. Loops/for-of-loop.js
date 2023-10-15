// for of loop
const scores = {
    maths: 85,
    science: 90,
    english: 80,
    computer: 100
}
total = 0;

for (const score of Object.values(scores)) {
    total += score;
}
avg = total / Object.values(scores).length;
console.log(avg); // 88.75
for (a in scores) {
    console.log(a); // maths science english computer
}
for (a of scores) {
    console.log(a); // TypeError: scores is not iterable
}
// for of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
// for in loop is used to iterate over enumerable objects like objects, arrays, strings, etc.