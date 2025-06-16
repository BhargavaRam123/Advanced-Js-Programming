const students = [
  {
    id: 1,
    name: "Alice",
    grade: 10,
    scores: { math: 92, english: 87, science: 93, history: 82 },
  },
  {
    id: 2,
    name: "Bob",
    grade: 11,
    scores: { math: 75, english: 92, science: 78, history: 89 },
  },
  {
    id: 3,
    name: "Charlie",
    grade: 10,
    scores: { math: 88, english: 81, science: 85, history: 91 },
  },
  {
    id: 4,
    name: "Diana",
    grade: 12,
    scores: { math: 95, english: 89, science: 94, history: 93 },
  },
  {
    id: 5,
    name: "Eva",
    grade: 11,
    scores: { math: 81, english: 85, science: 83, history: 88 },
  },
];

let high = -1;
students.map((o) => {
  let s = 0;
  for (let v of o.scores) {
    s += v;
  }
});
