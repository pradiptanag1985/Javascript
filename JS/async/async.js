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




function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

getPosts();
createPost({title : 'Post 3', body : 'This is body of Post 3'}, getPosts);
