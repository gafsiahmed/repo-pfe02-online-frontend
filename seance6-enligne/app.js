// console.log("Hello World !")

// console.log('--- Tache1 ---- ')
// console.log('--- Tache2 ---- ')
// console.log('--- Tache3 ---- ')

// console.log('--- Task 1 ✅ ---')
// setTimeout(()=>{
//     console.log('--- Task 2 ✅ ---')
// },0)
// console.log('--- Task 3 ✅ ---')

// let isWorker = true;
// let isMarried = false;
// let taskDone = false;

// const workerPromise = new Promise((resolve, reject) => {
//   if (isWorker) {
//     resolve("Andek lhak fi prime kenek m3ares");
//   } else {
//     reject("Sorry ma andekech ha9 fi prime , matkhdemch m3ana");
//   }
// });

// const marriedPromise = new Promise((resolve, reject) => {
//   if (isMarried) {
//     resolve("Andek prime b 150dt");
//   } else {
//     reject("Khsara ma andekech ha9 fel prime khatrek single");
//   }
// });

// workerPromise
//   .then((message) => {
//     console.log("Result of Promise Working : ", message);
//     return marriedPromise;
//   })
//   .then((message) => {
//     console.log("Result of Promise returned by then( )  : ", message);
//   })
//   .catch((err) => {
//     console.error("ERROR : ", err);
//   })
//   .finally(() => {
//     console.log("The work is Done ✅");
//   });

// getUser => Promise (resolve, reject )
// resolve : {
//          id , fullName , email
//}
// reject : "USER NOT FOUND"

function getUser(id) {
  return new Promise((resolve, reject) => {
    if (id >= 0) {
      resolve({
        id,
        fullName: "Emna Rahmoun",
        email: "emnarahmoun@gmail.com",
      });
    } else {
      reject("USER NOT FOUND");
    }
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    if (userId >= 0) {
      resolve([
        {
          id: 1,
          content: "Bonjour je suis a Mahdia , the Weather is Nice 🎉",
          userId: userId,
          postId: 111,
        },
        {
          id: 2,
          content: "I have Changed My Profil Picture",
          userId: userId,
          postId: 112,
        },
        {
          id: 3,
          content: "Happy Birthday My dear friend @randomFriend",
          userId: userId,
          postId: 113,
        },
      ]);
    }
    else {
        reject("POSTS NOT FOUND")
    }
  });
}

/*
{
    id : 1  //comment id,
    content : '-----------' ,
    postId : dynamique,
    userId : // eli kteb comment
}

*/

function getComments(postId) {
  return new Promise((resolve, reject) => {
    if (postId >= 0) {
      resolve([
        {
          id: 1,
          content: "Enjoy 💙",
          postId: postId,
          userId: 147,
        },
        {
          id: 2,
          content: "Saha Alik 💙",
          postId: postId,
          userId: 156,
        },
      ]);
    } else {
      reject("COMMENTS NOT FOUND");
    }
  });
}

function renderUser(user) {
  let userCard = document.createElement("div");
  userCard.classList.add("userCard");

  userCard.innerHTML = `<h3>${user.fullName}</h3>
        <p>Email : ${user.email} </p>`;

  let userPosts = document.querySelector(".userPosts")
  document.body.insertBefore(userCard,userPosts)
}

function renderPosts(post) {
  let postCard = document.createElement("div");
  postCard.innerHTML =
          `
          <div class='post'>
          <div class="content">
               ${post.content}
            </div>
           </div> 
            `;

    let postContainer =  document.querySelector('.userPosts')
    postContainer.append(postCard)
   
}

function renderComments(comment){
    let commentCard = document.createElement('div')
    commentCard.classList.add('comments')
    commentCard.innerHTML=` <p> ${comment.content} </p>`

    document.querySelector('.post').appendChild(commentCard)

}







// getUser(10)
//   .then((user) => {
//     console.log("user : ", user);
//     renderUser(user)
//     return getPosts(user.id);
//   })
//   .then((posts) => {
//     console.log("user posts : ", posts);

//     posts.map((post)=>{
//         renderPosts(post)
//     })

//     return getComments(posts[0].postId);
//   })
//   .then((comments) => {

//     comments.map((comment)=>{
//         renderComments(comment)
//     })

//     console.log("comments of the post :", comments[0].postId, comments);
//   })

//   .catch((err) => {
//     console.error("ERROR : ", err);
//   });



async function load(){

    try {
            let user = await getUser(10)
            renderUser(user)

             let posts = await getPosts(10)

            posts.map((post)=>{
                renderPosts(post)
            })

            let comments = await getComments(-30)
    
            comments.map((comment)=>{
                renderComments(comment)
            })
    }
    catch(error){
        console.log("OUR ERROR :",error)
    }

  
}



load()