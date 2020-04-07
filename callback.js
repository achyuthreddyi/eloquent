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

    }, 10000)
}
  
function createPost(post,callback){
    setTimeout(_=>{
        posts.push(post)
        callback()

    },2000)
}

createPost({title: "postone", body: " this is the added post one"},getPosts);
console.log(posts)