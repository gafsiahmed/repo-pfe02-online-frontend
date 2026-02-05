// import { division,multiply,soustract,valeurPI } from "./lib/maths.js"
// import add from "./lib/maths.js"
// import print  from "./lib/greet.js"

const URL = 'https://randomuser.me/api'
import fetchUser from './features/fetchUser.js'
import createUserCard from './features/createUserCard.js'
import renderUserCard from './features/renderUserCard.js'


let nodeContainer = document.querySelector('#userContainer')


document
.querySelector('#fetchButton')
.addEventListener('click',async ()=>{
    let fetchedUser = await fetchUser(URL)    
    let userCard = createUserCard(fetchedUser)  
    renderUserCard(userCard,nodeContainer)
})

async function main(){
    
    let fetchedUser = await fetchUser(URL)    
    let userCard = createUserCard(fetchedUser)  
    renderUserCard(userCard,nodeContainer)
}

main()


// console.log("add  : " , add(3,5))
// console.log("soustract  : " , soustract(3,5))
// console.log("multiply  : " , multiply(3,5))
// console.log("division  : " , division(3,5))
// console.log("Cercle perim de rayon 5 ",multiply(5,2*valeurPI))