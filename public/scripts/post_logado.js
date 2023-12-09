const deletePost = async () => {
    const response = await fetch('http://localhost:8000/getpostid')
    const postId = await response.json()
    const deleteUrl = 'http://localhost:8000/posts/' + postId;

    try {
        const response = await fetch(deleteUrl, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log('Post deleted successfully');
        } else {
            console.error('Failed to delete post');
        }
    } catch (error) {
        console.error('Error while deleting post', error);
    }
}


document.getElementById('delete').addEventListener('click', () =>{
    console.log('funcionou');
    deletePost()
});