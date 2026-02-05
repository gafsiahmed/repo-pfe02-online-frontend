// create user card function completed ✅
export default function createUserCard(user){


    return `<div id="userContainer">
                <div class="userCard">
                    <img src=${user.picture.large} alt="">
                    <h2>Full Name : ${user.name.title} ${user.name.first}  ${user.name.last}  </h2>
                    <h3>Username : ${user.login.username} </h3>
                    <p class="email">Email : ${user.email} </p>
                    <p>Street Name : ${user.location.street.name} | City :  ${user.location.city} | country :  ${user.location.country} </p>
                    <p class="phone">Phone Number : ${user.phone} </p>
                </div>
            </div>`
}