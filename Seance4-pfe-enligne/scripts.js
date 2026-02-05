console.log('----- code session 4 -----')

let studentName = "Ahmed Gafsi"
// let user_name = "Mohamed Salah"


const PI = 3.14

function perimetre(rayon){
    return 2*PI*rayon
}



function multiplication(var1, var2){
    let result = var1 * var2
    console.log(result)
    return result
}

// console.log(result)

multiplication(20,36)


function addition(var1,var2){
    return var1+var2
}
function soustraction (var1,var2){
    return var1-var2
}

function power(valeur){
    return valeur*valeur
}

let multi = (variable1, variable2) => variable1*variable2
let add = (var1,var2) => var1+var2
let sous = (var1,var2) => var1-var2

let powTwo = nbr => nbr*nbr
let pow = (nbr,power) => nbr ** power


console.log(multi(10,20) ,  "multiplication using Arrow function ")
console.log(add(10,20),  "Addition using Arrow function ")
console.log(sous(30,20),  "Soustraction using Arrow function ")
console.log(powTwo(20),  "Power two using Arrow function ")
console.log(pow(20,3),  " A Power B using Arrow function ")


let productsPrices = [13,12,150,200,186,123]

console.log(productsPrices ,"before augme")

let newPrices = productsPrices.map(price=>price+10)
let pricesUnder100 = newPrices.filter(price => price<100)
console.log(newPrices , "After Augme")
console.log("Product Prices under 100 : ",pricesUnder100)



let fruits = ["Banane","Apple","Orange","Strawberries","Ananas","Mango","Blueberries"]

let [fruit1,fruit2,fruit3,...theRestOfFruits] = fruits

console.log(fruit1)
console.log(fruit2)
console.log(fruit3)
console.log(theRestOfFruits)

let userInfo = {
    name : "Ali",
    lastName : "Ben Ali",
    age : 29
}

let { name, lastName, age } = userInfo

console.log(name,lastName,age)


let somme = 0;

for (let comp=1;comp<=10;comp++){
    let myName = "Ahmed Gafsi"
    somme+=comp
}
console.log(somme)



let userAge =20;
if(userAge<18){
    // creation variable esmou message 
    const message = "Hello Dear Client"
    console.log(message,"Sorry you can't enter")
}else {
    const message = "Hello Dear Client"
    console.log(message,"welcome you can enter")
}


const userName = "Peter";

function sayUserNameAgain() {
    const userName = "Sarah";
 // Invoke the first function
    function sayUserName() {
        console.log(userName,PI);
    }

 sayUserName();
}


sayUserNameAgain(); 

clientName = "Ali"
var clientName;
console.log(clientName)
var note = 18.36
console.log(note)



greet("ali")
greet2("Asma")

function greet(name){
    console.log('Hello Mr/ms',name)
}

let greet2 = (esmk) => console.log("hello ",esmk)
