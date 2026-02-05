// This is a comment
// alert("hello world");

/* 
this is a multiple
line 
comment
*/



console.log("Message numero 1");
console.log("Message numero 2");
console.log("Message numero 3");


let user_name = "Ahmed Gafsi"

user_name = "Lina Gharbi"

console.log("Hello user :"+user_name)

const TVA = 15.36


let myNameString = "Ahmed Gafsi"
let discountValue = 20
let totalPrice = 1236.96
let isPayingCash = true 
let isMember;


console.log(myNameString , "type : " , typeof(myNameString))
console.log(discountValue ,"type : " , typeof(discountValue))
console.log(totalPrice , "type : " ,typeof(totalPrice))
console.log(isPayingCash ,"type : " , typeof(isPayingCash))
console.log(isMember ,"type : " , typeof(isMember))


console.error("This is an error i created it")
console.info('this is website is for learning')



let user_info = {

    user_name : "Ali Ben Ali",
    user_age : 25,
    isMarried : false,
    isStudent : true,

    sayHello : function(randomName){
        console.log("Hello ",randomName)
    }
}



console.log(user_info.user_name,user_info.user_age,user_info.isMarried,user_info.isStudent
)

user_info.sayHello('Roua Amorri')


console.log(user_info,"le type de la varibale user_info", typeof(user_info))




let myArray = ["Ali",25.36,true, undefined , user_info]


console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[3])
console.log(myArray[4].user_name)



console.log(myArray,"le type de variable my Array :", typeof(myArray))


console.log(myArray.length)
console.log(myArray)



myArray.push('Mohamed Hidri')

console.log(myArray)


myArray.pop()

console.log(myArray)


myArray.unshift("Yassmine Hsin")

console.log(myArray)


myArray.shift()

console.log(myArray)


let Arr1 = [1,2,3,4]
let Arr2 = [5,6,7,8] 


let Arr3 = Arr1.concat(Arr2)

console.log(Arr3)


console.log(Arr3.join('//'))

let sliceFromArr3 = Arr3.slice(1,4)

console.log(sliceFromArr3)
console.log(Arr3)


Arr3.splice(0,3,"0","0","0")
console.log(Arr3)


console.log(Arr3.includes("0"))
console.log(Arr3.indexOf(8))

Arr3.reverse()
console.log(Arr3)

Arr3.sort()
console.log(Arr3)



Arr3.forEach(function(element){
    console.log(element)
})









