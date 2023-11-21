// Sample data
let posts = [];
let lastActivityTime = null;

// Function to simulate creating a post
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve(posts);
    }, 1000);
  });
}

// Function to simulate updating the last user activity time
function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

// Function to simulate deleting the last post
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        posts.pop();
        resolve(posts);
      } else {
        reject("No posts to delete");
      }
    }, 1000);
  });
}

// Function to log posts and lastActivityTime
function logPostsAndActivity() {
  console.log("Posts:", posts);
  console.log("Last Activity Time:", lastActivityTime);
}

// Simulating the scenario
createPost("First Post")
  .then((updatedPosts) => {
    posts = updatedPosts;
    return updateLastUserActivityTime();
  })
  .then((updatedActivityTime) => {
    lastActivityTime = updatedActivityTime;
    logPostsAndActivity();
    return deletePost();
  })
  .then((remainingPosts) => {
    posts = remainingPosts;
    logPostsAndActivity();
  })
  .catch((error) => {
    console.log( error);
  });
