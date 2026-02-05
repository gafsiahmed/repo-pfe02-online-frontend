console.log("----- Séance 5 ----")

// let title = document.querySelector('.title')
// let paragraphe = document.querySelector('.paragraphe')


// console.log(title)


// title.style.backgroundColor = "black"
// title.style.color = "white"


// console.log('--- Tache 1 ---- Done ✅')
// console.log('--- Tache 2 ---- Done ✅')
// console.log('--- Tache 3 ---- Done ✅')



// setTimeout( callback , time(en milliseconde) )
// setTimeout( 
// ()=>{
//     // code a executé apres la duré
// },duré)


// console.log('--- Tache 1 ---- Done ✅')

// setTimeout(() => {
//     console.log('--- Tache 2 ---- Done ✅')
// }, 2000);

// // for(let i =0; i<10000;i++){
// //     console.log("Wait am working on the task")
// // }

// console.log('--- Tache 3 ---- Done ✅')

// console.log('--- Tache 4 ---- Done ✅')




// let multiply = (a,b) => a*b


// function functionA ( ){
//     let result = 10
//     console.log("--- fonction A ---")

//     return function functionB(){
//         console.log("--- fonction B ----")
//     }
// }

// let tache2 = functionA()

// functionA()
// tache2()




// function sayHello(esm,callback){
//     console.log(`Hello ya ${esm} marhbé bik`)

//     callback()
// }



// sayHello("Ahmed Gafsi",()=>{
//     console.log("Alakhir , See you later")
// })




// function showName(esm, la9ab){

//     let message = "Hello esm raw : "

//     function lemEsmLa9ab(){
//         let alkhir = "Tesbah alakhir"
//         return `${message} ${esm} ${la9ab} ${alkhir}`
//     }

//     return lemEsmLa9ab()
// }


//  let fullName = showName("Ahmed","Gafsi")


//  console.log(fullName)





// La definition mte3 Promise
let promise = new Promise((resolve, reject)=>{

    let njah = true
    
    if( njah == true){
        resolve(' Mabrouuk , bch nkatik cadeau iphone')
    }
    else{
        reject('Inshalah l marra jey , khasara famech cadeau')
    }

})

// fulfilled : resolved ✅
// rejected : REJECTED ❌
// Pending

// fel phase hethi bch nestghalou l promise
// .then(callback) : bch netsghalou el resultat mte3 promise only when the promise is resolved ✅ (fulfilled)


// let promiseResult = document.querySelector('.promiseResult')


// promise
// .then((data)=>{
//     // code eli nhebou n'exuctiwh fel success
//     // console.log(data,"Data From the promise")
//     promiseResult.innerHTML = data
//     promiseResult.classList.add('success')
// })
// .catch((err)=>{
//      promiseResult.innerHTML = err
//      promiseResult.classList.add('failure')
// })



let form = document.querySelector('.form')
let moyenneInput = document.querySelector('.moyenneInput')
let promiseResult = document.querySelector('.promiseResult')
let njehElement = document.querySelector('.njeh')



function resultatMoyenne(moyenne){
    let promise = new Promise((resolve,reject)=>{
        if(moyenne >= 10){
            resolve('Mabrouk el njeh, félicitation 🎉')
        }
        else{
            reject("Alaghaleb Control , Inshalah Marra jeya 🥲")
        }
    })

    return promise
}


function njeh(){
    return new Promise((resolve,reject)=>{
        resolve('Encore une fois felicitation , andek cadeau ekher l3am fel hafla')
    })
}
// function failure(){}


form.addEventListener('submit',(event)=>{
    event.preventDefault()

    let userMoy = moyenneInput.value

    resultatMoyenne(userMoy)
    .then((data)=>{
        // bch netsghalou data w nbadlou fel UI ( user interface )
        promiseResult.classList.add('success')
        promiseResult.classList.remove('failure')
        promiseResult.innerHTML = data

        return njeh()
    })
    .then((data)=>{
        njehElement.innerHTML = data
    })
    .catch((message)=>{
        // bch nestghalou message w nbadlou fel ui en cas ma njahch 
        promiseResult.classList.add('failure')
         promiseResult.classList.remove('success')
         njehElement.innerHTML =""
        promiseResult.innerHTML = message
    })

})