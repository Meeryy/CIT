// Function to fetch blog posts from the API
async function fetchPosts() {
    try {
        const response = await fetch('/api/posts'); // Fetch posts from the API
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts = await response.json(); // Parse the JSON response
        displayPosts(posts); // Call the function to display posts
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Function to display blog posts
function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = ''; // Clear existing posts
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

// Call the fetchPosts function on page load
window.onload = fetchPosts;