console.log("------------ Seance 3 ------------");
let newLink = document.createElement("a");
console.log("Etape 1 : ", newLink);

// Façon 1
// newLink.textContent = "Google.com"

// Façon 2 :
let linkContent = document.createTextNode("Vist Google");

console.log(linkContent);

newLink.appendChild(linkContent);

console.log("Etape 2 : ", newLink);

newLink.href = "https://www.google.com";
newLink.target = "_blank";

console.log("Etape 3 : ", newLink);

// document.body.appendChild(newLink)

let firstParagraph = document.querySelector(".firstParagraph");

document.body.insertBefore(newLink, firstParagraph);

// We create an event Listner to the button - dark/light Mode

let darkBtn = document.querySelector(".darkBtn");

console.log(darkBtn);

// Methode 1 :

// darkBtn.onclick = function(){
//     console.log('------ btn clicked from js ------ ')
// }

// Methode 2 :

function esmFunction(parametres) {
  //code a executer
}

//darkBtn.addEventListener("eventType", "anonymousFunction")

darkBtn.addEventListener("click", function () {
  // code li nhebouh ysirlou execution wa9t nenzlou 3al button ( event : click )

  console.log("--- Dark Mode activé ---");

  let isDark = document.body.classList.contains("darkmode");

  // Senario 1 : isDark mode true
  if (isDark == true) {
    document.body.classList.remove("darkmode");
    darkBtn.textContent = "Dark Mode";
  } else {
    document.body.classList.add("darkmode");
    darkBtn.textContent = "Light Mode";
  }
});

let onlineStudentNames = ["Asma", "Roua", "Mohamed", "Yassmine"];

let studentNames = ["Ali", "Rawdha", "Salim", "Amine", "Sarra"];

const allStudent = [...onlineStudentNames, ...studentNames, "Amira", "Salima"];

console.log(allStudent);

const [firstStudent, secondStudent, thirdStudent, ...rest] = allStudent;

console.log(firstStudent, "First Student");
console.log(secondStudent, "Second Student");
console.log(thirdStudent, "third Student");
console.log(rest, "rest of Students");

console.log(onlineStudentNames);

// 1 ere methods

// for(let i=0; i<studentsGrades.length; i++){
//     // studentsGrades[i] += 2;
//      studentsGrades[i] =  studentsGrades[i] + 2;
// }

// console.log(studentsGrades)

// Methode 2

// let newGrades = []

// studentsGrades.forEach(function(item){

//     newItem = item + 2
//     newGrades.push(newItem)

// })

// console.log(newGrades)
let studentsGrades = [12, 13.6, 14, 4, 0, 2, 10, 18, 19, 20];

let newGrades2 = studentsGrades.map(function (item) {
  return item + 2;
});

console.log(newGrades2);

let successGrades = studentsGrades.filter(function (item) {
  return item >= 10;
});

console.log(successGrades);

let failedStudents = studentsGrades.filter(function (item) {
  return item < 10;
});

console.log(failedStudents);

const AVGGrade = studentsGrades.reduce(
  function (total, grade) {
    return total + grade;
  },
 0
);

console.log(AVGGrade.totalGrades);
