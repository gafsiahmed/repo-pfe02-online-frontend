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
    grade: 8,
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
    grade: 6,
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
    grade: 9,
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

    affichierListeEtudiant(students)
})


function affichierListeEtudiant(list){

    studentTable.innerHTML= ' '

    list.forEach(student => {
     
        let tableRow = document.createElement('tr') 

        let firstNameData = document.createElement('td') 
        let lastNameData = document.createElement('td') 
        let classData = document.createElement('td') 
        let gradeData = document.createElement('td') 

      firstNameData.textContent = student.firstName
      lastNameData.textContent = student.lastName
      classData.textContent = student.classe
      gradeData.textContent = student.grade

      tableRow.appendChild(firstNameData)
      tableRow.appendChild(lastNameData)
      tableRow.appendChild(classData)
      tableRow.appendChild(gradeData)

      studentTable.appendChild(tableRow)
    });

}



affichierListeEtudiant(students)



// Filter where grade < 10 
function filterGradeInf10(list){
   let filterdList = list.filter((student)=> {
        return student.grade < 10
   })

   return filterdList
}


// filter where grade >= 10 
function filterGradeSup10(list){
   let filterdList = list.filter((student)=> {
        return student.grade >= 10
   })

   return filterdList
}



// filter by Classe
function filterByClasse(list,classe){
   let filterdList = list.filter((student)=> {
        return student.classe  == classe
   })

   return filterdList
}


let gradeInf10 = document.querySelector('.gradeInf10')
let gradeSup10 = document.querySelector('.gradeSup10')
let selectClasse = document.querySelector('#selectClasse')

// button 1  :  inferieur a 10 

gradeInf10.onclick = ()=>{
    let newList = filterGradeInf10(students)
    affichierListeEtudiant(newList)
}


gradeSup10.onclick = ()=>{
    let newList = filterGradeSup10(students)
    affichierListeEtudiant(newList)
}


selectClasse.onclick = (event)=>{

    let selectedOption = event.target.value

    let newList = filterByClasse(students,selectedOption)
    affichierListeEtudiant(newList)
}


// Statistics Part 
// ------------------------

let totalStudents = document.querySelector('.totalStudents')
let averageGrade = document.querySelector('.averageGrade')
let highestGrade = document.querySelector('.highestGrade')
let lowestGrade = document.querySelector('.lowestGrade')



// const AVG = students.reduce((acc, student)=>{
  //     return acc+student.grade
  // },0) /  students.length
  
  


// let maximumGrade = students[0].grade
// let minimumGrade = students[0].grade

// students.forEach((student)=> {
//     if(student.grade >maximumGrade ){
//       maximumGrade = student.grade
//     }
//     else if(student.grade < minimumGrade  ){
//       minimumGrade = student.grade
//     }
// })


/*  

let statistics = {
  totalStudents : 0
  averageGrade :  0 
  highestGrade : 0 
  lowestGrade : 0
}

*/ 


let statistics =  students.reduce((acc , student)=>{

  acc.sumGrade = (acc.sumGrade + student.grade ) 

  if ( student.grade > acc.highestGrade) {
    acc.highestGrade = student.grade
  }
  else if (student.grade< acc.lowestGrade){
    acc.lowestGrade = student.grade
  }

  return acc
}, 
{
  totalStudents : students.length,
  sumGrade :  0 ,
  highestGrade : 0, 
  lowestGrade : Infinity
})


totalStudents.innerHTML = statistics.totalStudents
averageGrade.innerHTML = statistics.sumGrade / statistics.totalStudents
highestGrade.innerHTML = statistics.highestGrade
lowestGrade.innerHTML = statistics.lowestGrade

