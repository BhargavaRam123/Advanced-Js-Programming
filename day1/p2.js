const students = [
  { id: 105, name: "Charlie", grade: 88 },
  { id: 103, name: "Bob", grade: 92 },
  { id: 101, name: "Alice", grade: 95 },
  { id: 109, name: "Eve", grade: 78 },
  { id: 107, name: "David", grade: 85 },
  { id: 113, name: "Grace", grade: 90 },
  { id: 111, name: "Frank", grade: 82 },
  { id: 115, name: "Hannah", grade: 97 },
];

function bubbleSortStudents(students, property) {
  const arr = [...students];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j][property] > arr[j + 1][property]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

const sortedById = bubbleSortStudents(students, "id");
const sortedByName = bubbleSortStudents(students, "name");
const sortedByGrade = bubbleSortStudents(students, "grade");

console.log("Sorted by ID:");
console.log(sortedById);
