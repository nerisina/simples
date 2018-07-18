var students = [
  {
    name: 'Neri',
    track: 'Web',
    acheievments: 'senior js',
    points: 2000
  },
  {
    name: 'Bob',
    track: 'iOS',
    acheievments: 'js',
    points: 33000
  },
  {
    name: 'Pepe',
    track: 'Desktop',
    acheievments: 'js',
    points: 2000
  },
  {
    name: 'Jesus',
    track: 'Web',
    acheievments: 'css,js',
    points: 2000
  },
  {
    name: 'Sandra',
    track: 'Web',
    acheievments: 'html',
    points: 2000
  }
];
var message = '';
var search, student;

function print(message) {
  var outputUL = document.getElementById('output');
  outputUL.innerHTML = message;
}

function getStudentReport(student) {
  var report = '<span class="mdc-list-item__text">' + student.name + '</span>';
  report += '  <span class="mdc-list-item__secondary-text">Points: ' + student.points + '</span>';
  return report;
}

while (true) {
  search = prompt('Search student records: type a name [Jody] (or type "quit" to end)');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
  student = students[i];
    if (student.name === search) {
      message = getStudentReport(student);
      print(message);
      break;
    }

}
}
