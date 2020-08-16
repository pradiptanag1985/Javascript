const posts = [
    {title : 'Post 1', body : 'This is Post 1'},
    {title : 'Post 2', body : 'This is Post 2'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) =>  {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error');
            }
        }, 2000);
    });
    
}

//Single promise
/*createPost({title : 'Post 3', body : 'This is body of Post 3'})
.then(getPosts)
.catch((err) => console.log(err));*/

//Async Await
async function init() {
    await createPost({title : 'Post 3', body : 'This is body of Post 3'});
    getPosts();
}
init();

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
fetchUsers();


//Multiple promises
/*const promise1 = Promise.resolve('Hello World');
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Good Bye');
});

const promise3 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));*/

