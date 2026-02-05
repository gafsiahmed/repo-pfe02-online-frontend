let students = [
  {
    lastName: "Manna",
    firstName: "Rania",
    grade: 17,
    classe: "A"
  },
  {
    lastName: "Gafsi",
    firstName: "Ahmed",
    grade: 15,
    classe: "B"
  },
  {
    lastName: "Trabelsi",
    firstName: "Youssef",
    grade: 12,
    classe: "C"
  },
  {
    lastName: "Ben Romdhane",
    firstName: "Ons",
    grade: 18,
    classe: "A"
  },
  {
    lastName: "Jebali",
    firstName: "Sarra",
    grade: 14,
    classe: "B"
  },
  {
    lastName: "Maalej",
    firstName: "Skander",
    grade: 11,
    classe: "C"
  },
  {
    lastName: "Bhiri",
    firstName: "Amir",
    grade: 16,
    classe: "A"
  },
  {
    lastName: "Saad",
    firstName: "Farah",
    grade: 19,
    classe: "B"
  },
  {
    lastName: "Bouazizi",
    firstName: "Malek",
    grade: 13,
    classe: "C"
  },
  {
    lastName: "Dhaouadi",
    firstName: "Ines",
    grade: 20,
    classe: "A"
  }
];


let studentForm = document.querySelector('.addStudent')

let firstNameinput = document.querySelector('#firstName')
let lastNameinput = document.querySelector('#lastName')
let gradeinput = document.querySelector('#grade')
let classeinput = document.querySelector('#classe')

let studentTable = document.querySelector('.studentTable')

studentForm.addEventListener('submit',function(event){

    event.preventDefault()

    let newStudent = {
         firstName: firstNameinput.value ,
         lastName: lastNameinput.value,
        grade: gradeinput.value,
        classe: classeinput.value
    }
    students.push(newStudent)
    renderStudentList(students)
})


function renderStudentList(list){
  
    list.forEach(function(student){

    let newLine = 
        `<tr>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.classe}</td>
                <td>${student.grade}</td>
        </tr>`

        studentTable.innerHTML += newLine
    })
}
