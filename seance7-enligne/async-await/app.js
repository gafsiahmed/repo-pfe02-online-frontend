console.log("----- Server Running ✅ ---- ")



// Promise 1 - Login() 
function login(username,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(username === "admin" && password=== "1234"){
                resolve(
                    {
                       token : "jwt_fake_token_0000" 
                    }
                )
            }
            else {
                reject('INVALID CREDENTIALS')
            }
        },2000)
    })
}


// Promise : Fucntion getUserInfo(token)

function getUserInfo(token){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
                if(token !== ""){
                    resolve({
                        id : 1,
                        name : "Ali ben Salah",
                        email : "ali@gmail.com",
                        role : "Software Engineer"
                    })
                }
                else{
                    reject("INVALID TOKEN")
                }
        },2000)
    })
}


// getMessages( )

function getMessages(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
                if(userId >= 0){
                    resolve([
                        {
                            id : 1,
                            text : "Welcome Back Mrs Ali"
                        },
                        {
                            id :2 ,
                            text : "Your Course starts tommirow morning at 10:30am"
                        }
                    ])
                }
                else{
                    reject("USER NOT FOUND")
                }
        },2000)
    })
}



function getNotifications(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
                if(userId >= 0){
                    resolve([
                        {
                            id : 1,
                            type : "Alert",
                            text : "New Password changed in your account"
                        },
                         {
                            id : 2,
                            type : "Info",
                            text : "Asma has sent you a friend request"
                        }
                    ])
                }
                else{
                    reject("USER NOT FOUND")
                }
        },1000)
    })
}


let randomPromise = new Promise((resolve, reject) => {
   setTimeout(()=>{
         resolve("Am a random promise")
   },4000)
})

async function startApp(){


     try {
        const token = await login("admin","1234")
        console.log("Login done ✅ ", token)

        const userInfos = await getUserInfo(token)
        console.log("User Info ✅ ", userInfos)

        // const messages = await getMessages(userInfos.id)
        // console.log("Messages ✅ ", messages)

        // const notifications = await getNotifications(userInfos.id)
        // console.log("Notification ✅ ", notifications)

        const [messages, notifications,...rest] = await Promise.all([getMessages(userInfos.id),getNotifications(userInfos.id),randomPromise])

        console.log("Messages : ",messages)
        console.log("Notifications : ",notifications)
        // console.log(rest)
        const response = await Promise.race([getMessages(userInfos.id),getNotifications(-2)])
        console.log(response)

     } catch (error) {
         console.log("ERROR 🟥 | Message : ",error)
     }
   
}


startApp()