fetch('https://localhost:8000/profile/9')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.title);
});