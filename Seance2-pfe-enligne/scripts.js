console.log('Hello Welcome to session2')





let Arr1 = [1,2,3,4]
let Arr2 = [4,5,6,7]


let Arr3 = Arr1.concat(Arr2)

console.log(Arr3)

let Arr3Elements = Arr3.join("/")

console.log(Arr3Elements, typeof(Arr3Elements))


let sliceFromArr3 = Arr3.slice(5,Arr3.length)

let slice2 = Arr3.slice(3,6)


console.log(sliceFromArr3)
console.log(slice2)
console.log(slice2)


// splice 

console.log("before Splice : ",Arr1)

let splicedArray = Arr1.splice(0,3,"a","a","a")

console.log(splicedArray)
console.log("After Splice : ", Arr1)

// let deletedStudents = students_names.splice(0,4,"deleted students","deleted students","deleted students","deleted students")


let students_names = ["Asma Mkadem","Bouzidi Eya", "Emna Rahmoun","Mohamed Hidri","Rania Manaa","Roua Amouri", "Yasmin Hsin"]


console.log(students_names)


students_names.unshift("Ahmed Gafsi")

console.log(students_names)

students_names.push("Ali Ben Salah")


let isStudentPresent = students_names.includes("Mohsen Ayari")
console.log('Is the student present or not :',isStudentPresent)

// console.log("Hello ",students_names[0],"Welcome to opuslab")

for(let i=0;i<students_names.length;i++){
    console.log("L'etudiant numero ",i+1, students_names[i])
}

console.log(('************************** '))

students_names.forEach(function(valeur,index){
     console.log("Welcome student number ",index+1,valeur)
})



console.log(Math.sqrt(25))

console.log(document.URL)



let paragraph = document.getElementById('paragraphe')

let title = document.getElementsByClassName("title")[0]

let links = document.getElementsByTagName('a')

let googleLink = links[0]
let facebookLink = links[1]

console.log(paragraph)
console.log(title)
console.log(googleLink)
console.log(facebookLink)


let link2 = document.querySelector('a')
let title2= document.querySelector('.title')
let para = document.querySelector('#paragraphe')

let allLinks = document.querySelectorAll('a')

console.log(link2)
console.log(title2)

console.log(allLinks)



console.log(students_names)

students_names.forEach(function(valeur,index){
     para.innerHTML = para.innerHTML+"<p>"+"Hello Student"+valeur+"</p"
})




title2.innerHTML = "<i> Hello this is new Content </i>"

title2.style.backgroundColor = "blue"
title2.style.color = "white"



let subscribeBtn = document.createElement('button')

subscribeBtn.textContent = "Subscribe Here"

// subscribeBtn.style.backgroundColor = "black"
// subscribeBtn.style.color = "white"


let div = document.querySelector('.div')

console.log(subscribeBtn)

document.body.insertBefore(subscribeBtn,div)


subscribeBtn.addEventListener('click',function(){
    // code eli bch nektbouh lehné bch ysirlou execution ki ysir click 

    document.body.style.backgroundColor = "yellow"
    document.body.style.color = "blue"


})