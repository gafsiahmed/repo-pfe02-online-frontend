console.log("************ Seance9 : React.js the old way ************* ")

// 1/ lets create the React image element 
let img = React.createElement('img',{
   src :"./photo.jpg",
   alt : "picture of the user" ,
   width : "200px"
})
// 2/ lets create the React h1 element 
let userFullName = React.createElement('h1',
    {
        className : 'title'
    },
    "Med Ali Gharbi"
)

let newElement = document.createElement('h1')
newElement.innerHTML = "new para"

document.body.append(newElement)
console.log(userFullName)

// 3/ lets create the React p element 
let userAdress = React.createElement('p',
    {
        className : 'adress'
    },
    "Rue Hay Nour 1126 ,Manouba,Tunis"
)
// 4/ lets create the React button element 
let contactBtn = React.createElement('button',
    {
        className : 'contactBtn',
        onClick : function(){
            alert('hey we cantacted the user')
        }
    },
    "Click here to call!!"
)


let deleteBtn = React.createElement('button',null,"delete")
// 5/ lets create the div <== img,h1,p,button
let userCard = React.createElement(
    'div',
    {className : 'userCard'},
    img,
    userFullName,
    userAdress,
    contactBtn,
    deleteBtn
   
)


// 6/ lets render the div in the root element
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(userCard)

