console.log('-------- fetch api server ✅ ------')
let tableBody = document.querySelector('.tableBody')
let fetchBtn = document.querySelector('.fetchBtn')
let getUserForm = document.querySelector('form')
let searchInput = document.querySelector('.userInput')


const API_URL = "https://jsonplaceholder.typicode.com/users"

// we get the Response from the API
// we will transform the response to a Promise with .json()



fetchBtn.addEventListener('click',()=>{

        fetch(API_URL)
        .then((response)=>{
        return response.json()
        })
        //
        .then((users)=>{
            // we will get the data from the promise 
            console.log("List of users :", users)
            // khthina lista mte3 users w mapina bch nasn3ou ligne fel table kol ligne feha utilisateur wehed

            tableBody.innerHTML =""
            users.map((user)=>{
            let userRow = `<tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.username}</td>
                                <td>${user.email}</td>
                                <td>${user.phone}</td>
                            </tr>`
            tableBody.innerHTML+= userRow
            })
        })
})




getUserForm.addEventListener('submit',(event)=>{
        event.preventDefault()
        let userId = parseInt(searchInput.value)
        let URL = `https://jsonplaceholder.typicode.com/u/${userId}`

        fetch(URL)
        .then((response)=>{
            if (response.status == 200){
                return response.json()
            }
            else{
                console.log("ERROR IN THE SERVER 🟥")
            }
        })
        .then((user)=>{
            console.log(user)

            let userCard = `<div class="specificUser">
                                <h2>${user.name}</h2>
                                <p>Username: ${user.username}</p>
                                <p>Email : ${user.email}</p>
                                <p>Phone : ${user.phone}</p>    
                                <p>Company : ${user.company.name}</p>
                                <p>Adress -  street : ${user.address.street} | city : ${user.address.city} </p>
                             </div>`



            document.querySelector('.userContainer').innerHTML = ""
            document.querySelector('.userContainer').innerHTML = userCard
        })
})



function createNewUser(){
    fetch("https://jsonplaceholder.typicode.com/posts",
        {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                username : "aligharbi",
                name : "Ali Gharbi",
                phone : "55669941"
            })
        })
        .then((response)=>{
            if (response.status == 201){
                console.log("USER CREATED ✅")
            }
        })
}


function deleteUser(){
      fetch("https://jsonplaceholder.typicode.com/users/1",
        {
            method : 'DELETE',
        })
        .then((response)=>{
            if(response.status == 200) {
                console.log(" USER DELETED 🟥")
            }
        })
       
}

createNewUser()
deleteUser()







