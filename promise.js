const posts = [ 
    { title: "postone", body: " this is post one"},
    { title: "postone", body: " this is post one"}

];

function getPosts(){
    setTimeout(_=>{
        let output = '';
        posts.forEach((post , index) =>{
            output += `<li>${post.title}</li>`       

        })
        document.body.innerHTML = output;

    }, 1000)
}
function createPost(post){
    return new Promise( (resolve, reject) =>{
        // setTimeout( () =>{
           
            posts.push(post)
            const error = false
            if(!error){  console.log(resolve);resolve()}
            reject('Error: something went wrong')

        // },2000)
    })
}
// createPost({title: "post added", body: " this is the added post one"})
//     .then(getPosts)
//     .then(console.log('hello babe'))
//     .catch(err => console.log(err))

//  async await
// async function init(){
//     createPost({title: "post added", body: " this is the added post one"})
//     getPosts()   

// }
//  init()

//  async await with fetch
async function fetchusers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)

}
fetchusers()




    
//  promise.all
// const promise1 = Promise.resolve('hello world')
// const promise2 = 10
// const promise3 = new Promise((resolve,reject) =>{
//     // setTimeout(resolve,2000,'goodbye')
//     resolve('goodbye')
//     reject('ass hole')
   
// })

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
// Promise.all([promise1,promise2,promise3,promise4])
// .then(((values) => console.log(values)))
// .catch(err => console.log(err))


