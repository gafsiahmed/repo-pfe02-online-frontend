const URL = 'https://randomuser.me/api'
const root = ReactDOM.createRoot(document.querySelector('#root'))
let currentUser = null



async function fetchUser(lien){
    const response = await fetch(lien)
    const data = await response.json()
    return data.results[0]
}

function UserCard({user}){
    return (
        <div className="userCard">
            <img src={user.picture.large} alt="user image"  />
            <h2>{user.name.title} {user.name.first}  {user.name.last}</h2>
            <h3>{user.login.username}</h3>
            <p>{user.email}</p>
            <p>{user.location.street.name} | City :{user.location.city} | country :{user.location.country}</p>
            <p>{user.phone}</p>
        </div>
    )
}





function App(){
    return (
    <div>
        <h1 id="title">Random User Generator</h1>
        <button id="fetchButton"
        onClick={async ()=>{
            currentUser = await fetchUser(URL)
            console.log("here --------------")
            root.render(<App/>)
        }}

        >Fetch User</button>


        {
            if(currentUser){
                <UserCard user={currentUser}/>
            }
            else{
                null
            }
        }

        {currentUser!=null ? <UserCard user={currentUser}/> : null}

    </div>
    )

}

root.render(<App/>)


