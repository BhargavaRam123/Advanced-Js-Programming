const students = [
  { id: 101, name: "Alice" },
  { id: 103, name: "Bob" },
  { id: 105, name: "Charlie" },
  { id: 107, name: "David" },
  { id: 109, name: "Eve" },
  { id: 111, name: "Frank" },
  { id: 113, name: "Grace" },
  { id: 115, name: "Hannah" },
];

function findStudentById(students, targetId) {
  let left = 0;
  let right = students.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (students[mid].id === targetId) {
      return students[mid];
    }

    if (students[mid].id < targetId) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}

console.log(findStudentById(students, 107));
console.log(findStudentById(students, 104));
