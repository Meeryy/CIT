// Sample blog posts data
const posts = [
    {
        title: "First Blog Post",
        content: "This is the content of the first blog post.",
        date: "January 1, 2023"
    },
    {
        title: "Second Blog Post",
        content: "This is the content of the second blog post.",
        date: "February 1, 2023"
    }
];

// Function to display blog posts
function displayPosts() {
    const postList = document.getElementById('post-list');
    posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.classList.add('post-item');
        postItem.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <small>Published on: ${post.date}</small>
        `;
        postList.appendChild(postItem);
    });
}

// Call the function to display posts on page load
window.onload = displayPosts;